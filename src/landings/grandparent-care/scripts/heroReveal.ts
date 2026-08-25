// Grandparent Care — GSAP entrance for the Hero: a line-by-line reveal on
// the headline, a fade-up on the eyebrow/subtitle/CTAs, a clip-path reveal
// on the cover photograph with a slow scroll-scrubbed parallax drift, and a
// fade-out on the scroll indicator once the reader starts scrolling.
//
// Baseline (zero JS, or `prefers-reduced-motion: reduce`): the eyebrow,
// headline, subtitle, CTAs, and cover photograph render immediately in
// their final, readable state — every initial "hidden" value below is set
// by this script itself (via `gsap.set`), never by baseline CSS, so nothing
// is hidden from a visitor whose JS fails to load or who prefers reduced
// motion.
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(ScrollTrigger, SplitText)

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches

const eyebrow = document.querySelector<HTMLElement>("[data-hero-eyebrow]")
const headline = document.querySelector<HTMLElement>("[data-hero-headline]")
const subtitle = document.querySelector<HTMLElement>("[data-hero-subtitle]")
const actions = document.querySelector<HTMLElement>("[data-hero-actions]")
const imageWrap = document.querySelector<HTMLElement>("[data-hero-image-wrap]")
const image = document.querySelector<HTMLElement>("[data-hero-image]")
const scrollCue = document.querySelector<HTMLElement>("[data-hero-scroll-cue]")

if (!prefersReducedMotion) {
  const timeline = gsap.timeline({ defaults: { ease: "power3.out" } })

  if (eyebrow) {
    gsap.set(eyebrow, { y: 14, opacity: 0 })
    timeline.to(eyebrow, { y: 0, opacity: 1, duration: 0.6 }, 0.1)
  }

  if (headline) {
    const split = SplitText.create(headline, { type: "lines", mask: "lines" })
    gsap.set(split.lines, { yPercent: 110 })
    timeline.to(split.lines, { yPercent: 0, duration: 1, stagger: 0.12 }, 0.25)
  }

  if (subtitle) {
    gsap.set(subtitle, { y: 18, opacity: 0 })
    timeline.to(subtitle, { y: 0, opacity: 1, duration: 0.7 }, "-=0.6")
  }

  if (actions) {
    gsap.set(actions, { y: 18, opacity: 0 })
    timeline.to(actions, { y: 0, opacity: 1, duration: 0.7 }, "-=0.5")
  }

  if (imageWrap && image) {
    gsap.set(imageWrap, { clipPath: "inset(8% 8% 8% 8%)" })
    gsap.set(image, { scale: 1.15 })
    timeline.to(
      imageWrap,
      { clipPath: "inset(0% 0% 0% 0%)", duration: 1.4, ease: "power4.inOut" },
      0.1,
    )
    timeline.to(image, { scale: 1.02, duration: 1.8 }, 0.1)

    const parallaxTween = gsap.to(image, {
      yPercent: 6,
      ease: "none",
      scrollTrigger: {
        trigger: imageWrap,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    })

    window.addEventListener(
      "pagehide",
      () => {
        parallaxTween.scrollTrigger?.kill()
        parallaxTween.kill()
      },
      { once: true },
    )
  }

  if (scrollCue) {
    gsap.set(scrollCue, { opacity: 0 })
    timeline.to(scrollCue, { opacity: 1, duration: 0.6 }, "-=0.3")

    const fadeCueTween = gsap.to(scrollCue, {
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: scrollCue,
        start: "top top",
        end: "+=160",
        scrub: true,
      },
    })

    window.addEventListener(
      "pagehide",
      () => {
        fadeCueTween.scrollTrigger?.kill()
        fadeCueTween.kill()
      },
      { once: true },
    )
  }
}
