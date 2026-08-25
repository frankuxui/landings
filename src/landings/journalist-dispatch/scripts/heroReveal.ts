// Journalist Dispatch — GSAP entrance for the Hero: a clip-path reveal on
// the documentary photograph, a staggered word reveal on the masthead
// name, a staggered fade on the meta row (role, location, statement), a
// restrained parallax drift on the photograph, and a scroll indicator that
// fades out as the page leaves the hero.
//
// Baseline (zero JS, or `prefers-reduced-motion: reduce`): the photograph,
// name, and meta row render immediately in their final, readable state —
// every "hidden" starting value below is set by this script itself (via
// `gsap.set`), never by baseline CSS, so nothing is hidden from a visitor
// whose JS fails to load or who prefers reduced motion.
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

gsap.registerPlugin(ScrollTrigger, SplitText)

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches

const imageWrap = document.querySelector<HTMLElement>("[data-hero-image-wrap]")
const parallaxImage = document.querySelector<HTMLElement>(
  "[data-hero-parallax]",
)
const name = document.querySelector<HTMLElement>("[data-hero-name]")
const meta = document.querySelector<HTMLElement>("[data-hero-meta]")
const indicator = document.querySelector<HTMLElement>(
  "[data-hero-scroll-indicator]",
)

if (!prefersReducedMotion) {
  const timeline = gsap.timeline({ defaults: { ease: "power3.out" } })

  if (imageWrap && parallaxImage) {
    gsap.set(imageWrap, { clipPath: "inset(0% 0% 100% 0%)" })
    gsap.set(parallaxImage, { scale: 1.18 })
    timeline.to(
      imageWrap,
      { clipPath: "inset(0% 0% 0% 0%)", duration: 1.4, ease: "power4.inOut" },
      0,
    )
    timeline.to(parallaxImage, { scale: 1.08, duration: 1.7 }, 0)
  }

  if (name) {
    const split = SplitText.create(name, { type: "words", mask: "words" })
    gsap.set(split.words, { yPercent: 120 })
    timeline.to(split.words, { yPercent: 0, duration: 1, stagger: 0.06 }, 0.4)
  }

  if (meta) {
    const metaItems = meta.querySelectorAll<HTMLElement>(
      "[data-hero-meta-item]",
    )
    gsap.set(metaItems, { y: 14, opacity: 0 })
    timeline.to(
      metaItems,
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.08 },
      "-=0.5",
    )
  }

  if (indicator) {
    gsap.set(indicator, { opacity: 0 })
    timeline.to(indicator, { opacity: 1, duration: 0.8 }, "-=0.2")
  }

  if (parallaxImage) {
    const parallaxTween = gsap.to(parallaxImage, {
      yPercent: 6,
      ease: "none",
      scrollTrigger: {
        trigger: parallaxImage,
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

  if (indicator) {
    const fadeTween = gsap.to(indicator, {
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: indicator,
        start: "top top",
        end: "+=240",
        scrub: true,
      },
    })

    window.addEventListener(
      "pagehide",
      () => {
        fadeTween.scrollTrigger?.kill()
        fadeTween.kill()
      },
      { once: true },
    )
  }
}
