// Budapest — mobile navigation menu toggle.
export {}

const toggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]")
const panel = document.querySelector<HTMLDivElement>("[data-menu-panel]")

if (toggle && panel) {
  const open = (): void => {
    toggle.setAttribute("aria-expanded", "true")
    toggle.setAttribute("aria-label", "Close navigation menu")
    panel.setAttribute("aria-hidden", "false")
    document.body.style.overflow = "hidden"
  }

  const close = (): void => {
    toggle.setAttribute("aria-expanded", "false")
    toggle.setAttribute("aria-label", "Open navigation menu")
    panel.setAttribute("aria-hidden", "true")
    document.body.style.overflow = ""
  }

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true"
    isOpen ? close() : open()
  })

  panel
    .querySelectorAll<HTMLAnchorElement>("[data-mobile-nav-link]")
    .forEach((link: HTMLAnchorElement) => {
      link.addEventListener("click", close)
    })

  document.addEventListener("keydown", (event: KeyboardEvent) => {
    if (
      event.key === "Escape" &&
      toggle.getAttribute("aria-expanded") === "true"
    ) {
      close()
      toggle.focus()
    }
  })
}
