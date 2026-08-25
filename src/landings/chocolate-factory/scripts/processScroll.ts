// Chocolate Factory — GSAP pinned horizontal scroll for the "Process" rail.
//
// Baseline (works with zero JS): `.process-rail` is a native horizontally
// scrollable, scroll-snapped row — fully usable by touch, drag, or keyboard
// on every breakpoint, including when JS is disabled or the user prefers
// reduced motion.
//
// Enhancement (Laptop/Desktop, motion allowed only): the rail's wrapper is
// pinned and the vertical scroll of the page is translated into horizontal
// movement of the step list, so the eight stages read like a single
// continuous strip instead of a plain vertical section. Uses
// `gsap.matchMedia()` so the pin only ever applies at `lg` and up, and never
// when `prefers-reduced-motion: reduce` is set — reduced-motion users keep
// the plain, native horizontal scroll instead of a scroll-linked animation.
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const pinWrapper = document.querySelector<HTMLElement>("[data-process-pin]")
const scrollContainer = document.querySelector<HTMLElement>(
  "[data-process-scroll]",
)
const list = document.querySelector<HTMLElement>("[data-process-list]")

if (pinWrapper && scrollContainer && list) {
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

      if (!isDesktop || prefersReducedMotion) {
        // Mobile/Tablet, or Desktop with reduced motion: keep the native
        // scroll-snapped row as-is. Nothing to animate or clean up.
        return
      }

      const distance = list.scrollWidth - scrollContainer.clientWidth
      if (distance <= 0) return

      scrollContainer.classList.add("overflow-hidden")
      scrollContainer.classList.remove("overflow-x-auto")
      list.classList.remove("snap-x", "snap-mandatory")

      const tween = gsap.to(list, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: pinWrapper,
          start: "top top+=88",
          end: () => `+=${distance}`,
          scrub: 0.6,
          pin: true,
          invalidateOnRefresh: true,
        },
      })

      return () => {
        tween.scrollTrigger?.kill()
        tween.kill()
        gsap.set(list, { clearProps: "transform" })
        scrollContainer.classList.remove("overflow-hidden")
        scrollContainer.classList.add("overflow-x-auto")
        list.classList.add("snap-x", "snap-mandatory")
      }
    },
  )
}
