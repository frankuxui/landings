export {}

const button = document.querySelector<HTMLButtonElement>("[data-back-to-top]")
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")
const update = (): void => {
  const visible = window.scrollY > window.innerHeight
  button?.classList.toggle("pointer-events-none", !visible)
  button?.classList.toggle("opacity-0", !visible)
  button?.classList.toggle("scale-90", !visible)
  button?.setAttribute("aria-hidden", String(!visible))
  if (button) button.tabIndex = visible ? 0 : -1
}
button?.addEventListener("click", (): void =>
  window.scrollTo({ top: 0, behavior: reduced.matches ? "auto" : "smooth" }),
)
window.addEventListener("scroll", update, { passive: true })
update()
