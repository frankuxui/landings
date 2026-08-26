import gsap from "gsap"

export {}

const toggles =
  document.querySelectorAll<HTMLButtonElement>("[data-menu-toggle]")
const panel = document.querySelector<HTMLElement>("[data-mobile-menu]")
const links = panel?.querySelectorAll<HTMLAnchorElement>("[data-mobile-link]")
const openIcon = document.querySelector<HTMLElement>("[data-menu-open-icon]")
const closeIcon = document.querySelector<HTMLElement>("[data-menu-close-icon]")
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")

let isOpen = false

const setExpanded = (expanded: boolean): void => {
  toggles.forEach((toggle: HTMLButtonElement): void =>
    toggle.setAttribute("aria-expanded", String(expanded)),
  )
  openIcon?.classList.toggle("hidden", expanded)
  closeIcon?.classList.toggle("hidden", !expanded)
}

const open = (): void => {
  if (!panel || isOpen) return
  isOpen = true
  panel.classList.remove("hidden")
  panel.classList.add("flex")
  setExpanded(true)
  document.body.classList.add("overflow-hidden")
  if (reduced.matches || !links?.length) return
  gsap.fromTo(panel, { opacity: 0 }, { opacity: 1, duration: 0.3 })
  gsap.fromTo(
    links,
    { y: 28, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.5,
      stagger: 0.06,
      delay: 0.1,
      ease: "power3.out",
    },
  )
}

const close = (): void => {
  if (!panel || !isOpen) return
  isOpen = false
  setExpanded(false)
  document.body.classList.remove("overflow-hidden")
  const finish = (): void => {
    panel.classList.add("hidden")
    panel.classList.remove("flex")
  }
  if (reduced.matches) {
    finish()
    return
  }
  gsap.to(panel, {
    opacity: 0,
    duration: 0.25,
    ease: "power2.in",
    onComplete: finish,
  })
}

toggles.forEach((toggle: HTMLButtonElement): void =>
  toggle.addEventListener("click", (): void => (isOpen ? close() : open())),
)
links?.forEach((link: HTMLAnchorElement): void =>
  link.addEventListener("click", close),
)
window.addEventListener("keydown", (event: KeyboardEvent): void => {
  if (event.key === "Escape") close()
})
