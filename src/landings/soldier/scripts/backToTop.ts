export {}

const button = document.querySelector<HTMLButtonElement>("[data-back-to-top]")
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
const threshold = 720

function setVisible(isVisible: boolean): void {
  if (!button) return
  button.classList.toggle("is-visible", isVisible)
  button.setAttribute("aria-hidden", String(!isVisible))
  button.tabIndex = isVisible ? 0 : -1
}

function updateVisibility(): void {
  setVisible(window.scrollY > threshold)
}

button?.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: reduceMotion.matches ? "auto" : "smooth",
  })
})

window.addEventListener("scroll", updateVisibility, { passive: true })
updateVisibility()
