import gsap from "gsap"

export {}

const toggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]")
const closeButton =
  document.querySelector<HTMLButtonElement>("[data-menu-close]")
const panel = document.querySelector<HTMLElement>("[data-menu-panel]")
const links = Array.from(
  document.querySelectorAll<HTMLAnchorElement>("[data-menu-panel] a"),
)
const backgroundSiblings = [
  document.querySelector<HTMLElement>("main"),
  document.querySelector<HTMLElement>("footer"),
]

let previousFocus: HTMLElement | null = null

function setBackgroundInert(isInert: boolean): void {
  backgroundSiblings.forEach((element: HTMLElement | null) => {
    if (!element) return
    element.inert = isInert
  })
  document.body.classList.toggle("overflow-hidden", isInert)
}

function focusableElements(): HTMLElement[] {
  if (!panel) return []
  return Array.from(
    panel.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  )
}

function animateOpen(): void {
  if (!panel) return
  gsap.fromTo(
    panel,
    { xPercent: -102 },
    { xPercent: 0, duration: 0.75, ease: "power3.out" },
  )
  gsap.fromTo(
    links,
    { yPercent: 110, opacity: 0 },
    {
      yPercent: 0,
      opacity: 1,
      duration: 0.65,
      ease: "power3.out",
      stagger: 0.06,
      delay: 0.15,
    },
  )
  gsap.fromTo(
    "[data-menu-meta]",
    { opacity: 0, y: 24 },
    { opacity: 1, y: 0, duration: 0.5, delay: 0.38, ease: "power2.out" },
  )
}

function animateClose(): void {
  if (!panel) return
  gsap.to(panel, { xPercent: -102, duration: 0.45, ease: "power3.in" })
}

function openMenu(): void {
  if (!toggle || !panel) return
  previousFocus = document.activeElement as HTMLElement | null
  toggle.setAttribute("aria-expanded", "true")
  toggle.setAttribute("aria-label", "Close navigation")
  panel.setAttribute("aria-hidden", "false")
  setBackgroundInert(true)
  animateOpen()
  focusableElements()[0]?.focus()
}

function closeMenu(restoreFocus: boolean): void {
  if (!toggle || !panel) return
  toggle.setAttribute("aria-expanded", "false")
  toggle.setAttribute("aria-label", "Open navigation")
  panel.setAttribute("aria-hidden", "true")
  setBackgroundInert(false)
  animateClose()
  if (restoreFocus) previousFocus?.focus()
}

if (toggle && panel) {
  gsap.set(panel, { xPercent: -102 })
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true"
    if (isOpen) {
      closeMenu(true)
    } else {
      openMenu()
    }
  })

  closeButton?.addEventListener("click", () => closeMenu(true))

  links.forEach((link: HTMLAnchorElement) => {
    link.addEventListener("click", () => closeMenu(false))
  })

  document.addEventListener("keydown", (event: KeyboardEvent) => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true"
    if (!isOpen) return
    if (event.key === "Escape") {
      closeMenu(true)
      return
    }
    if (event.key !== "Tab") return
    const elements = focusableElements()
    if (elements.length === 0) return
    const first = elements[0]
    const last = elements[elements.length - 1]
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  })
}
