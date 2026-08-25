// Pet Care Haven — GSAP scroll-driven detail panel for "A day of care".
//
// Baseline (works with zero JS, Mobile/Tablet, or Desktop with
// `prefers-reduced-motion: reduce`): the left column's intro text sits
// `lg:sticky` beside a horizontally scroll-snapped rail on Mobile/Tablet or
// a normally-scrolling stack on Desktop; every scene already carries its
// own complete caption directly under its photograph — nothing here
// depends on this script.
//
// Enhancement (Laptop/Desktop, motion allowed only): a detail panel appears
// in the sticky column and crossfades between each scene's index, title,
// description, and benefit as its photograph scrolls through the center of
// the viewport. The now-redundant inline captions are hidden only in this
// branch — their content is still present, unchanged, in the pinned panel.
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const panel = document.querySelector<HTMLElement>("[data-scene-panel]")
const items = document.querySelectorAll<HTMLElement>("[data-scene-item]")

interface PanelFields {
  index: HTMLElement
  title: HTMLElement
  description: HTMLElement
  benefit: HTMLElement
}

function getFields(root: HTMLElement): PanelFields | null {
  const index = root.querySelector<HTMLElement>("[data-scene-panel-index]")
  const title = root.querySelector<HTMLElement>("[data-scene-panel-title]")
  const description = root.querySelector<HTMLElement>(
    "[data-scene-panel-description]",
  )
  const benefit = root.querySelector<HTMLElement>("[data-scene-panel-benefit]")

  if (!index || !title || !description || !benefit) return null

  return { index, title, description, benefit }
}

if (panel && items.length > 0) {
  const fields = getFields(panel)

  if (fields) {
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

        const captions = document.querySelectorAll<HTMLElement>(
          "[data-scene-caption]",
        )
        captions.forEach((caption: HTMLElement) => {
          caption.classList.add("hidden")
        })
        panel.hidden = false

        const applyScene = (item: HTMLElement): void => {
          fields.index.textContent = item.dataset.sceneIndex ?? ""
          fields.title.textContent = item.dataset.sceneTitle ?? ""
          fields.description.textContent = item.dataset.sceneDescription ?? ""
          fields.benefit.textContent = item.dataset.sceneBenefit ?? ""
        }

        const crossfadeTo = (item: HTMLElement): void => {
          gsap.to(panel, {
            opacity: 0,
            y: 8,
            duration: 0.18,
            ease: "power2.in",
            onComplete: () => {
              applyScene(item)
              gsap.to(panel, {
                opacity: 1,
                y: 0,
                duration: 0.32,
                ease: "power3.out",
              })
            },
          })
        }

        applyScene(items[0])

        const triggers = Array.from(items).map((item: HTMLElement) =>
          ScrollTrigger.create({
            trigger: item,
            start: "top center",
            end: "bottom center",
            onToggle: (self: ScrollTrigger) => {
              if (self.isActive) crossfadeTo(item)
            },
          }),
        )

        return () => {
          triggers.forEach((trigger: ScrollTrigger) => trigger.kill())
          captions.forEach((caption: HTMLElement) => {
            caption.classList.remove("hidden")
          })
          panel.hidden = true
          gsap.set(panel, { clearProps: "opacity,transform" })
        }
      },
    )
  }
}
