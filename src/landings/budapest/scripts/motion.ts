// Budapest — narrative GSAP + ScrollTrigger motion.
export {}

async function initMotion(): Promise<void> {
  const [{ gsap }, { ScrollTrigger }] = await Promise.all([
    import("gsap"),
    import("gsap/ScrollTrigger"),
  ])

  gsap.registerPlugin(ScrollTrigger)

  const mm = gsap.matchMedia()

  mm.add("(prefers-reduced-motion: reduce)", () => {
    gsap.set("[data-hero-parallax], [data-hero-letter]", { clearProps: "all" })
  })

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    const hero = document.querySelector<HTMLElement>("[data-hero]")
    if (hero) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        })
        .to("[data-hero-parallax] img", { scale: 1.08 }, 0)
        .to("[data-hero-letter]:first-child", { xPercent: -7 }, 0)
        .to("[data-hero-letter]:last-child", { xPercent: 8 }, 0)
        .to("[data-hero-meta]", { autoAlpha: 0, y: -24 }, 0)
        .to(
          "[data-hero-subtitle]",
          { clipPath: "inset(0% 0% 100% 0%)", y: 28, autoAlpha: 0 },
          0.15,
        )
    }

    const river = document.querySelector<HTMLElement>("[data-river-section]")
    if (river) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "[data-river-beats]",
            start: "top 75%",
            end: "bottom 45%",
            scrub: true,
          },
        })
        .to("[data-river-line]", { scaleY: 1, ease: "none" }, 0)
        .fromTo(
          "[data-river-beat]",
          { y: 42, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, stagger: 0.18 },
          0,
        )
    }

    const split = document.querySelector<HTMLElement>("[data-buda-pest]")
    if (split) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: split,
            start: "top 65%",
            end: "bottom 30%",
            scrub: true,
          },
        })
        .fromTo("[data-buda-side]", { xPercent: -8 }, { xPercent: 0 }, 0)
        .fromTo("[data-pest-side]", { xPercent: 8 }, { xPercent: 0 }, 0)
        .fromTo(
          "[data-buda-pest-quote]",
          { clipPath: "inset(0 100% 0 0)" },
          { clipPath: "inset(0 0% 0 0)" },
          0.45,
        )
    }

    document
      .querySelectorAll<HTMLElement>("[data-monument-reveal]")
      .forEach((item: HTMLElement) => {
        const type = item.dataset.monumentReveal ?? "rise"
        const image = item.querySelector("img")
        const fromVars =
          type === "clip"
            ? { clipPath: "inset(0 0 0 35%)", autoAlpha: 0.8 }
            : type === "mask"
              ? { clipPath: "inset(18% 0 18% 0)", autoAlpha: 0.8 }
              : { y: 34, autoAlpha: 0 }

        gsap.fromTo(item, fromVars, {
          y: 0,
          autoAlpha: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 78%",
          },
        })

        if (image && type === "scale") {
          gsap.fromTo(
            image,
            { scale: 1.08 },
            {
              scale: 1,
              duration: 1.2,
              ease: "power2.out",
              scrollTrigger: { trigger: item, start: "top 80%" },
            },
          )
        }
      })

    const seasons = document.querySelector<HTMLElement>("[data-seasons]")
    if (seasons) {
      gsap.fromTo(
        seasons,
        { "--season-progress": 0 },
        {
          "--season-progress": 1,
          ease: "none",
          scrollTrigger: {
            trigger: seasons,
            start: "top 60%",
            end: "bottom 35%",
            scrub: true,
          },
        },
      )
    }
  })

  mm.add(
    "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
    () => {
      const unification =
        document.querySelector<HTMLElement>("[data-unification]")
      if (unification) {
        gsap.set('[data-city-word="buda"]', { xPercent: -120, yPercent: -35 })
        gsap.set('[data-city-word="obuda"]', { yPercent: 65, scale: 0.92 })
        gsap.set('[data-city-word="pest"]', { xPercent: 120, yPercent: -20 })
        gsap.set("[data-unification-result]", { autoAlpha: 0, scale: 0.88 })

        gsap
          .timeline({
            scrollTrigger: {
              trigger: unification,
              start: "top top",
              end: "+=130%",
              pin: true,
              scrub: true,
            },
          })
          .to("[data-city-word]", {
            xPercent: 0,
            yPercent: 0,
            scale: 1,
            stagger: 0.06,
          })
          .to("[data-unification-year]", { scale: 0.82, autoAlpha: 0.24 }, 0)
          .to("[data-city-word]", { autoAlpha: 0.12, scale: 0.9 }, 0.58)
          .to(
            "[data-unification-result]",
            { autoAlpha: 1, scale: 1, letterSpacing: "0.14em" },
            0.66,
          )
      }

      const riverImage =
        document.querySelector<HTMLElement>("[data-river-image]")
      if (riverImage) {
        const image = riverImage.querySelector("img")
        if (!image) return

        gsap.fromTo(
          image,
          { scale: 1.04, yPercent: -2 },
          {
            scale: 1,
            yPercent: 3,
            ease: "none",
            scrollTrigger: {
              trigger: riverImage,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        )
      }
    },
  )
}

initMotion()
