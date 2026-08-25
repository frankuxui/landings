// Journalist Dispatch — GSAP horizontal-scroll "Coverage" timeline.
//
// Baseline (works with zero JS, Mobile/Tablet, or Desktop with
// `prefers-reduced-motion: reduce`): the stops render as a horizontally
// scrollable row (`overflow-x-auto`, `snap-x`) the visitor can swipe or
// drag through directly — fully usable without this script.
//
// Enhancement (Laptop/Desktop, motion allowed only): the section pins in
// place and vertical scroll is translated into horizontal movement across
// the row, so the reader "walks" the coverage line left to right without
// losing their place on the page. Scoped to `lg` and up, matching where
// the platform's own Desktop preview bucket begins.
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const section = document.querySelector<HTMLElement>("[data-timeline-section]")
const track = document.querySelector<HTMLElement>("[data-timeline-track]")

if (section && track) {
  const mm = gsap.matchMedia()

  mm.add(
    {
      isDesktop: "(min-width: 1024px)",
      prefersReducedMotion: "(prefers-reduced-motion: reduce)",
    },
    (context: gsap.Context) => {
      const { isDesktop, prefersReducedMotion } = context.conditions as {
        isDesktop: boolean
        prefersReducedMotion: boolean
      }

      if (!isDesktop || prefersReducedMotion) return

      const distance = track.scrollWidth - track.clientWidth
      if (distance <= 0) return

      const tween = gsap.to(track, {
        x: () => -distance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance}`,
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      return () => {
        tween.scrollTrigger?.kill()
        tween.kill()
        gsap.set(track, { clearProps: "transform" })
      }
    },
  )
}
