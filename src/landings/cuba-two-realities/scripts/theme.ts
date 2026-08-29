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

function applyTheme(theme: Theme): void {
  document.documentElement.setAttribute("data-theme", theme)
  localStorage.setItem(STORAGE_KEY, theme)
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
