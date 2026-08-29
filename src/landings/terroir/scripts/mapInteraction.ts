// Terroir — interactive wine map region switching.
import gsap from "gsap"

export {}

const mapSection = document.querySelector<HTMLElement>("[data-map-section]")

if (mapSection) {
  const buttons = mapSection.querySelectorAll<HTMLButtonElement>(
    "[data-region-button]",
  )
  const markers = mapSection.querySelectorAll<HTMLButtonElement>(
    "[data-region-marker]",
  )
  const panels = mapSection.querySelectorAll<HTMLElement>("[data-region-panel]")
  const photos = mapSection.querySelectorAll<HTMLImageElement>(
    "[data-region-photo]",
  )
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches
  let activeRegion = ""

  const activate = (regionId: string): void => {
    if (regionId === activeRegion) return
    activeRegion = regionId

    buttons.forEach((btn: HTMLButtonElement) => {
      const isActive = btn.dataset.regionButton === regionId
      btn.setAttribute("aria-pressed", String(isActive))
      btn.classList.toggle("is-active", isActive)
    })

    markers.forEach((marker: HTMLButtonElement) => {
      const isActive = marker.dataset.regionMarker === regionId
      marker.setAttribute("aria-pressed", String(isActive))
      marker.classList.toggle("is-active", isActive)
    })

    panels.forEach((panel: HTMLElement) => {
      const isActive = panel.dataset.regionPanel === regionId
      panel.setAttribute("aria-hidden", String(!isActive))
      panel.classList.toggle("is-active", isActive)

      if (prefersReducedMotion) {
        panel.classList.toggle("pointer-events-none", !isActive)
        panel.style.opacity = isActive ? "1" : "0"
        panel.style.transform = "none"
        return
      }

      gsap.to(panel, {
        autoAlpha: isActive ? 1 : 0,
        y: isActive ? 0 : 18,
        duration: isActive ? 0.55 : 0.25,
        ease: "power2.out",
        onStart: () => {
          panel.classList.toggle("pointer-events-none", !isActive)
        },
      })
    })

    photos.forEach((photo: HTMLImageElement) => {
      const isActive = photo.dataset.regionPhoto === regionId

      if (prefersReducedMotion) {
        photo.style.opacity = isActive ? "0.2" : "0"
        photo.style.transform = "none"
        return
      }

      gsap.to(photo, {
        opacity: isActive ? 0.2 : 0,
        scale: isActive ? 1.05 : 1,
        duration: 0.7,
        ease: "power2.out",
      })
    })
  }

  buttons.forEach((btn: HTMLButtonElement) => {
    btn.addEventListener("click", () => {
      const regionId = btn.dataset.regionButton
      if (regionId) activate(regionId)
    })
  })

  markers.forEach((marker: HTMLButtonElement) => {
    marker.addEventListener("click", () => {
      const regionId = marker.dataset.regionMarker
      if (regionId) activate(regionId)
    })
  })

  // Activate first region by default
  const firstButton = buttons[0]
  if (firstButton?.dataset.regionButton) {
    activeRegion = ""
    activate(firstButton.dataset.regionButton)
  }
}
