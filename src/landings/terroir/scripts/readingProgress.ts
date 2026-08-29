// Terroir — reading progress bar at top of page.
export {}

const progressBar = document.querySelector<HTMLElement>(
  "[data-reading-progress]",
)

if (progressBar) {
  const updateProgress = (): void => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const progress = docHeight > 0 ? scrollTop / docHeight : 0
    progressBar.style.setProperty("--reading-progress", progress.toFixed(4))
  }

  window.addEventListener("scroll", updateProgress, { passive: true })
  updateProgress()
}
