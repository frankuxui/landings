// Journalist Dispatch — GSAP count-up for the "Investigations" figures
// (months on the ground, interviews conducted).
//
// Baseline (zero JS, or `prefers-reduced-motion: reduce`): each figure
// renders its final numeral immediately via `data-count-value` — this
// script only replaces that static text with an animated count once it
// runs, and restores the static rendering if motion is later disabled.
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const counters = document.querySelectorAll<HTMLElement>("[data-count-value]")

if (counters.length > 0) {
  const renderStatic = (): void => {
    counters.forEach((counter: HTMLElement) => {
      const value = Number(counter.dataset.countValue ?? "0")
      counter.textContent = String(value)
    })
  }

  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

  const animateCounters = (): void => {
    counters.forEach((counter: HTMLElement) => {
      const target = Number(counter.dataset.countValue ?? "0")
      const state = { value: 0 }

      gsap.to(state, {
        value: target,
        duration: 1.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: counter,
          start: "top 85%",
          once: true,
        },
        onUpdate: () => {
          counter.textContent = String(Math.floor(state.value))
        },
      })
    })
  }

  if (mediaQuery.matches) {
    renderStatic()
  } else {
    animateCounters()
  }

  mediaQuery.addEventListener("change", (event: MediaQueryListEvent) => {
    ScrollTrigger.getAll().forEach((trigger: ScrollTrigger) => trigger.kill())
    if (event.matches) {
      renderStatic()
    } else {
      animateCounters()
    }
  })
}
