export {}

const storageKey = "classic-car-archive:palette"
const palettes = new Set<string>(["grayscale", "garage-heritage"])

const applyPalette = (palette: string): void => {
  if (!palettes.has(palette)) return
  document.documentElement.dataset.palette = palette
  localStorage.setItem(storageKey, palette)
}

window.addEventListener("message", (event: MessageEvent) => {
  if (typeof event.data !== "object" || event.data === null) return
  const payload = event.data as { palette?: string; type?: string }
  if (payload.type !== "preview:palette" || !payload.palette) return
  applyPalette(payload.palette)
})
