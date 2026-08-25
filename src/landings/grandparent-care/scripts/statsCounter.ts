// Grandparent Care — GSAP count-up for the "Benefits of accompaniment"
// figures. Each figure counts up once it enters the viewport and respects
// prefers-reduced-motion (both at load and on live preference change, e.g.
// toggled in the platform preview shell's OS-level settings).
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const statItems = document.querySelectorAll<HTMLElement>("[data-stat-item]")

if (statItems.length > 0) {
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

  // Track only the ScrollTrigger instances this module creates. Killing
  // `ScrollTrigger.getAll()` would tear down every trigger on the page —
  // including ones already registered by other sections that appear earlier
  // in the DOM (e.g. the Gallery reveals) — permanently freezing them in
  // their pre-reveal hidden state since nothing would remain to fire the
  // reveal animation.
  let statScrollTriggers: ScrollTrigger[] = []

  const animateStats = (): void => {
    statItems.forEach((item: HTMLElement) => {
      const { display, value, suffix } = readStat(item)
      if (!display) return

      const counter = { count: 0 }

      const tween = gsap.to(counter, {
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
      if (tween.scrollTrigger) statScrollTriggers.push(tween.scrollTrigger)
    })
  }

  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

  const applyMotionPreference = (prefersReducedMotion: boolean): void => {
    statScrollTriggers.forEach((trigger: ScrollTrigger) => trigger.kill())
    statScrollTriggers = []
    setFinalValues()
    if (!prefersReducedMotion) animateStats()
  }

  applyMotionPreference(motionQuery.matches)

  motionQuery.addEventListener("change", (event: MediaQueryListEvent) => {
    applyMotionPreference(event.matches)
  })
}
