export {}

const revealItems = document.querySelectorAll<HTMLElement>(
  "section > div, .module-card, .timeline-item, .field-panel",
)

if (revealItems.length > 0) {
  document.documentElement.classList.add("js-reveal-ready")
  revealItems.forEach((item: HTMLElement) => item.classList.add("reveal"))

  const observer = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add("is-visible")
        observer.unobserve(entry.target)
      })
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
  )

  revealItems.forEach((item: HTMLElement) => observer.observe(item))
}
