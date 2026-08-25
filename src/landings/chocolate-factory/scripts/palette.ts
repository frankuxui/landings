// Chocolate Factory — palette bridge.
//
// Mirrors scripts/theme.ts: listens for the platform preview shell's
// cross-document postMessage and toggles `data-palette` on THIS document's
// own <html> element only — never `window.top` or any parent/ancestor
// document. Unlike theme, the palette choice is also persisted locally
// (see index.astro's synchronous head script for the no-flash restore on
// load) so a downloaded/standalone copy of this landing keeps remembering
// it outside the platform. Every applied palette is reported back to the
// parent frame so the platform's palette selector can mirror the real
// current state instead of assuming it.
import type {
  PreviewPaletteMessage,
  PreviewPaletteSyncMessage,
} from "../../../types/preview"
import { DEFAULT_PALETTE_ID } from "../../../types/palette"

const STORAGE_KEY = "chocolate-factory:palette"

function isPreviewPaletteMessage(
  value: unknown,
): value is PreviewPaletteMessage {
  if (typeof value !== "object" || value === null) return false
  const candidate = value as Record<string, unknown>
  return (
    candidate.type === "preview:palette" &&
    typeof candidate.palette === "string"
  )
}

function applyPalette(palette: string, persist: boolean): void {
  document.documentElement.dataset.palette = palette

  if (persist) {
    try {
      localStorage.setItem(STORAGE_KEY, palette)
    } catch {
      // Storage may be unavailable (private browsing, disabled cookies) —
      // the palette still applies for this session, it just won't persist.
    }
  }

  const message: PreviewPaletteSyncMessage = {
    type: "preview:palette-sync",
    palette,
  }
  window.parent.postMessage(message, "*")
}

window.addEventListener("message", (event: MessageEvent<unknown>) => {
  if (!isPreviewPaletteMessage(event.data)) return
  applyPalette(event.data.palette, true)
})

// Report the palette the synchronous head script already applied (or the
// grayscale default if none was stored) so the platform toolbar can mirror
// the real current state as soon as it loads — no need to persist again.
applyPalette(
  document.documentElement.dataset.palette ?? DEFAULT_PALETTE_ID,
  false,
)
