// Grandparent Care — "Gallery" scroll entrance: each photograph reveals
// through its own clip-path wipe as it enters the viewport, then drifts a
// few percent slower than the page on scroll (parallax), scrubbed to scroll
// position and scoped per-image so an asymmetric grid doesn't reveal or
// drift in lockstep.
//
// Baseline (zero JS, or `prefers-reduced-motion: reduce`): every photograph
// renders immediately at full size and in place — this script only ever
// hides an image it is about to reveal.
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches

const items = document.querySelectorAll<HTMLElement>("[data-gallery-item]")

if (!prefersReducedMotion && items.length > 0) {
  const scrollTriggers: ScrollTrigger[] = []

  items.forEach((item: HTMLElement, index: number) => {
    const wrap = item.querySelector<HTMLElement>("[data-gallery-wrap]")
    const image = item.querySelector<HTMLElement>("[data-gallery-image]")
    if (!wrap || !image) return

    const direction =
      index % 2 === 0 ? "inset(0% 0% 100% 0%)" : "inset(100% 0% 0% 0%)"
    gsap.set(wrap, { clipPath: direction })
    gsap.set(image, { scale: 1.12 })

    const reveal = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "top 85%",
        once: true,
      },
    })
    reveal.to(wrap, {
      clipPath: "inset(0% 0% 0% 0%)",
      duration: 1.1,
      ease: "power4.inOut",
    })
    reveal.to(image, { scale: 1, duration: 1.3 }, 0)

    const parallax = gsap.to(image, {
      yPercent: index % 2 === 0 ? 8 : -8,
      ease: "none",
      scrollTrigger: {
        trigger: item,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })
    if (parallax.scrollTrigger) scrollTriggers.push(parallax.scrollTrigger)
  })

  window.addEventListener(
    "pagehide",
    () => {
      scrollTriggers.forEach((trigger: ScrollTrigger) => trigger.kill())
    },
    { once: true },
  )
}
