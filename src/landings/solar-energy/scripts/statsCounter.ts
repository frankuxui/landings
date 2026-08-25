// Solar Energy — GSAP count-up for the "Impact" figures (one large headline
// figure plus a stacked column of secondary figures). Each figure counts up
// once it enters the viewport and respects `prefers-reduced-motion`, both at
// load and on a live preference change (e.g. toggled in the platform preview
// shell's OS-level settings). Figures are formatted with thousands
// separators to stay readable at larger values.
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const statItems = document.querySelectorAll<HTMLElement>("[data-stat-item]")
const formatter = new Intl.NumberFormat("es-ES")

if (statItems.length > 0) {
  const readStat = (
    item: HTMLElement,
  ): { display: HTMLElement | null; value: number } => {
    const display = item.querySelector<HTMLElement>("[data-stat-display]")
    const value = parseInt(item.getAttribute("data-stat-value") ?? "0", 10)
    return { display, value }
  }

  const setFinalValues = (): void => {
    statItems.forEach((item: HTMLElement) => {
      const { display, value } = readStat(item)
      if (display) display.textContent = formatter.format(value)
    })
  }

  const animateStats = (): void => {
    statItems.forEach((item: HTMLElement) => {
      const { display, value } = readStat(item)
      if (!display) return

      const counter = { count: 0 }

      gsap.to(counter, {
        count: value,
        duration: 2.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          once: true,
        },
        onUpdate: () => {
          display.textContent = formatter.format(Math.floor(counter.count))
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
