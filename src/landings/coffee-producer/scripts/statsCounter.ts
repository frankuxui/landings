import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const statsGrid = document.querySelector("[data-stats-grid]")
if (!statsGrid) throw new Error("Stats grid not found")

const statItems = statsGrid.querySelectorAll("[data-stat-item]")
if (statItems.length === 0) throw new Error("No stat items found")

const isReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches

const animateStats = () => {
  statItems.forEach((item: Element) => {
    const display = item.querySelector(
      "[data-stat-display]",
    ) as HTMLElement | null
    const value = parseInt(item.getAttribute("data-stat-value") || "0", 10)
    const suffix = item.getAttribute("data-stat-suffix") || ""

    if (!display) return

    if (isReducedMotion) {
      display.textContent = `${value}${suffix}`
      return
    }

    const obj = { count: 0 }

    gsap.to(obj, {
      count: value,
      duration: 2.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        once: true,
      },
      onUpdate: () => {
        const count = Math.floor(obj.count)
        display.textContent = `${count}${suffix}`
      },
    })
  })
}

animateStats()

const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
const handleMotionChange = () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
  statItems.forEach((item: Element) => {
    const display = item.querySelector(
      "[data-stat-display]",
    ) as HTMLElement | null
    const value = parseInt(item.getAttribute("data-stat-value") || "0", 10)
    const suffix = item.getAttribute("data-stat-suffix") || ""
    if (display) {
      display.textContent = `${value}${suffix}`
    }
  })
  if (!mediaQuery.matches) {
    animateStats()
  }
}

mediaQuery.addEventListener("change", handleMotionChange)
