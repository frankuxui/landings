// Fundición Ónix — accessible full-screen mobile navigation toggle.
// A real <button> drives `aria-expanded`, closes on Escape, closes when a
// nav link is activated, and returns focus to the trigger on close.
//
// The `export {}` below makes this file an ES module instead of a global
// script, so its top-level declarations stay scoped to this landing and
// never collide with another landing's own `<script>`-loaded TypeScript
// during type-checking.
export {}

const toggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]")
const panel = document.querySelector<HTMLElement>("[data-menu-panel]")

// The full-screen panel visually covers <main> and <footer> when open.
// Without this, both remain focusable and reachable by screen-reader browse
// mode while hidden behind the panel.
const backgroundSiblings = [
  document.querySelector<HTMLElement>("main"),
  document.querySelector<HTMLElement>("footer"),
]

const setBackgroundInert = (isInert: boolean): void => {
  backgroundSiblings.forEach((element: HTMLElement | null) => {
    if (!element) return
    element.inert = isInert
  })
}

if (toggle && panel) {
  const closeMenu = (): void => {
    toggle.setAttribute("aria-expanded", "false")
    toggle.setAttribute("aria-label", "Abrir menú de navegación")
    panel.setAttribute("aria-hidden", "true")
    setBackgroundInert(false)
  }

  const openMenu = (): void => {
    toggle.setAttribute("aria-expanded", "true")
    toggle.setAttribute("aria-label", "Cerrar menú de navegación")
    panel.setAttribute("aria-hidden", "false")
    setBackgroundInert(true)
  }

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true"
    if (isOpen) {
      closeMenu()
    } else {
      openMenu()
    }
  })

  panel
    .querySelectorAll<HTMLAnchorElement>("[data-mobile-nav-link]")
    .forEach((link: HTMLAnchorElement) => {
      link.addEventListener("click", () => {
        closeMenu()
      })
    })

  document.addEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key !== "Escape") return
    if (toggle.getAttribute("aria-expanded") !== "true") return
    closeMenu()
    toggle.focus()
  })
}
