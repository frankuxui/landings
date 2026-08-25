// Journalist Dispatch — GSAP scroll-synced photo sequence for the lead
// dispatch ("Feature" section).
//
// Baseline (works with zero JS, Mobile/Tablet, or Desktop with
// `prefers-reduced-motion: reduce`): the sticky text column sits `lg:sticky`
// beside a plain vertical stack of frames, each already carrying its own
// caption underneath — nothing here depends on this script.
//
// Enhancement (Laptop/Desktop, motion allowed only): as each frame scrolls
// through the center of the viewport, it crossfades to full opacity while
// its neighbors recede, and the sticky column's running caption and frame
// counter ("02 / 04") update to match — a simplified sibling of the
// crossfading detail panel pattern used elsewhere in the gallery.
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const frames = document.querySelectorAll<HTMLElement>("[data-feature-frame]")
const counter = document.querySelector<HTMLElement>("[data-feature-counter]")
const runningCaption = document.querySelector<HTMLElement>(
  "[data-feature-running-caption]",
)

if (frames.length > 0 && counter && runningCaption) {
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

      const total = frames.length
      runningCaption.hidden = false

      const setActiveFrame = (frame: HTMLElement): void => {
        const index = Number(frame.dataset.frameIndex ?? "0")
        counter.textContent = `${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`
        runningCaption.textContent = frame.dataset.caption ?? ""

        frames.forEach((candidate: HTMLElement) => {
          gsap.to(candidate, {
            opacity: candidate === frame ? 1 : 0.28,
            duration: 0.5,
            ease: "power2.out",
          })
        })
      }

      setActiveFrame(frames[0])

      const triggers = Array.from(frames).map((frame: HTMLElement) =>
        ScrollTrigger.create({
          trigger: frame,
          start: "top center",
          end: "bottom center",
          onToggle: (self: ScrollTrigger) => {
            if (self.isActive) setActiveFrame(frame)
          },
        }),
      )

      return () => {
        triggers.forEach((trigger: ScrollTrigger) => trigger.kill())
        runningCaption.hidden = true
        gsap.set(frames, { clearProps: "opacity" })
      }
    },
  )
}
