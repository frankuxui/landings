// Egypt — GSAP ScrollTrigger animations.
// Each section has its own motion logic. All animations respect
// prefers-reduced-motion.
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches

// --- Torch section setup (runs even if reduced motion, for fallback) ---
const torchSection = document.querySelector<HTMLElement>("[data-torch-section]")
const torchViewport = document.querySelector<HTMLElement>(
  "[data-torch-viewport]",
)
const torchReveal = document.querySelector<HTMLElement>("[data-torch-reveal]")
const torchStatic = document.querySelector<HTMLElement>("[data-torch-static]")
const torchHint = document.querySelector<HTMLElement>("[data-torch-hint]")

if (torchSection && torchViewport && torchReveal && torchStatic) {
  if (prefersReducedMotion) {
    // Reduced motion: show full image with vignette, hide torch layer
    torchReveal.style.display = "none"
    torchStatic.classList.remove("hidden")
    if (torchHint) torchHint.style.display = "none"
  } else {
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0

    if (!isTouchDevice) {
      // Desktop: cursor-following torch via CSS mask
      let currentX = 50
      let currentY = 50
      let targetX = 50
      let targetY = 50

      gsap.ticker.add(() => {
        currentX += (targetX - currentX) * 0.15
        currentY += (targetY - currentY) * 0.15
        torchReveal.style.setProperty("--torch-x", currentX.toFixed(1) + "%")
        torchReveal.style.setProperty("--torch-y", currentY.toFixed(1) + "%")
      })

      let hintDismissed = false

      torchViewport.addEventListener("mousemove", (e: MouseEvent) => {
        const rect = torchViewport.getBoundingClientRect()
        targetX = ((e.clientX - rect.left) / rect.width) * 100
        targetY = ((e.clientY - rect.top) / rect.height) * 100

        if (!hintDismissed && torchHint) {
          gsap.to(torchHint, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
              torchHint.style.display = "none"
            },
          })
          hintDismissed = true
        }
      })
    } else {
      // Touch/mobile: scroll-linked progressive reveal
      if (torchHint) {
        const hintSpan = torchHint.querySelector("span.lg\\:hidden")
        if (hintSpan) hintSpan.textContent = "Scroll to reveal the carvings"
      }

      gsap.fromTo(
        torchReveal,
        { "--torch-radius": "5%" },
        {
          "--torch-radius": "120%",
          ease: "none",
          scrollTrigger: {
            trigger: torchViewport,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
          },
        },
      )

      // Auto-pan the torch center across the image while scrolling
      gsap.fromTo(
        torchReveal,
        { "--torch-x": "20%", "--torch-y": "30%" },
        {
          "--torch-x": "80%",
          "--torch-y": "70%",
          ease: "none",
          scrollTrigger: {
            trigger: torchViewport,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
          },
        },
      )

      // Dismiss hint on scroll
      if (torchHint) {
        ScrollTrigger.create({
          trigger: torchViewport,
          start: "top 70%",
          onEnter: () => {
            gsap.to(torchHint, {
              opacity: 0,
              duration: 0.5,
              onComplete: () => {
                torchHint.style.display = "none"
              },
            })
          },
        })
      }
    }
  }
}

