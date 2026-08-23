// Folio — GSAP active-topic tracking for the "Dispatch" sticky section.
//
// Baseline (works with zero JS): the sticky left column shows a plain list
// of topic links next to a normally-scrolling right column of dispatch
// items — fully usable at every breakpoint, including with JS disabled or
// `prefers-reduced-motion: reduce`.
//
// Enhancement (Desktop, motion allowed only): as the reader scrolls past
// each topic's first item on the right, the matching link in the sticky
// left index gets a heavier weight/contrast via `data-active`. Uses
// `gsap.matchMedia()` so the enhancement only ever applies at `lg` and up —
// matching the breakpoint where the left column actually becomes sticky —
// and never when reduced motion is requested.
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const links = document.querySelectorAll<HTMLAnchorElement>(
  "[data-dispatch-nav-link]",
)
const items = document.querySelectorAll<HTMLElement>("[data-dispatch-item]")

if (links.length > 0 && items.length > 0) {
  const mm = gsap.matchMedia()

  mm.add(
    {
      isDesktop: "(min-width: 1024px)",
      prefersReducedMotion: "(prefers-reduced-motion: reduce)",
    },
    (context: gsap.Context) => {
      const { isDesktop, prefersReducedMotion } = context.conditions as {
        isDesktop: boolean
        prefersReducedMotion: boolean
      }

      if (!isDesktop || prefersReducedMotion) return

      const setActiveTopic = (topic: string | undefined): void => {
        if (!topic) return
        links.forEach((link: HTMLAnchorElement) => {
          if (link.dataset.topic === topic) {
            link.setAttribute("data-active", "true")
          } else {
            link.removeAttribute("data-active")
          }
        })
      }

      const triggers = Array.from(items)
        .filter((item: HTMLElement) => item.id.length > 0)
        .map((item: HTMLElement) =>
          ScrollTrigger.create({
            trigger: item,
            start: "top center",
            end: "bottom center",
            onToggle: (self: ScrollTrigger) => {
              if (self.isActive) setActiveTopic(item.dataset.topic)
            },
          }),
        )

      const firstTopic = items[0]?.dataset.topic
      setActiveTopic(firstTopic)

      return () => {
        triggers.forEach((trigger: ScrollTrigger) => trigger.kill())
        links.forEach((link: HTMLAnchorElement) =>
          link.removeAttribute("data-active"),
        )
      }
    },
  )
}
