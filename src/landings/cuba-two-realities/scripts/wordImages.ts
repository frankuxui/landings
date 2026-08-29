export {}

const preview = document.querySelector<HTMLElement>("[data-word-preview]")
const previewImage = preview?.querySelector<HTMLImageElement>("img")

function showPreview(trigger: HTMLElement): void {
  if (!preview || !previewImage) return
  const src = trigger.dataset.wordSrc
  const alt = trigger.dataset.wordAlt ?? ""
  if (!src) return
  previewImage.src = src
  previewImage.alt = alt
  preview.dataset.visible = "true"
}

function movePreview(event: PointerEvent): void {
  if (!preview) return
  preview.style.transform = `translate(${event.clientX + 18}px, ${event.clientY - 120}px)`
}

document
  .querySelectorAll<HTMLElement>("[data-word-image]")
  .forEach((trigger: HTMLElement) => {
    trigger.addEventListener("pointerenter", () => showPreview(trigger))
    trigger.addEventListener("pointermove", movePreview)
    trigger.addEventListener("pointerleave", () => {
      if (preview) preview.dataset.visible = "false"
    })
    trigger.addEventListener("focus", () => showPreview(trigger))
    trigger.addEventListener("blur", () => {
      if (preview) preview.dataset.visible = "false"
    })
    trigger.addEventListener("click", () => showPreview(trigger))
  })
