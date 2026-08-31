import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)
document.documentElement.classList.add("js-motion-ready")

const motion = gsap.matchMedia()

motion.add("(prefers-reduced-motion: no-preference)", () => {
  const intro = gsap.timeline({ defaults: { ease: "power4.out" } })

  intro
    .fromTo(
      ".hero-photo > div",
      { clipPath: "inset(0 0 100% 0)" },
      { clipPath: "inset(0 0 0% 0)", duration: 1.05 },
    )
    .fromTo(
      '[data-hero-line="top"]',
      { xPercent: -110 },
      { xPercent: 0, duration: 1 },
      "-=0.82",
    )
    .fromTo(
      '[data-hero-line="bottom"]',
      { xPercent: 110 },
      { xPercent: 0, duration: 1 },
      "-=0.9",
    )
    .fromTo(
      "[data-hero-meta] > *",
      { y: 18, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.55, stagger: 0.08 },
      "-=0.55",
    )
    .fromTo(
      "[data-hero-card]",
      { y: 28, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7 },
      "-=0.42",
    )

  gsap.to("[data-hero-bg]", {
    xPercent: -7,
    yPercent: 6,
    ease: "none",
    scrollTrigger: {
      trigger: "[data-hero]",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  })

  gsap.to(".hero-photo", {
    scale: 1.06,
    yPercent: -8,
    ease: "none",
    scrollTrigger: {
      trigger: "[data-hero]",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  })

  gsap.utils
    .toArray<HTMLElement>("[data-parallax-image]")
    .forEach((image: HTMLElement, index: number) => {
      gsap.to(image, {
        yPercent: index % 2 === 0 ? -8 : -5,
        xPercent: index % 3 === 0 ? 2 : 0,
        ease: "none",
        scrollTrigger: {
          trigger: image,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })
    })

  gsap.utils
    .toArray<HTMLElement>(".seven-item")
    .forEach((item: HTMLElement, index: number) => {
      gsap.from(item, {
        x: index % 2 === 0 ? -42 : 42,
        y: index % 3 === 0 ? 36 : -18,
        opacity: 0,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 82%",
        },
      })
    })

  gsap.to("[data-black-title]", {
    xPercent: 5,
    ease: "none",
    scrollTrigger: {
      trigger: "#black-cat",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  })

  gsap.to(".logic-track", {
    xPercent: -18,
    ease: "none",
    scrollTrigger: {
      trigger: "#instinct",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  })

  gsap.from("[data-night-float]", {
    xPercent: (index: number) => (index % 2 === 0 ? -35 : 35),
    yPercent: 18,
    rotate: (index: number) => (index % 2 === 0 ? -14 : 12),
    opacity: 0,
    duration: 0.9,
    stagger: 0.12,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#night-mode",
      start: "top 68%",
    },
  })

  gsap.to("[data-night-title]", {
    xPercent: -6,
    ease: "none",
    scrollTrigger: {
      trigger: "#night-mode",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  })

  gsap.to("[data-sleep-title]", {
    yPercent: 5,
    ease: "none",
    scrollTrigger: {
      trigger: "#sleep-mode",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  })

  return () => {
    ScrollTrigger.getAll().forEach((trigger: ScrollTrigger) => trigger.kill())
  }
})
