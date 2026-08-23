// Fundición Ónix — GSAP count-up for the single-row production figures in
// "Fábrica". Unlike a card-grid counter, this animates a flat, dash-divided
// row of numbers; each figure counts up once it enters the viewport and
// respects prefers-reduced-motion (both at load and on live preference
// change, e.g. toggled in the platform preview shell's OS-level settings).
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const statsRow = document.querySelector<HTMLElement>("[data-stats-row]")

if (statsRow) {
  const statItems = statsRow.querySelectorAll<HTMLElement>("[data-stat-item]")

  const readStat = (
    item: HTMLElement,
  ): { display: HTMLElement | null; value: number; suffix: string } => {
    const display = item.querySelector<HTMLElement>("[data-stat-display]")
    const value = parseInt(item.getAttribute("data-stat-value") ?? "0", 10)
    const suffix = item.getAttribute("data-stat-suffix") ?? ""
    return { display, value, suffix }
  }

  const setFinalValues = (): void => {
    statItems.forEach((item: HTMLElement) => {
      const { display, value, suffix } = readStat(item)
      if (display) display.textContent = `${value}${suffix}`
    })
  }

  const animateStats = (): void => {
    statItems.forEach((item: HTMLElement) => {
      const { display, value, suffix } = readStat(item)
      if (!display) return

      const counter = { count: 0 }

      gsap.to(counter, {
        count: value,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          once: true,
        },
        onUpdate: () => {
          display.textContent = `${Math.floor(counter.count)}${suffix}`
        },
      })
    })
  }

  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

  const applyMotionPreference = (prefersReducedMotion: boolean): void => {
    ScrollTrigger.getAll().forEach((trigger: ScrollTrigger) => trigger.kill())
    setFinalValues()
    if (!prefersReducedMotion) animateStats()
  }

  applyMotionPreference(motionQuery.matches)

  motionQuery.addEventListener("change", (event: MediaQueryListEvent) => {
    applyMotionPreference(event.matches)
  })
}
