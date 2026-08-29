import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export {}

gsap.registerPlugin(ScrollTrigger)

const media = gsap.matchMedia()

media.add("(prefers-reduced-motion: no-preference)", () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "[data-hero-transition]",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    })
    .to("[data-hero-postcard]", { clipPath: "inset(0 0 100% 0)" }, 0)
    .to("[data-hero-title]", { yPercent: -18, opacity: 0.12 }, 0)
    .fromTo(
      "[data-hero-question]",
      { opacity: 0, yPercent: 35 },
      { opacity: 1, yPercent: 0 },
      0.28,
    )

  gsap.utils
    .toArray<HTMLElement>("[data-parallax='true']")
    .forEach((image: HTMLElement) => {
      gsap.fromTo(
        image,
        { yPercent: -7 },
        {
          yPercent: 7,
          ease: "none",
          scrollTrigger: {
            trigger: image,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      )
    })

  gsap.utils
    .toArray<HTMLElement>("[data-layer]")
    .forEach((layer: HTMLElement, index: number) => {
      gsap.fromTo(
        layer,
        {
          clipPath: index % 2 === 0 ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)",
        },
        {
          clipPath: "inset(0 0% 0 0%)",
          ease: "power2.out",
          scrollTrigger: {
            trigger: layer,
            start: "top 75%",
            end: "top 35%",
            scrub: 0.8,
          },
        },
      )
    })

  const blurStory = document.querySelector("[data-blur-story]")
  if (blurStory) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "[data-blur-story]",
        start: "top 60%",
        end: "bottom 20%",
        scrub: true,
      },
    })

    tl.fromTo(
      "[data-blur-image]",
      { filter: "blur(24px)" },
      { filter: "blur(0px)" },
      0,
    )
    tl.fromTo(
      "[data-blur-text-reveal]",
      { opacity: 0, yPercent: 30 },
      { opacity: 1, yPercent: 0 },
      0.15,
    )
    tl.fromTo("[data-blur-words]", { opacity: 0 }, { opacity: 1 }, 0.35)
    tl.fromTo(
      "[data-blur-text-final]",
      { opacity: 0, yPercent: 20 },
      { opacity: 1, yPercent: 0 },
      0.65,
    )
  }

  const livingSection = document.querySelector<HTMLElement>("[data-living]")
  if (livingSection) {
    gsap.to("[data-living-image]", {
      scale: 1.08,
      yPercent: -5,
      ease: "none",
      scrollTrigger: {
        trigger: livingSection,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })
    gsap.to("[data-living-image-next]", {
      opacity: 0.72,
      clipPath: "inset(0 0 0 0)",
      ease: "none",
      scrollTrigger: {
        trigger: livingSection,
        start: "45% center",
        end: "80% center",
        scrub: true,
      },
    })
    gsap.to("[data-living-shade]", {
      opacity: 0.75,
      scrollTrigger: {
        trigger: livingSection,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    })

    gsap.utils
      .toArray<HTMLElement>("[data-living-scene]")
      .forEach((scene: HTMLElement) => {
        const motion = scene.dataset.motion
        const fromVars =
          motion === "from-left"
            ? { xPercent: -35, opacity: 0 }
            : motion === "side"
              ? { xPercent: 35, opacity: 0 }
              : motion === "focus"
                ? { filter: "blur(16px)", opacity: 0 }
                : motion === "dark"
                  ? { opacity: 0, backgroundColor: "var(--inverted)" }
                  : { clipPath: "inset(100% 0 0 0)", opacity: 0 }
        gsap.fromTo(scene, fromVars, {
          xPercent: 0,
          opacity: 1,
          filter: "blur(0px)",
          clipPath: "inset(0 0 0 0)",
          backgroundColor: "transparent",
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: scene,
            start: "top 78%",
            end: "top 42%",
            scrub: 0.8,
          },
        })
      })
  }

  gsap.fromTo(
    "[data-blackout-text]",
    { opacity: 0.25, scale: 0.98 },
    {
      opacity: 1,
      scale: 1,
      scrollTrigger: {
        trigger: "[data-blackout]",
        start: "top 65%",
        end: "center center",
        scrub: true,
      },
    },
  )

  gsap.to("[data-blackout-image]", {
    opacity: 0.04,
    scale: 1.08,
    scrollTrigger: {
      trigger: "[data-blackout]",
      start: "top 75%",
      end: "center center",
      scrub: true,
    },
  })

  gsap.to("[data-blackout-word]", {
    clipPath: "inset(0 0 0 0)",
    filter: "blur(0px)",
    opacity: 1,
    stagger: 0.22,
    duration: 1.15,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "[data-blackout]",
      start: "top 35%",
    },
  })

  const generationSection =
    document.querySelector<HTMLElement>("[data-generations]")
  if (generationSection) {
    const chapters = gsap.utils.toArray<HTMLElement>(
      "[data-generation-chapter]",
    )
    const images = gsap.utils.toArray<HTMLElement>("[data-generation-image]")
    const number = document.querySelector<HTMLElement>(
      "[data-generation-number]",
    )

    chapters.forEach((chapter: HTMLElement, index: number) => {
      gsap.fromTo(
        chapter,
        { opacity: 0.18, yPercent: 16 },
        {
          opacity: 1,
          yPercent: 0,
          scrollTrigger: {
            trigger: chapter,
            start: "top 70%",
            end: "center center",
            scrub: true,
            onEnter: () => {
              images.forEach((image: HTMLElement, imageIndex: number) => {
                gsap.to(image, {
                  opacity: imageIndex === index ? 1 : 0,
                  clipPath:
                    imageIndex === index ? "inset(0 0 0 0)" : "inset(0 0 0 8%)",
                  scale: imageIndex === index ? 1 : 1.04,
                  duration: 0.75,
                  ease: "power3.out",
                })
              })
              if (number)
                number.textContent = String(index + 1).padStart(2, "0")
            },
            onEnterBack: () => {
              images.forEach((image: HTMLElement, imageIndex: number) => {
                gsap.to(image, {
                  opacity: imageIndex === index ? 1 : 0,
                  clipPath:
                    imageIndex === index ? "inset(0 0 0 0)" : "inset(0 8% 0 0)",
                  scale: imageIndex === index ? 1 : 1.04,
                  duration: 0.75,
                  ease: "power3.out",
                })
              })
              if (number)
                number.textContent = String(index + 1).padStart(2, "0")
            },
          },
        },
      )
      gsap.to(chapter, {
        opacity: 0.16,
        yPercent: -10,
        scrollTrigger: {
          trigger: chapter,
          start: "center center",
          end: "bottom 25%",
          scrub: true,
        },
      })
    })
  }

  const geoSection = document.querySelector("[data-geography]")
  if (geoSection) {
    gsap.fromTo(
      "[data-geo-word-leave]",
      { xPercent: -80, opacity: 0 },
      {
        xPercent: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: "[data-geography]",
          start: "top 60%",
          end: "top 25%",
          scrub: true,
        },
      },
    )
    gsap.fromTo(
      "[data-geo-word-stay]",
      { xPercent: 80, opacity: 0 },
      {
        xPercent: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: "[data-geography]",
          start: "top 50%",
          end: "top 15%",
          scrub: true,
        },
      },
    )
  }

  const departureStack = document.querySelector("[data-departure-stack]")
  if (departureStack) {
    const layers = gsap.utils.toArray<HTMLElement>(
      "[data-departure-stack] [data-stack-layer]",
    )
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "[data-departure-stack]",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    })

    layers.forEach((layer: HTMLElement, index: number) => {
      if (index === 0) return
      const startPos = (index - 1) / (layers.length - 1)
      tl.fromTo(layer, { opacity: 0 }, { opacity: 1 }, startPos)
      if (index > 1) {
        tl.to(layers[index - 1], { opacity: 0.3 }, startPos)
      }
    })
  }
})
