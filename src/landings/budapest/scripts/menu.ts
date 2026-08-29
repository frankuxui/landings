// Budapest — mobile navigation menu toggle.
export {}

const toggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]")
const panel = document.querySelector<HTMLDivElement>("[data-menu-panel]")
const menuItems = panel?.querySelectorAll<HTMLElement>("[data-menu-item]")
const menuVisual = panel?.querySelector<HTMLElement>("[data-menu-visual]")
const menuMeta = panel?.querySelector<HTMLElement>("[data-menu-meta]")
const focusableSelector =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

if (toggle && panel) {
  let lastFocusedElement: HTMLElement | null = null
  let animateOpen: (() => void) | undefined
  let animateClose: ((onComplete: () => void) => void) | undefined
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")

  if (!reducedMotion.matches) {
    import("gsap").then(({ gsap }) => {
      gsap.set(panel, {
        clipPath: "circle(0% at calc(100% - 3rem) 3rem)",
        autoAlpha: 0,
      })
      gsap.set([menuItems, menuVisual, menuMeta], { autoAlpha: 0, y: 22 })

      animateOpen = () => {
        gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .to(panel, {
            autoAlpha: 1,
            clipPath: "circle(145% at calc(100% - 3rem) 3rem)",
            duration: 0.55,
          })
          .to(
            [menuItems, menuVisual, menuMeta],
            { autoAlpha: 1, y: 0, duration: 0.44, stagger: 0.045 },
            0.16,
          )
      }

      animateClose = (onComplete: () => void) => {
        gsap
          .timeline({ defaults: { ease: "power2.inOut" }, onComplete })
          .to([menuItems, menuVisual, menuMeta], {
            autoAlpha: 0,
            y: 16,
            duration: 0.18,
            stagger: 0.015,
          })
          .to(
            panel,
            {
              autoAlpha: 0,
              clipPath: "circle(0% at calc(100% - 3rem) 3rem)",
              duration: 0.35,
            },
            0.08,
          )
      }
    })
  }

  const getFocusableElements = (): HTMLElement[] =>
    Array.from(panel.querySelectorAll<HTMLElement>(focusableSelector)).filter(
      (element: HTMLElement) => !element.hasAttribute("disabled"),
    )

  const open = (): void => {
    lastFocusedElement = document.activeElement as HTMLElement | null
    toggle.setAttribute("aria-expanded", "true")
    toggle.setAttribute("aria-label", "Close navigation menu")
    panel.setAttribute("aria-hidden", "false")
    document.body.style.overflow = "hidden"
    animateOpen?.()

    window.setTimeout(
      () => {
        const firstFocusable = getFocusableElements()[0]
        firstFocusable?.focus()
      },
      reducedMotion.matches ? 0 : 180,
    )
  }

  const close = (): void => {
    const finishClose = (): void => {
      toggle.setAttribute("aria-expanded", "false")
      toggle.setAttribute("aria-label", "Open navigation menu")
      panel.setAttribute("aria-hidden", "true")
      document.body.style.overflow = ""
      lastFocusedElement?.focus()
    }

    if (animateClose) {
      animateClose(finishClose)
      return
    }

    finishClose()
  }

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true"
    isOpen ? close() : open()
  })

  panel
    .querySelectorAll<HTMLAnchorElement>("[data-mobile-nav-link]")
    .forEach((link: HTMLAnchorElement) => {
      link.addEventListener("click", close)
    })

  document.addEventListener("keydown", (event: KeyboardEvent) => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true"

    if (event.key === "Escape" && isOpen) {
      close()
    }

    if (event.key === "Tab" && isOpen) {
      const focusableElements = getFocusableElements()
      const firstFocusable = focusableElements[0]
      const lastFocusable = focusableElements[focusableElements.length - 1]

      if (!firstFocusable || !lastFocusable) return

      if (event.shiftKey && document.activeElement === firstFocusable) {
        event.preventDefault()
        lastFocusable.focus()
      }

      if (!event.shiftKey && document.activeElement === lastFocusable) {
        event.preventDefault()
        firstFocusable.focus()
      }
    }
  })
}
