export {}

const storageKey = "soldier:theme"
const toggle = document.querySelector<HTMLButtonElement>("[data-theme-toggle]")

function setTheme(theme: "light" | "dark"): void {
  document.documentElement.setAttribute("data-theme", theme)
  try {
    localStorage.setItem(storageKey, theme)
  } catch (error) {}
}

toggle?.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme")
  setTheme(current === "dark" ? "light" : "dark")
})

window.addEventListener("message", (event: MessageEvent) => {
  const data = event.data as { type?: string; theme?: string }
  if (data.type !== "preview:theme") return
  if (data.theme === "light" || data.theme === "dark") setTheme(data.theme)
})
