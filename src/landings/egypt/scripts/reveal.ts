// Egypt — minimal scroll-reveal enhancement.
// Adds `.is-visible` to `.reveal` elements as they enter the viewport.
// Content is fully visible without JS. Skipped for reduced motion.
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
