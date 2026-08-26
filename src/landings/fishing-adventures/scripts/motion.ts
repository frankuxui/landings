import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
const context = gsap.context((): void => {
  const media = gsap.matchMedia()
  media.add("(prefers-reduced-motion: no-preference)", (): void => {
    gsap.from("[data-hero-headline]", {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
    gsap.from("[data-hero-item]", {
      y: 24,
      opacity: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: "power3.out",
    })
    gsap.utils
      .toArray<HTMLElement>("[data-image-reveal]")
      .forEach((element: HTMLElement): void => {
        gsap.from(element, {
          clipPath: "inset(12% 0 12% 0)",
          scale: 1.04,
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            end: "bottom 20%",
            scrub: 0.5,
          },
        })
      })
    gsap.utils
      .toArray<HTMLElement>("[data-reveal]")
      .forEach((element: HTMLElement): void => {
        gsap.from(element, {
          y: 32,
          opacity: 0,
          duration: 0.7,
          scrollTrigger: { trigger: element, start: "top 88%" },
        })
      })
  })
})
window.addEventListener("pagehide", (): void => context.revert(), {
  once: true,
})
