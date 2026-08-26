export {}

const toggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]")
const menu = document.querySelector<HTMLElement>("[data-mobile-menu]")
const openIcon = document.querySelector<HTMLElement>("[data-menu-open-icon]")
const closeIcon = document.querySelector<HTMLElement>("[data-menu-close-icon]")
const close = (): void => {
  menu?.classList.add("hidden")
  toggle?.setAttribute("aria-expanded", "false")
  openIcon?.classList.remove("hidden")
  closeIcon?.classList.add("hidden")
}
toggle?.addEventListener("click", (): void => {
  const opening = menu?.classList.contains("hidden") ?? false
  menu?.classList.toggle("hidden")
  toggle.setAttribute("aria-expanded", String(opening))
  openIcon?.classList.toggle("hidden")
  closeIcon?.classList.toggle("hidden")
})
menu
  ?.querySelectorAll<HTMLAnchorElement>("a")
  .forEach((link: HTMLAnchorElement): void =>
    link.addEventListener("click", close),
  )
