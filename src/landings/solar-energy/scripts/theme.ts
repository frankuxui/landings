// Heliogrid — theme bridge.
// Listens for the platform preview shell's cross-document postMessage and
// toggles `data-theme` on THIS document's own <html> element only. Never
// reaches into `window.top` or any parent/ancestor document.
import { isTheme, type Theme } from "../../../types/theme"
import type { PreviewThemeMessage } from "../../../types/preview"

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

window.addEventListener("message", (event: MessageEvent<unknown>) => {
  if (!isPreviewThemeMessage(event.data)) return
  applyTheme(event.data.theme)
})
