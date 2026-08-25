// Journalist Dispatch — GSAP fragment-by-fragment reveal for the
// full-bleed editorial Quote section.
//
// Baseline (zero JS, or `prefers-reduced-motion: reduce`): every fragment
// of the quote renders immediately, fully visible, in normal document
// flow — the "hidden" starting values below are set by this script itself.
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches

const quote = document.querySelector<HTMLElement>("[data-quote]")
const fragments = document.querySelectorAll<HTMLElement>(
  "[data-quote-fragment]",
)

if (!prefersReducedMotion && quote && fragments.length > 0) {
  gsap.set(fragments, { opacity: 0.12 })

  gsap.to(fragments, {
    opacity: 1,
    duration: 0.6,
    ease: "power1.out",
    stagger: 0.12,
    scrollTrigger: {
      trigger: quote,
      start: "top 75%",
      end: "bottom 55%",
      toggleActions: "play none none reverse",
    },
  })
}
