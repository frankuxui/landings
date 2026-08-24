// Aperture Editions — GSAP entrance for the Hero: a staggered word reveal on
// the headline, a clip-path + scale reveal on the cover photograph, and a
// restrained parallax drift tied to scroll.
//
// Baseline (zero JS, or `prefers-reduced-motion: reduce`): the headline,
// meta row, and cover photograph render immediately in their final,
// readable state — every initial "hidden" value below is set by this script
// itself (via `gsap.set`), never by baseline CSS, so nothing is hidden from
// a visitor whose JS fails to load or who prefers reduced motion.
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
const headline = document.querySelector<HTMLElement>("[data-hero-headline]")
const meta = document.querySelector<HTMLElement>("[data-hero-meta]")

if (!prefersReducedMotion) {
  const timeline = gsap.timeline({ defaults: { ease: "power3.out" } })

  if (imageWrap && parallaxImage) {
    gsap.set(imageWrap, { clipPath: "inset(0% 0% 100% 0%)" })
    gsap.set(parallaxImage, { scale: 1.16 })
    timeline.to(
      imageWrap,
      { clipPath: "inset(0% 0% 0% 0%)", duration: 1.3, ease: "power4.inOut" },
      0,
    )
    timeline.to(parallaxImage, { scale: 1.1, duration: 1.6 }, 0)
  }

  if (headline) {
    const split = SplitText.create(headline.querySelector("h1"), {
      type: "words",
      mask: "words",
    })
    gsap.set(headline.querySelectorAll("p"), { y: 16, opacity: 0 })
    gsap.set(split.words, { yPercent: 120 })

    timeline.to(
      headline.querySelectorAll("p")[0],
      { y: 0, opacity: 1, duration: 0.6 },
      0.5,
    )
    timeline.to(
      split.words,
      { yPercent: 0, duration: 0.9, stagger: 0.045 },
      0.62,
    )
    timeline.to(
      headline.querySelectorAll("p")[1],
      { y: 0, opacity: 1, duration: 0.7 },
      "-=0.4",
    )
  }

  if (meta) {
    gsap.set(meta, { y: 20, opacity: 0 })
    timeline.to(meta, { y: 0, opacity: 1, duration: 0.7 }, "-=0.35")
  }

  // Subtle parallax drift on scroll — the cover photograph moves a few
  // percent slower than the page, scrubbed to scroll position.
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
}
