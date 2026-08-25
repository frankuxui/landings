// Solar Energy — floating "back to top" control.
// A passive scroll listener toggles the button's visible state once the
// reader has scrolled past one viewport height; the button itself scrolls
// back to the top, respecting prefers-reduced-motion.
//
// The `export {}` below makes this file an ES module instead of a global
// script, so its top-level declarations stay scoped to this landing and
// never collide with another landing's own `<script>`-loaded TypeScript
// during type-checking.
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
