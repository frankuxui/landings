import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export {}

gsap.registerPlugin(ScrollTrigger)

const media = gsap.matchMedia()

media.add("(prefers-reduced-motion: no-preference)", () => {
  const heroImage = document.querySelector<HTMLElement>("[data-hero-image]")
  const heroHeadline = document.querySelector<HTMLElement>(
    "[data-hero-headline]",
  )
  const heroMeta = document.querySelector<HTMLElement>("[data-hero-meta]")
  const heroCopy = document.querySelector<HTMLElement>("[data-hero-copy]")
  const heroActions = document.querySelector<HTMLElement>("[data-hero-actions]")
  const finalImage = document.querySelector<HTMLElement>("[data-final-image]")
  const timeline = document.querySelector<HTMLElement>("[data-timeline]")
  const timelineTrack = document.querySelector<HTMLElement>(
    "[data-timeline-track]",
  )
  const timelineLine = document.querySelector<HTMLElement>(
    "[data-timeline-line]",
  )
  const parallaxItems = Array.from(
    document.querySelectorAll<HTMLElement>("[data-parallax]"),
  )

  if (heroImage && heroHeadline && heroMeta && heroCopy && heroActions) {
    gsap
      .timeline()
      .fromTo(
        heroImage,
        { scale: 1.12, clipPath: "inset(0 0 100% 0)" },
        {
          scale: 1,
          clipPath: "inset(0 0 0% 0)",
          duration: 1.2,
          ease: "power3.out",
        },
      )
      .from(
        heroHeadline,
        { y: 42, opacity: 0, duration: 0.8, ease: "power3.out" },
        "-=0.5",
      )
      .from(
        heroCopy,
        { y: 18, opacity: 0, duration: 0.5, ease: "power2.out" },
        "-=0.35",
      )
      .from(
        heroMeta,
        { y: 12, opacity: 0, duration: 0.45, ease: "power2.out" },
        "-=0.45",
      )
      .from(
        heroActions,
        { y: 12, opacity: 0, duration: 0.45, ease: "power2.out" },
        "-=0.2",
      )

    gsap.to(heroImage, {
      yPercent: 10,
      scale: 0.96,
      opacity: 0.55,
      ease: "none",
      scrollTrigger: {
        trigger: heroImage,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    })

    gsap.to(heroMeta, {
      opacity: 0,
      y: -24,
      ease: "none",
      scrollTrigger: {
        trigger: heroImage,
        start: "top top",
        end: "40% top",
        scrub: true,
      },
    })
  }

  if (timeline && timelineTrack && timelineLine) {
    gsap.fromTo(
      timelineLine,
      { scaleX: 0, scaleY: 0 },
      {
        scaleX: 1,
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: timeline,
          start: "top 70%",
          end: "bottom 30%",
          scrub: true,
        },
      },
    )

    media.add("(min-width: 1024px)", () => {
      const distance = timelineTrack.scrollWidth - window.innerWidth
      if (distance <= 0) return

      gsap.to(timelineTrack, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: timeline,
          start: "top top",
          end: `+=${distance}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      })
    })
  }

  parallaxItems.forEach((item: HTMLElement, index: number) => {
    gsap.to(item, {
      y: index % 2 === 0 ? -28 : 28,
      ease: "none",
      scrollTrigger: {
        trigger: item,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })
  })

  if (finalImage) {
    gsap.to(finalImage, {
      scale: 1,
      ease: "none",
      scrollTrigger: {
        trigger: finalImage,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })
  }
})
