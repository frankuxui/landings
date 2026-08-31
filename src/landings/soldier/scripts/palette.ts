export {}

const storageKey = "soldier:palette"
const palettes = new Set<string>(["grayscale", "field"])

function setPalette(palette: string): void {
  if (!palettes.has(palette)) return
  document.documentElement.dataset.palette = palette
  try {
    localStorage.setItem(storageKey, palette)
  } catch (error) {}
}

window.addEventListener("message", (event: MessageEvent) => {
  const data = event.data as { type?: string; palette?: string }
  if (data.type === "preview:palette" && data.palette) setPalette(data.palette)
})
