import { gsap } from "gsap"

export {}

const toggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]")
const panel = document.querySelector<HTMLElement>("[data-menu-panel]")
const links = Array.from(
  document.querySelectorAll<HTMLAnchorElement>(".mobile-menu-link"),
)
const numbers = Array.from(
  document.querySelectorAll<HTMLElement>(".mobile-menu-number"),
)
const menuPhoto = document.querySelector<HTMLElement>(".mobile-menu-photo")
const menuMeta = Array.from(
  document.querySelectorAll<HTMLElement>(".mobile-menu-meta > *"),
)
const background = [
  document.querySelector<HTMLElement>("main"),
  document.querySelector<HTMLElement>("footer"),
]

let lastFocused: HTMLElement | null = null
let activeTimeline: gsap.core.Timeline | null = null

if (panel) {
  gsap.set(panel, { xPercent: 100 })
}

function focusableElements(): HTMLElement[] {
  if (!panel) return []
  return Array.from(
    panel.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  )
}

function setBackgroundInert(isInert: boolean): void {
  background.forEach((element: HTMLElement | null) => {
    if (!element) return
    element.inert = isInert
  })
}

function openMenu(): void {
  if (!toggle || !panel) return
  lastFocused = document.activeElement as HTMLElement | null
  activeTimeline?.kill()
  toggle.setAttribute("aria-expanded", "true")
  toggle.setAttribute("aria-label", "Close menu")
  panel.setAttribute("aria-hidden", "false")
  panel.classList.remove("invisible")
  document.documentElement.classList.add("overflow-hidden")
  document.body.classList.add("overflow-hidden")
  setBackgroundInert(true)

  activeTimeline = gsap
    .timeline({ defaults: { ease: "power3.out" } })
    .fromTo(panel, { xPercent: 100 }, { xPercent: 0, duration: 0.72 })
    .fromTo(
      menuPhoto,
      { clipPath: "inset(0 0 100% 0)", opacity: 0.65 },
      { clipPath: "inset(0 0 0% 0)", opacity: 1, duration: 0.62 },
      "-=0.56",
    )
    .fromTo(
      links,
      { yPercent: 110 },
      { yPercent: 0, duration: 0.56, stagger: 0.055 },
      "-=0.42",
    )
    .fromTo(
      numbers,
      { x: -24, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.36, stagger: 0.04 },
      "-=0.45",
    )
    .fromTo(
      menuMeta,
      { y: 16, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.38, stagger: 0.05 },
      "-=0.32",
    )

  focusableElements()[0]?.focus()
}

function closeMenu(restoreFocus = true): void {
  if (!toggle || !panel) return
  activeTimeline?.kill()
  toggle.setAttribute("aria-expanded", "false")
  toggle.setAttribute("aria-label", "Open menu")
  panel.setAttribute("aria-hidden", "true")
  document.documentElement.classList.remove("overflow-hidden")
  document.body.classList.remove("overflow-hidden")
  setBackgroundInert(false)

  activeTimeline = gsap.timeline({
    defaults: { ease: "power2.inOut" },
    onComplete: () => panel.classList.add("invisible"),
  })

  activeTimeline.to(panel, {
    xPercent: 100,
    duration: 0.42,
  })

  if (restoreFocus) lastFocused?.focus()
}

toggle?.addEventListener("click", () => {
  const isOpen = toggle.getAttribute("aria-expanded") === "true"
  if (isOpen) closeMenu()
  else openMenu()
})

links.forEach((link: HTMLAnchorElement) => {
  link.addEventListener("click", () => closeMenu(false))
})

document.addEventListener("keydown", (event: KeyboardEvent) => {
  if (!toggle || toggle.getAttribute("aria-expanded") !== "true") return
  if (event.key === "Escape") {
    event.preventDefault()
    closeMenu()
    return
  }
  if (event.key !== "Tab") return

  const focusables = focusableElements()
  const first = focusables[0]
  const last = focusables.at(-1)
  if (!first || !last) return

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault()
    first.focus()
  }
})
