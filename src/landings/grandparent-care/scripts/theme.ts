// Grandparent Care — theme bridge.
// Two sources can change the theme: this landing's own header toggle
// (persisted to localStorage so the choice survives a reload standalone),
// and the platform preview shell's cross-document postMessage. Both only
// ever toggle `data-theme` on THIS document's own <html> element — never
// `window.top` or any parent/ancestor document.
import { isTheme, type Theme } from "../../../types/theme"
import type { PreviewThemeMessage } from "../../../types/preview"

const STORAGE_KEY = "grandparent-care:theme"

function isPreviewThemeMessage(value: unknown): value is PreviewThemeMessage {
  if (typeof value !== "object" || value === null) return false
  const candidate = value as Record<string, unknown>
  return (
    candidate.type === "preview:theme" && isTheme(candidate.theme as string)
  )
}

function applyTheme(theme: Theme): void {
  document.documentElement.setAttribute("data-theme", theme)
}

function currentTheme(): Theme {
  return document.documentElement.getAttribute("data-theme") === "dark"
    ? "dark"
    : "light"
}

window.addEventListener("message", (event: MessageEvent<unknown>) => {
  if (!isPreviewThemeMessage(event.data)) return
  applyTheme(event.data.theme)
  localStorage.setItem(STORAGE_KEY, event.data.theme)
})

const toggle = document.querySelector<HTMLButtonElement>("[data-theme-toggle]")
toggle?.addEventListener("click", () => {
  const next: Theme = currentTheme() === "dark" ? "light" : "dark"
  applyTheme(next)
  localStorage.setItem(STORAGE_KEY, next)
})
