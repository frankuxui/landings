// Pet Care Haven — GSAP entrance for the Hero: a staggered word reveal on
// the headline, a clip-path + scale reveal on the cover photograph, a
// fade/translateY entrance on the trust block, and a slow floating drift on
// the photograph tied to scroll.
//
// Baseline (zero JS, or `prefers-reduced-motion: reduce`): the headline,
// subtitle, CTAs, trust block, and cover photograph render immediately in
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

const imageWrap = document.querySelector<HTMLElement>("[data-hero-image-wrap]")
const floatImage = document.querySelector<HTMLElement>("[data-hero-float]")
const headline = document.querySelector<HTMLElement>("[data-hero-headline]")
const subtitle = document.querySelector<HTMLElement>("[data-hero-subtitle]")
const actions = document.querySelector<HTMLElement>("[data-hero-actions]")
const trust = document.querySelector<HTMLElement>("[data-hero-trust]")

if (!prefersReducedMotion) {
  const timeline = gsap.timeline({ defaults: { ease: "power3.out" } })

  if (imageWrap && floatImage) {
    gsap.set(imageWrap, { clipPath: "inset(0% 0% 100% 0%)" })
    gsap.set(floatImage, { scale: 1.18 })
    timeline.to(
      imageWrap,
      { clipPath: "inset(0% 0% 0% 0%)", duration: 1.3, ease: "power4.inOut" },
      0,
    )
    timeline.to(floatImage, { scale: 1.05, duration: 1.7 }, 0)
  }

  if (headline) {
    const split = SplitText.create(headline, { type: "words", mask: "words" })
    gsap.set(split.words, { yPercent: 130 })
    timeline.to(split.words, { yPercent: 0, duration: 1, stagger: 0.045 }, 0.35)
  }

  if (subtitle) {
    gsap.set(subtitle, { y: 18, opacity: 0 })
    timeline.to(subtitle, { y: 0, opacity: 1, duration: 0.7 }, "-=0.55")
  }

  if (actions) {
    gsap.set(actions, { y: 18, opacity: 0 })
    timeline.to(actions, { y: 0, opacity: 1, duration: 0.7 }, "-=0.5")
  }

  if (trust) {
    gsap.set(trust, { y: 24, opacity: 0 })
    timeline.to(trust, { y: 0, opacity: 1, duration: 0.8 }, "-=0.45")
  }

  // Slow, continuous floating drift on the cover photograph — a small,
  // looping translateY, distinct from the scroll-scrubbed parallax below.
  if (floatImage) {
    gsap.to(floatImage, {
      y: 14,
      duration: 3.6,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    })
  }

  // Subtle parallax drift on scroll — the cover photograph moves a few
  // percent slower than the page, scrubbed to scroll position.
  if (imageWrap) {
    const parallaxTween = gsap.to(imageWrap, {
      yPercent: 8,
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
}
