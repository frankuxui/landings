// Terroir — GSAP ScrollTrigger animations.
// Each section has its own motion logic. All animations respect
// prefers-reduced-motion.
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches

// --- Reading progress bar ---
const progressBar = document.querySelector<HTMLElement>(
  "[data-reading-progress]",
)
if (progressBar && !prefersReducedMotion) {
  ScrollTrigger.create({
    trigger: document.documentElement,
    start: "top top",
    end: "bottom bottom",
    onUpdate: (self: ScrollTrigger) => {
      progressBar.style.setProperty(
        "--reading-progress",
        self.progress.toFixed(4),
      )
    },
  })
}

if (!prefersReducedMotion) {
  // --- Editorial side index ---
  const chapterLinks = document.querySelectorAll<HTMLAnchorElement>(
    "[data-chapter-link]",
  )

  chapterLinks.forEach((link: HTMLAnchorElement) => {
    const sectionId = link.dataset.chapterLink
    const section = sectionId ? document.getElementById(sectionId) : null
    if (!section) return

    ScrollTrigger.create({
      trigger: section,
      start: "top center",
      end: "bottom center",
      onToggle: (self: ScrollTrigger) => {
        link.classList.toggle("is-active", self.isActive)
      },
    })
  })

  // --- Hero parallax ---
  const heroImage = document.querySelector<HTMLElement>("[data-hero-image]")
  const heroTitle = document.querySelector<HTMLElement>("[data-hero-title]")
  const heroSubtitle = document.querySelector<HTMLElement>(
    "[data-hero-subtitle]",
  )

  if (heroImage && heroTitle) {
    gsap.to(heroImage, {
      y: 120,
      scale: 1.08,
      scrollTrigger: {
        trigger: "#home",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    })

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
  }

  // --- Vendimia (Harvest) pinned seasons ---
  const vendimiaSection = document.querySelector<HTMLElement>(
    "[data-vendimia-section]",
  )
  const vendimiaSeasons = document.querySelectorAll<HTMLElement>(
    "[data-vendimia-season]",
  )
  const harvestProgress = document.querySelector<HTMLElement>(
    "[data-harvest-progress]",
  )
  const harvestCount = document.querySelector<HTMLElement>(
    "[data-harvest-count]",
  )

  if (vendimiaSection && vendimiaSeasons.length > 1) {
    vendimiaSeasons.forEach((season: HTMLElement, index: number) => {
      if (index === 0) return
      gsap.set(season, { opacity: 0, y: 40 })
    })

    ScrollTrigger.create({
      trigger: vendimiaSection,
      start: "top top",
      end: `+=${vendimiaSeasons.length * 100}%`,
      pin: true,
      scrub: 1,
      onUpdate: (self: ScrollTrigger) => {
        const progress = self.progress
        const totalSeasons = vendimiaSeasons.length
        const seasonIndex = Math.min(
          Math.floor(progress * totalSeasons),
          totalSeasons - 1,
        )

        if (harvestProgress) {
          gsap.to(harvestProgress, {
            scaleX: Math.max(progress, 0.08),
            duration: 0.25,
            ease: "power2.out",
          })
        }

        if (harvestCount) {
          harvestCount.textContent = `${String(seasonIndex + 1).padStart(
            2,
            "0",
          )} / ${String(totalSeasons).padStart(2, "0")}`
        }

        vendimiaSeasons.forEach((season: HTMLElement, idx: number) => {
          if (idx === seasonIndex) {
            gsap.to(season, { opacity: 1, y: 0, scale: 1, duration: 0.45 })
          } else {
            gsap.to(season, {
              opacity: 0,
              y: idx < seasonIndex ? -40 : 40,
              scale: 0.98,
              duration: 0.4,
            })
          }
        })
      },
    })
  }

  // --- Bodega (Cellar): fade in from darkness ---
  const bodegaSection = document.querySelector<HTMLElement>(
    "[data-bodega-section]",
  )
  const bodegaImage = document.querySelector<HTMLElement>("[data-bodega-image]")
  const bodegaTitle = document.querySelector<HTMLElement>("[data-bodega-title]")

  if (bodegaSection && bodegaImage) {
    gsap.from(bodegaImage, {
      opacity: 0.05,
      scale: 1.05,
      scrollTrigger: {
        trigger: bodegaSection,
        start: "top 80%",
        end: "center center",
        scrub: 1,
      },
    })

    if (bodegaTitle) {
      gsap.from(bodegaTitle, {
        opacity: 0,
        y: 30,
        scrollTrigger: {
          trigger: bodegaSection,
          start: "30% 80%",
          end: "50% center",
          scrub: 1,
        },
      })
    }
  }

  // --- Tiempo (Aging): bottle scale on scroll ---
  const tiempoSection = document.querySelector<HTMLElement>(
    "[data-tiempo-section]",
  )
  const tiempoBottle = document.querySelector<HTMLElement>(
    "[data-tiempo-bottle]",
  )

  if (tiempoSection && tiempoBottle) {
    gsap.from(tiempoBottle, {
      scale: 0.6,
      opacity: 0.3,
      scrollTrigger: {
        trigger: tiempoSection,
        start: "top 80%",
        end: "center center",
        scrub: 1,
      },
    })
  }

  // --- Closing: bottle grows on scroll ---
  const closingSection = document.querySelector<HTMLElement>(
    "[data-closing-section]",
  )
  const closingBottle = document.querySelector<HTMLElement>(
    "[data-closing-bottle]",
  )

  if (closingSection && closingBottle) {
    gsap.from(closingBottle, {
      scale: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: closingSection,
        start: "top 80%",
        end: "center center",
        scrub: 1,
      },
    })
  }

  // --- Parallax images ---
  const parallaxImages =
    document.querySelectorAll<HTMLElement>("[data-parallax]")
  parallaxImages.forEach((img: HTMLElement) => {
    gsap.to(img, {
      y: -50,
      scrollTrigger: {
        trigger: img.parentElement,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    })
  })
}
