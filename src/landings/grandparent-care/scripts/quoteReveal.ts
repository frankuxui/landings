// Grandparent Care — line-by-line reveal for the large standalone quote in
// the "Quote" section, marked `[data-quote-reveal]`. Distinct from
// textReveal.ts (word-stagger for section headings): a large-format quote
// reads better revealed one full line at a time.
//
// Baseline (zero JS, or `prefers-reduced-motion: reduce`): the quote renders
// immediately, in place, at full opacity.
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(ScrollTrigger, SplitText)

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches

const target = document.querySelector<HTMLElement>("[data-quote-reveal]")

if (target && !prefersReducedMotion) {
  const split = SplitText.create(target, { type: "lines", mask: "lines" })
  gsap.set(split.lines, { yPercent: 100, opacity: 0 })

  gsap.to(split.lines, {
    yPercent: 0,
    opacity: 1,
    duration: 0.9,
    stagger: 0.1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: target,
      start: "top 80%",
      once: true,
    },
  })
}
