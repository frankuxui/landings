import gsap from "gsap"

export {}

const toggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]")
const panel = document.querySelector<HTMLElement>("[data-menu-panel]")
const line = document.querySelector<HTMLElement>("[data-menu-line]")
const links = Array.from(
  document.querySelectorAll<HTMLAnchorElement>("[data-menu-link]"),
)
const openIcon = document.querySelector<HTMLElement>('[data-menu-icon="open"]')
const closeIcon = document.querySelector<HTMLElement>(
  '[data-menu-icon="close"]',
)
const backgroundSiblings = [
  document.querySelector<HTMLElement>("main"),
  document.querySelector<HTMLElement>("footer"),
]

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches

const setBackgroundInert = (isInert: boolean): void => {
  backgroundSiblings.forEach((element: HTMLElement | null) => {
    if (!element) return
    element.inert = isInert
  })
}

const setIconState = (isOpen: boolean): void => {
  openIcon?.classList.toggle("hidden", isOpen)
  closeIcon?.classList.toggle("hidden", !isOpen)
}

if (toggle && panel) {
  const closeMenu = (): void => {
    toggle.setAttribute("aria-expanded", "false")
    toggle.setAttribute("aria-label", "Open section navigation")
    panel.setAttribute("aria-hidden", "true")
    panel.inert = true
    panel.classList.remove("is-open")
    setIconState(false)
    setBackgroundInert(false)

    if (!prefersReducedMotion) {
      gsap.to(line, { scaleX: 0, duration: 0.22, ease: "power2.in" })
    }
  }

  const openMenu = (): void => {
    toggle.setAttribute("aria-expanded", "true")
    toggle.setAttribute("aria-label", "Close section navigation")
    panel.setAttribute("aria-hidden", "false")
    panel.inert = false
    panel.classList.add("is-open")
    setIconState(true)
    setBackgroundInert(true)

    if (!prefersReducedMotion) {
      gsap.fromTo(
        line,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.6, ease: "power3.out" },
      )
      gsap.fromTo(
        links,
        { y: 26, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.06, ease: "power3.out" },
      )
    }
  }

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true"
    if (isOpen) closeMenu()
    else openMenu()
  })

  links.forEach((link: HTMLAnchorElement) => {
    link.addEventListener("click", closeMenu)
  })

  document.addEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key !== "Escape") return
    if (toggle.getAttribute("aria-expanded") !== "true") return
    closeMenu()
    toggle.focus()
  })
}
