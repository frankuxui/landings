import gsap from "gsap"

export {}

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")
const header = document.querySelector<HTMLElement>("[data-header]")

if (header && !reduced.matches)
  gsap.from(header, { yPercent: -100, duration: 0.9, ease: "power3.out" })

const navLinks = document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]")
navLinks.forEach((link: HTMLAnchorElement): void => {
  const underline = link.querySelector<HTMLElement>("[data-nav-underline]")
  if (!underline) return
  gsap.set(underline, { transformOrigin: "left center" })
  if (reduced.matches) return
  const grow = gsap.quickTo(underline, "scaleX", {
    duration: 0.35,
    ease: "power2.out",
  })
  const expand = (): void => {
    grow(1)
  }
  const shrink = (): void => {
    grow(0)
  }
  link.addEventListener("mouseenter", expand)
  link.addEventListener("mouseleave", shrink)
  link.addEventListener("focus", expand)
  link.addEventListener("blur", shrink)
})
