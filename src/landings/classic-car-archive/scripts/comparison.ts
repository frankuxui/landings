export {}

const range = document.querySelector<HTMLInputElement>(
  "[data-comparison-range]",
)
const after = document.querySelector<HTMLElement>("[data-comparison-after]")

if (range && after) {
  const update = (): void => {
    after.style.width = `${range.value}%`
  }

  range.addEventListener("input", update)
  update()
}
