// Pet Care Haven — minimal scroll-reveal enhancement.
// Adds `.is-visible` to `.reveal` elements as they enter the viewport using
// IntersectionObserver. Content is fully visible without this script (CSS
// only hides `.reveal` once `.js-reveal-ready` is present), and the whole
// effect is skipped for users who prefer reduced motion.
//
// The `export {}` below makes this file an ES module instead of a global
// script, so its top-level declarations stay scoped to this landing and
// never collide with another landing's own `<script>`-loaded TypeScript
// during type-checking.
export {}

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches

if (!prefersReducedMotion) {
  document.documentElement.classList.add("js-reveal-ready")

  const revealTargets = document.querySelectorAll<HTMLElement>(".reveal")

  const observer = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add("is-visible")
        observer.unobserve(entry.target)
      })
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
  )

  revealTargets.forEach((target: HTMLElement) => observer.observe(target))
}
