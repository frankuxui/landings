import type {
  PreviewPaletteMessage,
  PreviewPaletteSyncMessage,
} from "../../../types/preview"
import { DEFAULT_PALETTE_ID } from "../../../types/palette"

const STORAGE_KEY = "joyful-mind:palette"

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
      // Palette still applies for this session when storage is unavailable.
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

applyPalette(
  document.documentElement.dataset.palette ?? DEFAULT_PALETTE_ID,
  false,
)
