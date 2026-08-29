export {}

const sliders = document.querySelectorAll<HTMLElement>("[data-comparison]")

function setPosition(slider: HTMLElement, clientX: number): void {
  const rect = slider.getBoundingClientRect()
  const raw = ((clientX - rect.left) / rect.width) * 100
  const clamped = Math.min(96, Math.max(4, raw))
  slider.style.setProperty("--comparison-position", `${clamped}%`)
}

sliders.forEach((slider: HTMLElement) => {
  const handle = slider.querySelector<HTMLElement>("[data-comparison-handle]")
  if (!handle) return

  handle.addEventListener("pointerdown", (event: PointerEvent) => {
    handle.setPointerCapture(event.pointerId)
    setPosition(slider, event.clientX)
  })

  handle.addEventListener("pointermove", (event: PointerEvent) => {
    if (!handle.hasPointerCapture(event.pointerId)) return
    setPosition(slider, event.clientX)
  })

  slider.addEventListener("click", (event: MouseEvent) => {
    setPosition(slider, event.clientX)
  })

  handle.addEventListener("keydown", (event: KeyboardEvent) => {
    const current = Number.parseFloat(
      slider.style.getPropertyValue("--comparison-position") || "50",
    )
    const step = event.shiftKey ? 10 : 4
    if (event.key === "ArrowLeft") {
      event.preventDefault()
      slider.style.setProperty(
        "--comparison-position",
        `${Math.max(4, current - step)}%`,
      )
    }
    if (event.key === "ArrowRight") {
      event.preventDefault()
      slider.style.setProperty(
        "--comparison-position",
        `${Math.min(96, current + step)}%`,
      )
    }
  })
})
