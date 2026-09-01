import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)")

if (!reduceMotion.matches) {
  const media = gsap.matchMedia()

  // ── HERO ───────────────────────────────────────────────────────────────────
  // Three visual states, two independent timelines:
  //   A (load)   — every photo at its outer/home position, fully visible
  //   ↓ introTimeline (automatic, ~1.1s, NOT scroll-linked)
  //   B (compact)— secondaries converge slightly toward the central photo
  //   ↓ scrollTimeline (pin + scrub, starts from B's exact values)
  //   C (spread) — secondaries drift back out, a touch wider than A, clamped
  //                inside a per-breakpoint safe area. The hero stays pinned
  //                until this finishes; only then does the page scroll on.
  media.add(
    {
      desktop: "(min-width: 1024px)",
      tablet: "(min-width: 768px) and (max-width: 1023px)",
      mobile: "(max-width: 767px)",
    },
    (context: gsap.Context) => {
      const conditions = context.conditions as {
        desktop: boolean
        tablet: boolean
        mobile: boolean
      }
      const hero = document.querySelector<HTMLElement>("[data-hero]")
      const collage = document.querySelector<HTMLElement>("[data-hero-collage]")
      const main = document.querySelector<HTMLElement>(".hero-main")
      if (!hero || !collage || !main) return

      const activeCount = conditions.desktop ? 4 : conditions.tablet ? 3 : 2
      const cards = Array.from(
        document.querySelectorAll<HTMLElement>(".hero-card"),
      )
        .filter((card: HTMLElement) => card.offsetParent !== null)
        .slice(0, activeCount)
      if (cards.length === 0) return

      const safeEdge = conditions.desktop ? 56 : conditions.tablet ? 40 : 20
      const wish = conditions.desktop ? 110 : conditions.tablet ? 64 : 30
      const rotations = [-3, 2.5, 3, -2.5]

      // Signed distance (transform-free) from a card's laid-out centre to the
      // collage centre. Positive = card sits left of / above centre.
      const toCentre = (card: HTMLElement, axis: "x" | "y"): number =>
        axis === "x"
          ? collage.offsetWidth / 2 - (card.offsetLeft + card.offsetWidth / 2)
          : collage.offsetHeight / 2 - (card.offsetTop + card.offsetHeight / 2)

      // State B: 42% of the way in toward the centre.
      const compact = (card: HTMLElement, axis: "x" | "y"): number =>
        toCentre(card, axis) * 0.42

      // State C: push outward from the home corner, clamped so the card can
      // never cross the breakpoint's safe area (never relies on overflow:hidden).
      const spread = (card: HTMLElement, axis: "x" | "y"): number => {
        const centre = toCentre(card, axis)
        if (Math.abs(centre) < 1) return 0
        const dir = centre > 0 ? -1 : 1
        const box = collage.getBoundingClientRect()
        const room =
          axis === "x"
            ? dir < 0
              ? box.left - safeEdge
              : window.innerWidth - box.right - safeEdge
            : dir < 0
              ? box.top - safeEdge
              : window.innerHeight - box.bottom - safeEdge
        return dir * Math.max(0, Math.min(wish, room))
      }

      // Step 2 + 3: scroll-driven expansion B → C, hero pinned until progress 1.
      const buildScrollTimeline = (): void => {
        const scrollTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "+=135%",
            scrub: 1,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })
        cards.forEach((card: HTMLElement, index: number) => {
          scrollTimeline.fromTo(
            card,
            {
              x: () => compact(card, "x"),
              y: () => compact(card, "y"),
              scale: 0.92,
              rotate: 0,
              transformOrigin: "center center",
            },
            {
              x: () => spread(card, "x"),
              y: () => spread(card, "y"),
              scale: 1,
              rotate: rotations[index] ?? 0,
              ease: "none",
              immediateRender: false,
            },
            0,
          )
        })
        scrollTimeline.to(main, { scale: 1.03, y: -8, ease: "none" }, 0)
        ScrollTrigger.refresh()
      }

      // Step 1: automatic intro A → B. If the visitor has already scrolled
      // (deep link, refresh mid-page, impatient scroll), skip straight to B.
      if (window.scrollY < 4) {
        const introTimeline = gsap.timeline({
          onComplete: buildScrollTimeline,
        })
        introTimeline
          .to(cards, {
            x: (_i: number, target: HTMLElement) => compact(target, "x"),
            y: (_i: number, target: HTMLElement) => compact(target, "y"),
            scale: 0.92,
            duration: 1.1,
            ease: "power3.out",
            stagger: 0.07,
          })
          .to(main, { scale: 0.98, duration: 1.1, ease: "power3.out" }, 0)
      } else {
        gsap.set(cards, {
          x: (_i: number, target: HTMLElement) => compact(target, "x"),
          y: (_i: number, target: HTMLElement) => compact(target, "y"),
          scale: 0.92,
        })
        gsap.set(main, { scale: 0.98 })
        buildScrollTimeline()
      }
    },
  )

  // Recompute once web fonts settle (the hero heading height feeds the collage
  // position and therefore the pin range).
  document.fonts?.ready.then(() => ScrollTrigger.refresh())

  media.add("(min-width: 1024px)", () => {
    const horizontalSection = document.querySelector<HTMLElement>(
      "[data-horizontal-section]",
    )
    const horizontalTrack = document.querySelector<HTMLElement>(
      "[data-horizontal-track]",
    )

    if (horizontalSection && horizontalTrack) {
      const distance = Math.max(
        0,
        horizontalTrack.scrollWidth - document.documentElement.clientWidth,
      )
      const track = gsap.to(horizontalTrack, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: horizontalSection,
          start: "top top",
          end: () => `+=${distance}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      })

      // Internal parallax: as each panel crosses the viewport its photo drifts
      // vertically while the title and metadata slide horizontally at their own
      // rates, adding depth without large moves.
      const panels = gsap.utils.toArray<HTMLElement>("[data-horizontal-panel]")
      panels.forEach((panel: HTMLElement) => {
        const panelTrigger = {
          trigger: panel,
          containerAnimation: track,
          start: "left right",
          end: "right left",
          scrub: true,
        } as const

        const img = panel.querySelector<HTMLElement>("img")
        if (img) {
          gsap.fromTo(
            img,
            { yPercent: -2.5 },
            { yPercent: 2.5, ease: "none", scrollTrigger: panelTrigger },
          )
        }

        const textLayers: [string, number][] = [
          ['[data-parallax="title"]', 12],
          ['[data-parallax="meta"]', 5],
        ]
        textLayers.forEach(([selector, shift]: [string, number]) => {
          const layer = panel.querySelector<HTMLElement>(selector)
          if (!layer) return
          gsap.fromTo(
            layer,
            { xPercent: -shift },
            { xPercent: shift, ease: "none", scrollTrigger: panelTrigger },
          )
        })
      })
    }
  })

  gsap.utils
    .toArray<HTMLElement>("[data-manifesto-line] span")
    .forEach((line: HTMLElement) => {
      gsap.from(line, {
        yPercent: 110,
        opacity: 0,
        filter: "blur(8px)",
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: line,
          start: "top 82%",
        },
      })
    })

  const galleryGrid = document.querySelector<HTMLElement>("[data-gallery]")
  if (galleryGrid) {
    gsap.from("[data-gallery-item]", {
      opacity: 0,
      y: 28,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.06,
      scrollTrigger: { trigger: galleryGrid, start: "top 82%" },
    })
  }

  gsap.from("[data-community] > *", {
    opacity: 0,
    y: 80,
    rotate: () => gsap.utils.random(-8, 8),
    stagger: 0.12,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "[data-community]",
      start: "top 72%",
    },
  })
}

const tabButtons = Array.from(
  document.querySelectorAll<HTMLButtonElement>("[data-tab-button]"),
)
const tabIndicator = document.querySelector<HTMLElement>("[data-tab-indicator]")
let activeTab = tabButtons[0]?.dataset.tabButton

function moveTabIndicator(button: HTMLButtonElement): void {
  if (!tabIndicator) return
  gsap.to(tabIndicator, {
    x: button.offsetLeft,
    y: button.offsetTop,
    width: button.offsetWidth,
    height: button.offsetHeight,
    duration: 0.32,
    ease: "power3.out",
  })
}

function activateTab(id: string, button: HTMLButtonElement): void {
  if (id === activeTab) return
  const oldPanel = document.querySelector<HTMLElement>(
    `[data-tab-panel="${activeTab}"]`,
  )
  const oldCopy = document.querySelector<HTMLElement>(
    `[data-tab-copy="${activeTab}"]`,
  )
  const newPanel = document.querySelector<HTMLElement>(
    `[data-tab-panel="${id}"]`,
  )
  const newCopy = document.querySelector<HTMLElement>(`[data-tab-copy="${id}"]`)
  if (!newPanel || !newCopy) return

  tabButtons.forEach((tabButton: HTMLButtonElement) => {
    const selected = tabButton === button
    tabButton.dataset.active = String(selected)
    tabButton.setAttribute("aria-selected", String(selected))
  })
  moveTabIndicator(button)
  gsap.to([oldPanel, oldCopy].filter(Boolean), {
    opacity: 0,
    y: -18,
    scale: 0.98,
    duration: 0.24,
    ease: "power2.in",
  })
  gsap.fromTo(
    [newPanel, newCopy],
    {
      opacity: 0,
      y: 24,
      scale: 1.02,
      clipPath: "inset(8% 0% 8% 0% round 2rem)",
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      clipPath: "inset(0% 0% 0% 0% round 2rem)",
      duration: 0.42,
      ease: "power3.out",
    },
  )
  activeTab = id
}

tabButtons.forEach((button: HTMLButtonElement) => {
  button.addEventListener("click", () => {
    const id = button.dataset.tabButton
    if (id) activateTab(id, button)
  })
})

if (tabButtons[0]) moveTabIndicator(tabButtons[0])

const moodButtons = Array.from(
  document.querySelectorAll<HTMLButtonElement>("[data-mood-button]"),
)
const moodSection = document.querySelector<HTMLElement>("[data-mood-section]")
let activeMood = moodButtons[0]?.dataset.moodButton

function activateMood(id: string, button: HTMLButtonElement): void {
  if (id === activeMood) return
  if (moodSection) moodSection.dataset.mood = id
  const oldPanel = document.querySelector<HTMLElement>(
    `[data-mood-panel="${activeMood}"]`,
  )
  const oldCopy = document.querySelector<HTMLElement>(
    `[data-mood-copy="${activeMood}"]`,
  )
  const newPanel = document.querySelector<HTMLElement>(
    `[data-mood-panel="${id}"]`,
  )
  const newCopy = document.querySelector<HTMLElement>(
    `[data-mood-copy="${id}"]`,
  )
  if (!newPanel || !newCopy) return

  moodButtons.forEach((moodButton: HTMLButtonElement) => {
    const selected = moodButton === button
    moodButton.dataset.active = String(selected)
    moodButton.setAttribute("aria-selected", String(selected))
  })
  gsap.to([oldPanel, oldCopy].filter(Boolean), {
    opacity: 0,
    x: -20,
    duration: 0.25,
  })
  gsap.fromTo(
    [newPanel, newCopy],
    { opacity: 0, x: 26 },
    { opacity: 1, x: 0, duration: 0.42, ease: "power3.out" },
  )
  activeMood = id
}

moodButtons.forEach((button: HTMLButtonElement) => {
  const activate = (): void => {
    const id = button.dataset.moodButton
    if (id) activateMood(id, button)
  }
  button.addEventListener("click", activate)
  button.addEventListener("mouseenter", activate)
})

const rememberTabs = Array.from(
  document.querySelectorAll<HTMLButtonElement>("[data-remember-tab]"),
)
let activeReminder = 0

function activateReminder(index: number): void {
  if (index === activeReminder) return
  const oldPanel = document.querySelector<HTMLElement>(
    `[data-remember-panel="${activeReminder}"]`,
  )
  const newPanel = document.querySelector<HTMLElement>(
    `[data-remember-panel="${index}"]`,
  )
  if (!newPanel) return

  rememberTabs.forEach((tab: HTMLButtonElement, tabIndex: number) => {
    const selected = tabIndex === index
    tab.dataset.active = String(selected)
    tab.setAttribute("aria-pressed", String(selected))
  })

  // Pure CSS transition (declared on the panel) so the swap never depends on an
  // animation ticker being live.
  if (oldPanel) {
    oldPanel.classList.add("pointer-events-none", "translate-y-3", "opacity-0")
  }
  newPanel.classList.remove("pointer-events-none", "translate-y-3", "opacity-0")
  activeReminder = index
}

rememberTabs.forEach((tab: HTMLButtonElement, index: number) => {
  tab.addEventListener("click", () => activateReminder(index))
})

const momentShuffle = document.querySelector<HTMLButtonElement>(
  "[data-moment-shuffle]",
)
const momentText = document.querySelector<HTMLElement>("[data-moment-text]")
const momentIndex = document.querySelector<HTMLElement>("[data-moment-index]")
const momentIcon = document.querySelector<SVGElement>("[data-moment-icon]")
const momentPromptEls = Array.from(
  document.querySelectorAll<HTMLLIElement>("[data-moment-prompts] li"),
)

if (momentShuffle && momentText && momentIndex && momentPromptEls.length > 1) {
  const prompts = momentPromptEls.map(
    (li: HTMLLIElement): string => li.textContent ?? "",
  )
  const pad = (n: number): string => String(n + 1).padStart(2, "0")
  let current = 0

  const showPrompt = (next: number): void => {
    current = next
    momentText.textContent = prompts[next]
    momentIndex.textContent = pad(next)
  }

  let spins = 0

  const shuffle = (): void => {
    let next = current
    while (next === current) {
      next = Math.floor(Math.random() * prompts.length)
    }

    if (reduceMotion.matches) {
      showPrompt(next)
      return
    }

    // CSS transition (declared on the element) drives the fade so the swap is
    // never stuck if an animation ticker is asleep; the icon spin is decorative.
    if (momentIcon) {
      spins += 180
      momentIcon.style.transform = `rotate(${spins}deg)`
    }
    momentText.classList.add("-translate-y-2", "opacity-0")
    window.setTimeout(() => {
      showPrompt(next)
      momentText.classList.remove("-translate-y-2", "opacity-0")
    }, 200)
  }

  momentShuffle.addEventListener("click", shuffle)
}
