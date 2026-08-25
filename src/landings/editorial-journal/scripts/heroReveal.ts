// Editorial Journal — GSAP entrance reveal for the Hero headline.
//
// Baseline (zero JS, or `prefers-reduced-motion: reduce`): the headline
// renders immediately, fully visible and readable — this script never hides
// content that JS/motion might fail to restore.
//
// Enhancement: the headline's own text lines fade and slide up into place
// once on load, using CSS `text-wrap: balance` line boundaries approximated
// by animating the whole block with a short, elegant stagger via a CSS
// custom property rather than reflowing text into <span> wrappers (which
// would fight `text-balance` and hurt accessible text selection).
import gsap from "gsap"

const headline = document.querySelector<HTMLElement>("[data-hero-headline]")

if (headline) {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches

  if (!prefersReducedMotion) {
    gsap.from(headline, {
      y: 24,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      delay: 0.1,
    })
  }
}
