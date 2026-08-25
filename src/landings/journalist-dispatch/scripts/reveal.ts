// Journalist Dispatch — minimal scroll-reveal enhancement.
// Adds `.is-visible` to `.reveal` elements as they enter the viewport using
// IntersectionObserver. Content is fully visible without this script (CSS
// only hides `.reveal` once `.js-reveal-ready` is present), and the whole
// effect is skipped for users who prefer reduced motion.
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

// Keeps this file an ES module (rather than a global script) so its
// top-level declarations never collide with another landing's
// identically-named script during `astro check`/`tsc` — every landing is
// isolated, but plain scripts with no import/export are otherwise merged
// into the same global TypeScript scope across the whole repo.
export {}
