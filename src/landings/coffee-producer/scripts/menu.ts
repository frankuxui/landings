// Coffee Producer - accessible mobile navigation toggle.
// A real <button> drives `aria-expanded`, closes on Escape, closes when a
// nav link is activated, and returns focus to the trigger on close.
const toggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]")
const nav = document.querySelector<HTMLElement>("[data-menu-panel]")
const backdrop = document.querySelector<HTMLElement>("[data-menu-backdrop]")

// On mobile, the open nav drawer visually replaces <main> and <footer>.
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

if (toggle && nav) {
  const closeMenu = (): void => {
    toggle.setAttribute("aria-expanded", "false")
    toggle.setAttribute("aria-label", "Open navigation menu")
    nav.setAttribute("aria-hidden", "true")
    backdrop?.setAttribute("aria-hidden", "true")
    setBackgroundInert(false)
  }

  const openMenu = (): void => {
    toggle.setAttribute("aria-expanded", "true")
    toggle.setAttribute("aria-label", "Close navigation menu")
    nav.setAttribute("aria-hidden", "false")
    backdrop?.setAttribute("aria-hidden", "false")
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

  nav
    .querySelectorAll<HTMLAnchorElement>("a")
    .forEach((link: HTMLAnchorElement) => {
      link.addEventListener("click", () => {
        closeMenu()
      })
    })

  backdrop?.addEventListener("click", () => {
    closeMenu()
  })

  document.addEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key !== "Escape") return
    if (toggle.getAttribute("aria-expanded") !== "true") return
    closeMenu()
    toggle.focus()
  })
}
