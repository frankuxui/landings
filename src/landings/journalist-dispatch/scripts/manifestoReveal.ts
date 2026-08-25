// Journalist Dispatch — GSAP line-by-line reveal for the editorial
// Manifesto statement.
//
// Baseline (zero JS, or `prefers-reduced-motion: reduce`): every line of
// the statement renders immediately, fully visible, in normal document
// flow — the "hidden" starting values below are set by this script itself.
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches

const statement = document.querySelector<HTMLElement>("[data-manifesto]")
const lines = document.querySelectorAll<HTMLElement>("[data-manifesto-line]")

if (!prefersReducedMotion && statement && lines.length > 0) {
  gsap.set(lines, { opacity: 0.16, y: 12 })

  gsap.to(lines, {
    opacity: 1,
    y: 0,
    duration: 0.9,
    ease: "power2.out",
    stagger: 0.18,
    scrollTrigger: {
      trigger: statement,
      start: "top 70%",
      end: "bottom 60%",
      toggleActions: "play none none reverse",
    },
  })
}
