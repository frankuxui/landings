import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export {}

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches

if (!prefersReducedMotion) {
  document.documentElement.classList.add("js-reveal-ready")

  const revealTargets = document.querySelectorAll<HTMLElement>(".reveal")

  revealTargets.forEach((target: HTMLElement) => {
    gsap.fromTo(
      target,
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: target,
          start: "top 92%",
          toggleActions: "play none none none",
        },
      },
    )
  })
} else {
  document
    .querySelectorAll<HTMLElement>(".reveal")
    .forEach((el: HTMLElement) => {
      el.style.opacity = "1"
      el.style.transform = "none"
    })
}
