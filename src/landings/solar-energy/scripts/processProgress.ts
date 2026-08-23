// Heliogrid — GSAP vertical progress rail for the "Proceso" section.
//
// Baseline (works with zero JS): the six steps render as a plain, fully
// readable vertical list next to a sticky heading column — usable at every
// breakpoint, including when JS is disabled or the user prefers reduced
// motion.
//
// Enhancement (Desktop, motion allowed only): a thin vertical line grows
// alongside the list as the page scrolls (scrubbed to scroll position), the
// step whose center crosses the viewport midpoint is marked active (heavier
// contrast on its number/icon/title), and the sticky column's "Etapa n / 6"
// counter updates to match. Uses `gsap.matchMedia()` so the whole
// enhancement only ever applies at `lg` and up — matching the breakpoint
// where the left column actually becomes sticky (and the platform preview's
// own Desktop device bucket, which starts at 1024px) — and never when
// `prefers-reduced-motion: reduce` is set.
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const track = document.querySelector<HTMLElement>("[data-process-track]")
const fill = document.querySelector<HTMLElement>("[data-process-fill]")
const counter = document.querySelector<HTMLElement>("[data-process-counter]")
const steps = document.querySelectorAll<HTMLElement>("[data-process-step]")

if (track && fill && counter && steps.length > 0) {
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

      if (!isDesktop || prefersReducedMotion) {
        // Below lg, or lg+ with reduced motion: keep the plain static list.
        // Nothing to animate or clean up.
        return
      }

      const setActiveStep = (index: number): void => {
        steps.forEach((step: HTMLElement) => {
          const stepIndex = Number(step.dataset.stepIndex)
          if (stepIndex === index) {
            step.setAttribute("data-active", "true")
          } else {
            step.removeAttribute("data-active")
          }
        })
        counter.textContent = String(index + 1).padStart(2, "0")
      }

      const stepTriggers = Array.from(steps).map((step: HTMLElement) =>
        ScrollTrigger.create({
          trigger: step,
          start: "top center",
          end: "bottom center",
          onToggle: (self: ScrollTrigger) => {
            if (self.isActive) setActiveStep(Number(step.dataset.stepIndex))
          },
        }),
      )

      const fillTween = gsap.fromTo(
        fill,
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: track,
            start: "top center",
            end: "bottom center",
            scrub: 0.4,
          },
        },
      )

      setActiveStep(0)

      return () => {
        stepTriggers.forEach((trigger: ScrollTrigger) => trigger.kill())
        fillTween.scrollTrigger?.kill()
        fillTween.kill()
        gsap.set(fill, { clearProps: "height" })
        steps.forEach((step: HTMLElement) =>
          step.removeAttribute("data-active"),
        )
        counter.textContent = "01"
      }
    },
  )
}
