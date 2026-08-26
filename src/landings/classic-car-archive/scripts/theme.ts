export {}

const storageKey = "classic-car-archive:theme"
const toggle = document.querySelector<HTMLButtonElement>("[data-theme-toggle]")
const lightIcon = document.querySelector<HTMLElement>(
  '[data-theme-icon="light"]',
)
const darkIcon = document.querySelector<HTMLElement>('[data-theme-icon="dark"]')

type Theme = "light" | "dark"

const isTheme = (value: string | null): value is Theme =>
  value === "light" || value === "dark"

const applyTheme = (theme: Theme): void => {
  document.documentElement.setAttribute("data-theme", theme)
  localStorage.setItem(storageKey, theme)
  toggle?.setAttribute(
    "aria-label",
    theme === "dark" ? "Switch to light theme" : "Switch to dark theme",
  )
  lightIcon?.classList.toggle("hidden", theme !== "light")
  darkIcon?.classList.toggle("hidden", theme !== "dark")
}

const currentTheme = (): Theme => {
  const active = document.documentElement.getAttribute("data-theme")
  return isTheme(active) ? active : "dark"
}

applyTheme(currentTheme())

toggle?.addEventListener("click", () => {
  applyTheme(currentTheme() === "dark" ? "light" : "dark")
})

window.addEventListener("message", (event: MessageEvent) => {
  if (typeof event.data !== "object" || event.data === null) return
  const payload = event.data as { theme?: string; type?: string }
  const theme = payload.theme ?? null
  if (payload.type !== "preview:theme" || !isTheme(theme)) return
  applyTheme(theme)
})
