export {}

const button = document.querySelector<HTMLButtonElement>("[data-back-to-top]")
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)")

function updateButton(): void {
  if (!button) return
  const visible = window.scrollY > window.innerHeight
  button.toggleAttribute("data-visible", visible)
  button.setAttribute("aria-hidden", String(!visible))
  button.tabIndex = visible ? 0 : -1
}

button?.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: reduceMotion.matches ? "auto" : "smooth",
  })
})

window.addEventListener("scroll", updateButton, { passive: true })
updateButton()
