import gsap from "gsap"

const toggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]")
const menu = document.querySelector<HTMLElement>("[data-mobile-menu]")
const links = Array.from(
  document.querySelectorAll<HTMLElement>("[data-menu-link]"),
)
const openIcon = document.querySelector<HTMLElement>("[data-menu-icon-open]")
const closeIcon = document.querySelector<HTMLElement>("[data-menu-icon-close]")

let previouslyFocused: HTMLElement | null = null
let isOpen = false

function setMenuState(open: boolean): void {
  if (!toggle || !menu) return
  isOpen = open
  toggle.setAttribute("aria-expanded", String(open))
  toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu")
  menu.setAttribute("aria-hidden", String(!open))
  document.body.classList.toggle("overflow-hidden", open)
  openIcon?.classList.toggle("hidden", open)
  closeIcon?.classList.toggle("hidden", !open)
}

function openMenu(): void {
  if (!menu || isOpen) return
  previouslyFocused = document.activeElement as HTMLElement | null
  setMenuState(true)
  gsap
    .timeline({ defaults: { ease: "power3.out" } })
    .to(menu, {
      opacity: 1,
      y: 0,
      clipPath: "inset(0% 0% 0% 0% round 2rem)",
      duration: 0.55,
    })
    .fromTo(
      links,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.38, stagger: 0.06 },
      "-=0.25",
    )
  links[0]?.focus()
}

function closeMenu(): void {
  if (!menu || !isOpen) return
  gsap.to(menu, {
    opacity: 0,
    y: 16,
    clipPath: "inset(0 0 100% 0 round 2rem)",
    duration: 0.35,
    ease: "power3.inOut",
    onComplete: () => {
      setMenuState(false)
      previouslyFocused?.focus()
    },
  })
}

toggle?.addEventListener("click", () => {
  if (isOpen) closeMenu()
  else openMenu()
})

links.forEach((link: HTMLElement) => {
  link.addEventListener("click", closeMenu)
})

window.addEventListener("keydown", (event: KeyboardEvent) => {
  if (event.key === "Escape") closeMenu()
})
