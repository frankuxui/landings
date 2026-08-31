import { gsap } from "gsap"

export {}

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
const hoverViewport = window.matchMedia("(hover: hover) and (pointer: fine)")

function setCardState(card: HTMLElement, isOpen: boolean): void {
  const bodies = card.querySelectorAll<HTMLElement>("[data-card-body]")
  const numbers = card.querySelectorAll<HTMLElement>("[data-card-number]")
  card.dataset.open = String(isOpen)

  if (reduceMotion.matches) {
    bodies.forEach((body: HTMLElement) => {
      body.style.opacity = isOpen ? "1" : "0"
    })
    return
  }

  gsap.to(bodies, {
    height: isOpen ? "auto" : 0,
    opacity: isOpen ? 1 : 0,
    y: isOpen ? 0 : 18,
    clipPath: isOpen ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)",
    duration: 0.42,
    ease: "power3.out",
  })

  gsap.to(numbers, {
    rotate: isOpen ? -8 : 0,
    scale: isOpen ? 1.08 : 1,
    duration: 0.42,
    ease: "power3.out",
  })
}

document
  .querySelectorAll<HTMLElement>("[data-card]")
  .forEach((card: HTMLElement) => {
    setCardState(card, false)

    card.addEventListener("click", () => {
      const isOpen = card.dataset.open === "true"
      setCardState(card, !isOpen)
    })

    card.addEventListener("keydown", (event: KeyboardEvent) => {
      if (event.key !== "Enter" && event.key !== " ") return
      event.preventDefault()
      const isOpen = card.dataset.open === "true"
      setCardState(card, !isOpen)
    })

    if (!hoverViewport.matches) return

    card.addEventListener("pointerenter", () => setCardState(card, true))
    card.addEventListener("pointerleave", () => setCardState(card, false))
    card.addEventListener("focusin", () => setCardState(card, true))
    card.addEventListener("focusout", () => setCardState(card, false))
  })
