import { Swiper } from "swiper"
import { A11y, Keyboard, Navigation, Pagination } from "swiper/modules"
import gsap from "gsap"
import "swiper/css"
import "swiper/css/pagination"

export {}

function setupSlider(
  rootSelector: string,
  prevSelector: string,
  nextSelector: string,
  progressSelector: string,
  counterSelector: string,
): void {
  const root = document.querySelector<HTMLElement>(rootSelector)
  const prevButton = document.querySelector<HTMLButtonElement>(prevSelector)
  const nextButton = document.querySelector<HTMLButtonElement>(nextSelector)
  const progress = document.querySelector<HTMLElement>(progressSelector)
  const counter = document.querySelector<HTMLElement>(counterSelector)
  if (!root || !prevButton || !nextButton || !progress || !counter) return

  const swiper = new Swiper(root, {
    modules: [Navigation, Pagination, Keyboard, A11y],
    slidesPerView: "auto",
    spaceBetween: 18,
    grabCursor: true,
    watchOverflow: true,
    keyboard: { enabled: true, onlyInViewport: true },
    a11y: {
      prevSlideMessage: "Previous frame",
      nextSlideMessage: "Next frame",
    },
    breakpoints: {
      768: { spaceBetween: 24 },
      1280: { spaceBetween: 32 },
    },
  })

  const update = (): void => {
    const total = swiper.slides.length
    const current = swiper.realIndex + 1
    const percent = total <= 1 ? 100 : (current / total) * 100
    progress.style.transform = `scaleX(${percent / 100})`
    counter.textContent = `${String(current).padStart(2, "0")} / ${String(total).padStart(2, "0")}`
    prevButton.disabled = swiper.isBeginning
    nextButton.disabled = swiper.isEnd

    const activeSlide = swiper.slides[swiper.activeIndex] as
      HTMLElement | undefined
    if (!activeSlide) return
    const image = activeSlide.querySelector<HTMLElement>("[data-slide-image]")
    const number = activeSlide.querySelector<HTMLElement>("[data-slide-number]")
    const title = activeSlide.querySelector<HTMLElement>("[data-slide-title]")
    const copy = activeSlide.querySelector<HTMLElement>("[data-slide-copy]")
    const credit = activeSlide.querySelector<HTMLElement>("figcaption > p")

    gsap.fromTo(
      image,
      { clipPath: "inset(0 100% 0 0)", scale: 1.04 },
      {
        clipPath: "inset(0 0% 0 0)",
        scale: 1,
        duration: 0.75,
        ease: "power3.out",
      },
    )
    gsap.fromTo(
      number,
      { xPercent: -40, scale: 0.86, opacity: 0 },
      { xPercent: 0, scale: 1, opacity: 1, duration: 0.55, ease: "power3.out" },
    )
    gsap.fromTo(
      title,
      { clipPath: "inset(100% 0 0 0)", yPercent: 35 },
      {
        clipPath: "inset(0 0 0 0)",
        yPercent: 0,
        duration: 0.6,
        ease: "power3.out",
      },
    )
    gsap.fromTo(
      [copy, credit].filter(
        (element: HTMLElement | null): element is HTMLElement =>
          Boolean(element),
      ),
      { y: 16, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.45, stagger: 0.08, ease: "power2.out" },
    )
  }

  prevButton.addEventListener("click", () => swiper.slidePrev())
  nextButton.addEventListener("click", () => swiper.slideNext())
  swiper.on("slideChange", update)
  swiper.on("resize", update)
  update()
}

setupSlider(
  "[data-voices-slider]",
  "[data-voices-prev]",
  "[data-voices-next]",
  "[data-voices-progress]",
  "[data-voices-counter]",
)

setupSlider(
  "[data-island-slider]",
  "[data-island-prev]",
  "[data-island-next]",
  "[data-island-progress]",
  "[data-island-counter]",
)
