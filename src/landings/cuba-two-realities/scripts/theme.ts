import { isTheme, type Theme } from "../../../types/theme"
import type { PreviewThemeMessage } from "../../../types/preview"

export {}

const STORAGE_KEY = "cuba-two-realities:theme"

function isPreviewThemeMessage(value: unknown): value is PreviewThemeMessage {
  if (typeof value !== "object" || value === null) return false
  const candidate = value as Record<string, unknown>
  return (
    candidate.type === "preview:theme" &&
    typeof candidate.theme === "string" &&
    isTheme(candidate.theme)
  )
}

function currentTheme(): Theme {
  return document.documentElement.getAttribute("data-theme") === "dark"
    ? "dark"
    : "light"
}

function syncToggleState(theme: Theme): void {
  const toggle = document.querySelector<HTMLButtonElement>(
    "[data-theme-toggle]",
  )
  if (!toggle) return
  toggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false")
  toggle.setAttribute(
    "aria-label",
    theme === "dark" ? "Cambiar a tema claro" : "Cambiar a tema oscuro",
  )
}

function applyTheme(theme: Theme): void {
  document.documentElement.setAttribute("data-theme", theme)
  localStorage.setItem(STORAGE_KEY, theme)
  syncToggleState(theme)
}

window.addEventListener("message", (event: MessageEvent<unknown>) => {
  if (!isPreviewThemeMessage(event.data)) return
  applyTheme(event.data.theme)
})

document
  .querySelector<HTMLButtonElement>("[data-theme-toggle]")
  ?.addEventListener("click", () => {
    applyTheme(currentTheme() === "dark" ? "light" : "dark")
  })

syncToggleState(currentTheme())
