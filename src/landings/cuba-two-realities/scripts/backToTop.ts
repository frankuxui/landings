export {}

const button = document.querySelector<HTMLButtonElement>("[data-back-to-top]")
const media = window.matchMedia("(prefers-reduced-motion: reduce)")

function syncVisibility(): void {
  if (!button) return
  const visible = window.scrollY > window.innerHeight
  button.classList.toggle("is-visible", visible)
  button.setAttribute("aria-hidden", String(!visible))
  button.tabIndex = visible ? 0 : -1
}

button?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: media.matches ? "auto" : "smooth" })
})

window.addEventListener("scroll", syncVisibility, { passive: true })
syncVisibility()
