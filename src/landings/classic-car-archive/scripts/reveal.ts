export {}

const revealElements = Array.from(
  document.querySelectorAll<HTMLElement>(".reveal"),
)

if (revealElements.length > 0) {
  document.documentElement.classList.add("js-reveal-ready")

  const observer = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add("is-visible")
        observer.unobserve(entry.target)
      })
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
  )

  revealElements.forEach((element: HTMLElement) => {
    observer.observe(element)
  })
}