if (!prefersReducedMotion) {
  // --- Hero parallax ---
  const heroImage = document.querySelector<HTMLElement>("[data-hero-image]")
  const heroTitle = document.querySelector<HTMLElement>("[data-hero-title]")
  const heroSubtitle = document.querySelector<HTMLElement>(
    "[data-hero-subtitle]",
  )
  const heroCoords = document.querySelector<HTMLElement>("[data-hero-coords]")

  if (heroImage) {
    gsap.to(heroImage, {
      scale: 1.15,
      scrollTrigger: {
        trigger: "#home",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    })
  }

  if (heroTitle) {
    gsap.to(heroTitle, {
      y: -60,
      opacity: 0,
      scrollTrigger: {
        trigger: "#home",
        start: "20% top",
        end: "60% top",
        scrub: 1,
      },
    })
  }

  if (heroSubtitle) {
    gsap.to(heroSubtitle, {
      y: -40,
      opacity: 0,
      scrollTrigger: {
        trigger: "#home",
        start: "15% top",
        end: "50% top",
        scrub: 1,
      },
    })
  }

  if (heroCoords) {
    gsap.to(heroCoords, {
      y: -30,
      opacity: 0,
      scrollTrigger: {
        trigger: "#home",
        start: "10% top",
        end: "40% top",
        scrub: 1,
      },
    })
  }

  // --- Timeline: progressive reveal of eras ---
  const timelineItems = document.querySelectorAll<HTMLElement>(
    "[data-timeline-item]",
  )
  timelineItems.forEach((item: HTMLElement) => {
    gsap.from(item, {
      opacity: 0,
      y: 60,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: item,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    })
  })

  // --- Architecture: monumental numbers count-up ---
  const archNumbers =
    document.querySelectorAll<HTMLElement>("[data-arch-number]")
  archNumbers.forEach((el: HTMLElement) => {
    const target = parseFloat(el.dataset.target || "0")
    const suffix = el.dataset.suffix || ""
    const obj = { val: 0 }
    gsap.to(obj, {
      val: target,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      onUpdate: () => {
        el.textContent =
          target % 1 === 0
            ? Math.round(obj.val).toLocaleString() + suffix
            : obj.val.toFixed(1) + suffix
      },
    })
  })

  // --- Pharaohs: image reveal with clip-path + opacity ---
  const pharaohCards = document.querySelectorAll<HTMLElement>(
    "[data-pharaoh-card]",
  )
  pharaohCards.forEach((card: HTMLElement, index: number) => {
    const image = card.querySelector<HTMLElement>("[data-pharaoh-image]")

    // Card slides in from alternating directions
    const fromX = index % 2 === 0 ? -60 : 60
    gsap.from(card, {
      opacity: 0,
      x: fromX,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    })

    // Image reveals with clip-path wipe
    if (image) {
      gsap.fromTo(
        image,
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: card,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        },
      )
    }
  })

  // --- Gods: horizontal scroll section with image scale (desktop only) ---
  const godsTrack = document.querySelector<HTMLElement>("[data-gods-track]")
  const godsContainer = document.querySelector<HTMLElement>(
    "[data-gods-container]",
  )

  if (godsTrack && godsContainer) {
    ScrollTrigger.matchMedia({
      "(min-width: 1024px)": () => {
        const getScrollAmount = (): number => {
          return -(godsTrack.scrollWidth - window.innerWidth)
        }

        gsap.to(godsTrack, {
          x: () => getScrollAmount(),
          ease: "none",
          scrollTrigger: {
            trigger: godsContainer,
            start: "top top",
            end: () => `+=${Math.abs(getScrollAmount())}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        })

        // Image scale tied to horizontal scroll progress
        const godImages =
          godsTrack.querySelectorAll<HTMLElement>("[data-god-image]")
        godImages.forEach((img: HTMLElement) => {
          gsap.fromTo(
            img,
            { scale: 1.15 },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: godsContainer,
                start: "top top",
                end: () => `+=${Math.abs(getScrollAmount())}`,
                scrub: 1,
              },
            },
          )
        })
      },
    })

    // Mobile: each god panel fades in on scroll
    ScrollTrigger.matchMedia({
      "(max-width: 1023px)": () => {
        const godPanels =
          godsTrack.querySelectorAll<HTMLElement>("[data-god-panel]")
        godPanels.forEach((panel: HTMLElement) => {
          gsap.from(panel, {
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: panel,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          })
        })
      },
    })
  }

  // --- Book of the Dead: text deciphering effect ---
  const decipherLines =
    document.querySelectorAll<HTMLElement>("[data-decipher]")
  decipherLines.forEach((line: HTMLElement) => {
    gsap.from(line, {
      opacity: 0,
      filter: "blur(8px)",
      y: 20,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: line,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    })
  })

  // --- Weighing of the Heart: balance tilt on scroll ---
  const balanceLine = document.querySelector<HTMLElement>("[data-balance-line]")
  if (balanceLine) {
    gsap.fromTo(
      balanceLine,
      { rotate: -5 },
      {
        rotate: 5,
        ease: "none",
        scrollTrigger: {
          trigger: "#afterlife",
          start: "top 60%",
          end: "bottom 40%",
          scrub: 1,
        },
      },
    )
  }

  // --- Treasures: entrance animation for visible slides ---
  const treasureImages = document.querySelectorAll<HTMLElement>(
    "[data-treasure-image]",
  )
  treasureImages.forEach((img: HTMLElement) => {
    gsap.from(img, {
      scale: 1.1,
      opacity: 0.6,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: img,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    })
  })

  // --- 1922 Discovery: progressive reveal ---
  const discoveryItems =
    document.querySelectorAll<HTMLElement>("[data-discovery]")
  discoveryItems.forEach((item: HTMLElement, index: number) => {
    gsap.from(item, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      delay: index * 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: item,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    })
  })

  // --- Valley of the Kings: descending mask effect ---
  const valleyLayers = document.querySelectorAll<HTMLElement>(
    "[data-valley-layer]",
  )
  valleyLayers.forEach((layer: HTMLElement, index: number) => {
    gsap.from(layer, {
      opacity: 0,
      y: -50 * (index + 1),
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: layer,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    })
  })

  // --- Hieroglyphs: symbols illuminate on scroll ---
  const glyphItems = document.querySelectorAll<HTMLElement>("[data-glyph-item]")
  glyphItems.forEach((item: HTMLElement, index: number) => {
    gsap.from(item, {
      opacity: 0,
      x: -30,
      duration: 0.6,
      delay: index * 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: item,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    })
  })
}
