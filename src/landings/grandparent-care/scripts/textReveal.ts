// Grandparent Care — scroll-reactive word-stagger reveal for section
// headings marked `[data-split-reveal]`. Distinct from the generic
// `.reveal` fade/translateY utility: this one splits text into words and
// staggers them in as the element crosses into view.
//
// Baseline (zero JS, or `prefers-reduced-motion: reduce`): every heading
// renders immediately, in place, at full opacity — this script only ever
// hides text it is about to animate back in.
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(ScrollTrigger, SplitText)

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches

if (!prefersReducedMotion) {
  const targets = document.querySelectorAll<HTMLElement>("[data-split-reveal]")

  targets.forEach((target: HTMLElement) => {
    const split = SplitText.create(target, { type: "words", mask: "words" })
    gsap.set(split.words, { yPercent: 115, opacity: 0 })

    gsap.to(split.words, {
      yPercent: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.03,
      ease: "power3.out",
      scrollTrigger: {
        trigger: target,
        start: "top 88%",
        once: true,
      },
    })
  })
}
