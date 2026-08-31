export {}

const revealElements = Array.from(
  document.querySelectorAll<HTMLElement>(
    "section > div, article:not(.swiper-slide), details",
  ),
).filter((element: HTMLElement) => !element.closest(".swiper"))
document.documentElement.classList.add("js-reveal-ready")

const observer = new IntersectionObserver(
  (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (!entry.isIntersecting) return
      entry.target.classList.add("is-visible")
      observer.unobserve(entry.target)
    })
  },
  { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
)

revealElements.forEach((element: HTMLElement) => {
  element.classList.add("reveal")
  observer.observe(element)
})
