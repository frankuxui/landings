export {}

const button = document.querySelector<HTMLButtonElement>("[data-back-to-top]")
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
)

if (button) {
  const updateVisibility = (): void => {
    const isVisible = window.scrollY > window.innerHeight
    button.classList.toggle("is-visible", isVisible)
    button.setAttribute("aria-hidden", String(!isVisible))
    button.tabIndex = isVisible ? 0 : -1
  }

  button.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion.matches ? "auto" : "smooth",
    })
  })

  window.addEventListener("scroll", updateVisibility, { passive: true })
  window.addEventListener("resize", updateVisibility)
  updateVisibility()
}
