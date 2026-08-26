import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)
const context = gsap.context((): void => {
  const media = gsap.matchMedia()
  media.add("(prefers-reduced-motion: no-preference)", (): void => {
    gsap.utils
      .toArray<HTMLElement>("[data-hero-word]")
      .forEach((word: HTMLElement, index: number): void => {
        gsap.from(word, {
          yPercent: 120,
          opacity: 0,
          duration: 0.9,
          delay: index * 0.045,
          ease: "power4.out",
        })
      })
    gsap.from("[data-hero-item]", {
      y: 22,
      opacity: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: "power3.out",
    })
    gsap.utils
      .toArray<HTMLElement>("[data-hero-note]")
      .forEach((element: HTMLElement, index: number): void => {
        gsap.from(element, {
          y: 14,
          rotate: 0,
          opacity: 0,
          duration: 0.6,
          delay: 0.6 + index * 0.15,
          ease: "back.out(1.6)",
        })
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
      .toArray<HTMLElement>("[data-philosophy-section]")
      .forEach((section: HTMLElement): void => {
        const lines = section.querySelectorAll<HTMLElement>(
          "[data-philosophy-line]",
        )
        if (!lines.length) return
        gsap.set(lines, { opacity: 0.16, y: 18 })
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: `+=${lines.length * 450}`,
            scrub: 0.6,
            pin: true,
            anticipatePin: 1,
          },
        })
        lines.forEach((line: HTMLElement, index: number): void => {
          timeline.to(
            line,
            { opacity: 1, y: 0, duration: 1, ease: "none" },
            index,
          )
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
    gsap.utils
      .toArray<HTMLElement>("[data-reveal-stagger]")
      .forEach((element: HTMLElement): void => {
        const children = element.querySelectorAll("[data-reveal-item]")
        gsap.from(children.length ? children : element, {
          y: 28,
          opacity: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 85%" },
        })
      })
    if (!window.matchMedia("(min-width: 48rem)").matches) return
    gsap.utils
      .toArray<HTMLElement>("[data-parallax]")
      .forEach((element: HTMLElement): void => {
        const speed = element.dataset.parallax === "fast" ? 26 : 14
        gsap.fromTo(
          element,
          { yPercent: -speed / 2 },
          {
            yPercent: speed / 2,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        )
      })
    gsap.utils
      .toArray<HTMLElement>("[data-parallax-reverse]")
      .forEach((element: HTMLElement): void => {
        gsap.fromTo(
          element,
          { yPercent: 10 },
          {
            yPercent: -10,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        )
      })
  })
})
window.addEventListener("pagehide", (): void => context.revert(), {
  once: true,
})
