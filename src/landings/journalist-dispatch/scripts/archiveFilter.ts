// Journalist Dispatch — Archive category filter.
// Plain progressive enhancement: every row is real, indexable content in
// the DOM; this script only toggles visibility and keeps the active
// filter button's `aria-pressed` state and the visible-count live region
// in sync. No framework, no client router.
const filterButtons = document.querySelectorAll<HTMLButtonElement>(
  "[data-archive-filter]",
)
const rows = document.querySelectorAll<HTMLElement>("[data-archive-row]")
const countLabel = document.querySelector<HTMLElement>("[data-archive-count]")

if (filterButtons.length > 0 && rows.length > 0) {
  const applyFilter = (category: string): void => {
    let visibleCount = 0

    rows.forEach((row: HTMLElement) => {
      const matches = category === "all" || row.dataset.category === category
      row.hidden = !matches
      if (matches) visibleCount += 1
    })

    filterButtons.forEach((button: HTMLButtonElement) => {
      const isActive = button.dataset.archiveFilter === category
      button.setAttribute("aria-pressed", String(isActive))
    })

    if (countLabel) {
      const noun = visibleCount === 1 ? "story" : "stories"
      countLabel.textContent = `${visibleCount} ${noun}`
    }
  }

  filterButtons.forEach((button: HTMLButtonElement) => {
    button.addEventListener("click", () => {
      applyFilter(button.dataset.archiveFilter ?? "all")
    })
  })

  applyFilter("all")
}
