export {}

async function initMotion(): Promise<void> {
  const [{ gsap }, { ScrollTrigger }] = await Promise.all([
    import("gsap"),
    import("gsap/ScrollTrigger"),
  ])

  gsap.registerPlugin(ScrollTrigger)

  const status = document.querySelector<HTMLElement>("[data-command-status]")
  const mm = gsap.matchMedia()

  document
    .querySelectorAll<HTMLElement>("[data-command]")
    .forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          if (status && section.dataset.command)
            status.textContent = section.dataset.command
        },
        onEnterBack: () => {
          if (status && section.dataset.command)
            status.textContent = section.dataset.command
        },
      })
    })

  mm.add("(prefers-reduced-motion: reduce)", () => {
    gsap.set("[data-hero-image], [data-hero-letter], .training-layer", {
      clearProps: "all",
    })
  })

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    const hero = document.querySelector<HTMLElement>("[data-hero]")
    if (hero) {
      gsap
        .timeline()
        .fromTo(hero, { opacity: 0 }, { opacity: 1, duration: 0.2 })
        .fromTo("[data-boot]", { opacity: 0 }, { opacity: 1, duration: 0.28 })
        .fromTo(
          "[data-hero-image]",
          { clipPath: "inset(0 0 100% 0)", scale: 1.12 },
          {
            clipPath: "inset(0 0 0% 0)",
            scale: 1.04,
            duration: 0.86,
            ease: "power3.out",
          },
        )
        .fromTo(
          "[data-hero-word]",
          { yPercent: 80, opacity: 0, filter: "blur(10px)" },
          {
            yPercent: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.64,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.42",
        )

      gsap
        .timeline({
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "+=90%",
            scrub: true,
            pin: true,
          },
        })
        .to("[data-hero-image]", { scale: 1.18, yPercent: 5 }, 0)
        .to("[data-hero-letter]:first-child", { xPercent: -12 }, 0)
        .to("[data-hero-letter]:last-child", { xPercent: 12 }, 0)
    }

    document.querySelectorAll<HTMLElement>(".module-card").forEach((card) => {
      card.addEventListener("pointerenter", () => {
        gsap.fromTo(
          card.querySelector("h3"),
          { letterSpacing: "0.12em" },
          { letterSpacing: "0em", duration: 0.42, ease: "power3.out" },
        )
      })
    })

    gsap.fromTo(
      ".awareness-image",
      { opacity: 0.12, filter: "grayscale(100%) contrast(80%)" },
      {
        opacity: 0.52,
        filter: "grayscale(100%) contrast(150%)",
        scrollTrigger: {
          trigger: "[data-awareness]",
          start: "top 65%",
          end: "bottom 40%",
          scrub: true,
        },
      },
    )

    gsap.fromTo(
      "[data-timeline-line]",
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".timeline",
          start: "top 70%",
          end: "bottom 30%",
          scrub: true,
        },
      },
    )

    gsap.fromTo(
      ".timeline-item",
      { y: 48, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.65,
        stagger: 0.08,
        scrollTrigger: { trigger: ".timeline", start: "top 70%" },
      },
    )

    gsap.fromTo(
      "[data-mission-progress]",
      { width: "25%" },
      {
        width: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: "[data-mission]",
          start: "top 65%",
          end: "bottom 45%",
          scrub: true,
        },
      },
    )

    gsap.fromTo(
      ".mission-step",
      { opacity: 0.45, scale: 0.92 },
      {
        opacity: 1,
        scale: 1,
        stagger: 0.12,
        duration: 0.45,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "[data-mission]",
          start: "top 60%",
        },
      },
    )
  })

  mm.add(
    "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
    () => {
      const horizontal =
        document.querySelector<HTMLElement>("[data-horizontal]")
      const track = document.querySelector<HTMLElement>(
        "[data-horizontal-track]",
      )
      if (horizontal && track) {
        const distance = () => track.scrollWidth - window.innerWidth + 80
        gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: horizontal,
            start: "top top",
            end: () => `+=${distance()}`,
            scrub: true,
            pin: true,
            invalidateOnRefresh: true,
          },
        })
      }
    },
  )

  mm.add(
    "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
    () => {
      const statsSection = document.querySelector<HTMLElement>(
        "[data-stats-section]",
      )
      const statsTrack =
        document.querySelector<HTMLElement>("[data-stats-track]")
      if (statsSection && statsTrack) {
        const statsDistance = () =>
          Math.max(statsTrack.scrollWidth - window.innerWidth + 96, 0)
        gsap.fromTo(
          statsTrack,
          { x: () => window.innerWidth * 0.72 },
          {
            x: () => -statsDistance(),
            ease: "none",
            scrollTrigger: {
              trigger: statsSection,
              start: "top top",
              end: () => `+=${statsDistance() + window.innerHeight * 1.5}`,
              scrub: true,
              pin: true,
              invalidateOnRefresh: true,
            },
          },
        )
      }

      gsap.fromTo(
        ".night-background",
        { scale: 1.08, yPercent: -4, opacity: 0.18 },
        {
          scale: 1,
          yPercent: 5,
          opacity: 0.36,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-night-operation]",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      )

      gsap.to(".training-layer", {
        clipPath: (index: number) =>
          index === 0 ? "inset(0 0 100% 0)" : "inset(0 0 0% 0)",
        stagger: 0.16,
        ease: "none",
        scrollTrigger: {
          trigger: "[data-training]",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      })
    },
  )
}

initMotion()
