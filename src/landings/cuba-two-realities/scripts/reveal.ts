export {}

document.documentElement.classList.add("js-reveal-ready")

const observer = new IntersectionObserver(
  (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (!entry.isIntersecting) return
      entry.target.classList.add("is-visible")
      observer.unobserve(entry.target)
    })
  },
  { threshold: 0.18 },
)

document
  .querySelectorAll<HTMLElement>(".reveal")
  .forEach((element: HTMLElement) => {
    observer.observe(element)
  })
