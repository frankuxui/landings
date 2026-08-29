// Terroir — floating "back to top" control.
export {}

const SHOW_THRESHOLD_VIEWPORTS = 1

const button = document.querySelector<HTMLButtonElement>("[data-back-to-top]")

if (button) {
  const prefersReducedMotion = (): boolean =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches

  const updateVisibility = (): void => {
    const threshold = window.innerHeight * SHOW_THRESHOLD_VIEWPORTS
    const isVisible = window.scrollY > threshold
    button.classList.toggle("is-visible", isVisible)
    button.setAttribute("aria-hidden", String(!isVisible))
    button.tabIndex = isVisible ? 0 : -1
  }

  window.addEventListener("scroll", updateVisibility, { passive: true })
  updateVisibility()

  button.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    })
  })
}
