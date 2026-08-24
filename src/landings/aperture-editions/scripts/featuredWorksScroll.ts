// Aperture Editions — GSAP scroll-driven "Featured Works" panel.
//
// Baseline (works with zero JS, Mobile/Tablet, or Desktop with
// `prefers-reduced-motion: reduce`): the left column's intro text sits
// `lg:sticky` beside a normally-scrolling list on the right; every work
// already carries its own complete caption directly under its photograph
// (see FeaturedWorks.astro's `data-work-caption` blocks) — nothing here
// depends on this script.
//
// Enhancement (Laptop/Desktop, motion allowed only): a dynamic detail panel
// appears in the sticky column and crossfades between each work's title,
// technique, price, and description as its photograph scrolls through the
// center of the viewport. The now-redundant per-item captions on the right
// are hidden only in this branch — their content is still present,
// unchanged, inside the pinned panel, so nothing is lost from the
// accessibility tree, only relocated.
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const panel = document.querySelector<HTMLElement>("[data-work-panel]")
const items = document.querySelectorAll<HTMLElement>("[data-work-item]")

interface PanelFields {
  index: HTMLElement
  title: HTMLElement
  photographer: HTMLElement
  year: HTMLElement
  location: HTMLElement
  technique: HTMLElement
  edition: HTMLElement
  description: HTMLElement
  price: HTMLElement
}

function getFields(root: HTMLElement): PanelFields | null {
  const index = root.querySelector<HTMLElement>("[data-work-panel-index]")
  const title = root.querySelector<HTMLElement>("[data-work-panel-title]")
  const photographer = root.querySelector<HTMLElement>(
    "[data-work-panel-photographer]",
  )
  const year = root.querySelector<HTMLElement>("[data-work-panel-year]")
  const location = root.querySelector<HTMLElement>(
    "[data-work-panel-location]",
  )
  const technique = root.querySelector<HTMLElement>(
    "[data-work-panel-technique]",
  )
  const edition = root.querySelector<HTMLElement>("[data-work-panel-edition]")
  const description = root.querySelector<HTMLElement>(
    "[data-work-panel-description]",
  )
  const price = root.querySelector<HTMLElement>("[data-work-panel-price]")

  if (
    !index ||
    !title ||
    !photographer ||
    !year ||
    !location ||
    !technique ||
    !edition ||
    !description ||
    !price
  ) {
    return null
  }

  return {
    index,
    title,
    photographer,
    year,
    location,
    technique,
    edition,
    description,
    price,
  }
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
          "[data-work-caption]",
        )
        captions.forEach((caption: HTMLElement) => {
          caption.classList.add("hidden")
        })
        panel.hidden = false

        const applyWork = (item: HTMLElement): void => {
          const total = items.length
          const index = Number(item.dataset.workIndex ?? "0")
          fields.index.textContent = `${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`
          fields.title.textContent = item.dataset.title ?? ""
          fields.photographer.textContent = item.dataset.photographer ?? ""
          fields.year.textContent = item.dataset.year ?? ""
          fields.location.textContent = item.dataset.location ?? ""
          fields.technique.textContent = item.dataset.technique ?? ""
          fields.edition.textContent = item.dataset.edition ?? ""
          fields.description.textContent = item.dataset.description ?? ""
          fields.price.textContent = item.dataset.price ?? ""
        }

        const crossfadeTo = (item: HTMLElement): void => {
          gsap.to(panel, {
            opacity: 0,
            y: 8,
            duration: 0.18,
            ease: "power2.in",
            onComplete: () => {
              applyWork(item)
              gsap.to(panel, {
                opacity: 1,
                y: 0,
                duration: 0.32,
                ease: "power3.out",
              })
            },
          })
        }

        applyWork(items[0])

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
