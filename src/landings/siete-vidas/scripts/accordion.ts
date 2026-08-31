import { gsap } from "gsap"

export {}

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)")

document
  .querySelectorAll<HTMLDetailsElement>("[data-accordion]")
  .forEach((details: HTMLDetailsElement) => {
    const summary = details.querySelector<HTMLElement>("summary")
    const content = details.querySelector<HTMLElement>(
      "[data-accordion-content]",
    )
    const indicator = details.querySelector<HTMLElement>(
      "[data-accordion-indicator]",
    )

    if (!summary || !content || !indicator) return

    gsap.set(content, { height: 0, opacity: 0, y: 10 })

    summary.addEventListener("click", (event: MouseEvent) => {
      event.preventDefault()
      const isOpen = details.open

      if (isOpen) {
        indicator.textContent = "+"
        if (reduceMotion.matches) {
          details.open = false
          return
        }
        gsap.to(content, {
          height: 0,
          opacity: 0,
          y: 10,
          duration: 0.34,
          ease: "power2.inOut",
          onComplete: () => {
            details.open = false
          },
        })
        gsap.to(indicator, { rotate: 0, duration: 0.28, ease: "power2.out" })
        return
      }

      details.open = true
      indicator.textContent = "-"
      if (reduceMotion.matches) {
        gsap.set(content, { height: "auto", opacity: 1, y: 0 })
        return
      }
      gsap.fromTo(
        content,
        { height: 0, opacity: 0, y: 10 },
        {
          height: "auto",
          opacity: 1,
          y: 0,
          duration: 0.42,
          ease: "power3.out",
        },
      )
      gsap.to(indicator, { rotate: 180, duration: 0.34, ease: "power3.out" })
    })
  })
