// Budapest — accessible historical before/after comparator.
export {}

type ComparatorElements = {
  root: HTMLElement
  handle: HTMLButtonElement
}

const root = document.querySelector<HTMLElement>("[data-then-now]")
const handle = root?.querySelector<HTMLButtonElement>("[data-then-now-handle]")

const clamp = (value: number): number => Math.min(100, Math.max(0, value))

const setPosition = (
  elements: ComparatorElements,
  nextPosition: number,
): void => {
  const position = clamp(nextPosition)
  elements.root.style.setProperty("--then-now-position", `${position}%`)
  elements.handle.setAttribute("aria-valuenow", String(Math.round(position)))
  elements.handle.setAttribute(
    "aria-valuetext",
    `${Math.round(position)} percent historical image visible`,
  )
}

if (root && handle) {
  const elements: ComparatorElements = { root, handle }
  let isDragging = false

  const updateFromClientX = (clientX: number): void => {
    const rect = root.getBoundingClientRect()
    const nextPosition = ((clientX - rect.left) / rect.width) * 100
    setPosition(elements, nextPosition)
  }

  const stopDragging = (): void => {
    isDragging = false
  }

  root.addEventListener("pointerdown", (event: PointerEvent) => {
    isDragging = true
    root.setPointerCapture(event.pointerId)
    updateFromClientX(event.clientX)
    handle.focus()
  })

  root.addEventListener("pointermove", (event: PointerEvent) => {
    if (!isDragging) return
    updateFromClientX(event.clientX)
  })

  root.addEventListener("pointerup", stopDragging)
  root.addEventListener("pointercancel", stopDragging)
  root.addEventListener("lostpointercapture", stopDragging)

  handle.addEventListener("keydown", (event: KeyboardEvent) => {
    const current = Number(handle.getAttribute("aria-valuenow") ?? "50")
    const step = event.shiftKey ? 10 : 4

    if (event.key === "ArrowLeft") {
      event.preventDefault()
      setPosition(elements, current - step)
    }

    if (event.key === "ArrowRight") {
      event.preventDefault()
      setPosition(elements, current + step)
    }

    if (event.key === "Home") {
      event.preventDefault()
      setPosition(elements, 0)
    }

    if (event.key === "End") {
      event.preventDefault()
      setPosition(elements, 100)
    }
  })

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  )

  if (!prefersReducedMotion.matches) {
    const observer = new IntersectionObserver(
      (
        entries: IntersectionObserverEntry[],
        instance: IntersectionObserver,
      ) => {
        const isVisible = entries.some(
          (entry: IntersectionObserverEntry) => entry.isIntersecting,
        )
        if (!isVisible) return

        import("gsap").then(({ gsap }) => {
          gsap
            .timeline({ defaults: { ease: "power2.inOut" } })
            .to(root, {
              "--then-now-position": "64%",
              duration: 0.65,
              onUpdate: () => {
                const value = Number.parseFloat(
                  getComputedStyle(root)
                    .getPropertyValue("--then-now-position")
                    .replace("%", ""),
                )
                handle.setAttribute("aria-valuenow", String(Math.round(value)))
              },
            })
            .to(root, {
              "--then-now-position": "50%",
              duration: 0.75,
              onComplete: () => setPosition(elements, 50),
            })
        })

        instance.disconnect()
      },
      { threshold: 0.45 },
    )

    observer.observe(root)
  }
}
