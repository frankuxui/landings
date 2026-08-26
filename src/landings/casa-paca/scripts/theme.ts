export {}

const key = "casa-paca:theme"
const button = document.querySelector<HTMLButtonElement>("[data-theme-toggle]")
const applyTheme = (theme: "light" | "dark"): void => {
  document.documentElement.dataset.theme = theme
  try {
    localStorage.setItem(key, theme)
  } catch {}
}
button?.addEventListener("click", (): void =>
  applyTheme(
    document.documentElement.dataset.theme === "dark" ? "light" : "dark",
  ),
)
window.addEventListener("message", (event: MessageEvent): void => {
  if (
    event.data?.type === "preview:theme" &&
    (event.data.theme === "light" || event.data.theme === "dark")
  )
    applyTheme(event.data.theme)
})
