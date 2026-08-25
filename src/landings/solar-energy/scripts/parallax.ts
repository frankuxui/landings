// Solar Energy — subtle GSAP parallax for large full-bleed photographs.
//
// Every element flagged with `data-parallax` (see Photo.astro's `parallax`
// prop) drifts a few percent slower/faster than the page scroll, scrubbed to
// scroll position for a restrained architectural depth effect. Baseline:
// without this script, or with `prefers-reduced-motion: reduce`, every
// target renders fully static — the effect is a pure enhancement, and each
// target is pre-scaled (see Photo.astro) so the drift never exposes an edge.
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const parallaxTargets =
  document.querySelectorAll<HTMLElement>("[data-parallax]")

if (parallaxTargets.length > 0) {
  const mm = gsap.matchMedia()

  mm.add(
    { prefersReducedMotion: "(prefers-reduced-motion: reduce)" },
    (context: gsap.Context) => {
      const { prefersReducedMotion } = context.conditions as {
        prefersReducedMotion: boolean
      }

      if (prefersReducedMotion) return

      const tweens = Array.from(parallaxTargets).map((target: HTMLElement) =>
        gsap.to(target, {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: target,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }),
      )

      return () => {
        tweens.forEach((tween: gsap.core.Tween) => {
          tween.scrollTrigger?.kill()
          tween.kill()
        })
        parallaxTargets.forEach((target: HTMLElement) =>
          gsap.set(target, { clearProps: "transform" }),
        )
      }
    },
  )
}
