export {}

const paletteKey = "fishing-adventures:palette"
window.addEventListener("message", (event: MessageEvent): void => {
  if (
    event.data?.type === "preview:palette" &&
    typeof event.data.palette === "string"
  ) {
    document.documentElement.dataset.palette = event.data.palette
    try {
      localStorage.setItem(paletteKey, event.data.palette)
    } catch {}
  }
})
