import { gsap } from "gsap"
import Swiper from "swiper"
import {
  A11y,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

export {}

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
const desktop = window.matchMedia("(min-width: 1024px)")

function formatCounter(index: number, total: number): string {
  return `${String(index + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`
}

function updateProgress(name: string, swiper: Swiper): void {
  const total = swiper.slides.length
  const current = swiper.realIndex
  const ratio = total <= 1 ? 1 : (current + 1) / total
  const counter = document.querySelector<HTMLElement>(
    `[data-slider-counter="${name}"]`,
  )
  const progress = document.querySelector<HTMLElement>(
    `[data-slider-progress="${name}"]`,
  )
  if (counter) counter.textContent = formatCounter(current, total)
  if (progress) progress.style.width = `${ratio * 100}%`
}

function animateSlide(swiper: Swiper): void {
  if (reduceMotion.matches) return
  const slide = swiper.slides[swiper.activeIndex] as HTMLElement | undefined
  if (!slide) return
  const image = slide.querySelector<HTMLElement>("figure > div")
  const copy = slide.querySelectorAll<HTMLElement>("h3, p")
  if (image) {
    gsap.fromTo(
      image,
      { clipPath: "inset(0 0 100% 0)", scale: 1.04 },
      {
        clipPath: "inset(0 0 0% 0)",
        scale: 1,
        duration: 0.65,
        ease: "power3.out",
      },
    )
  }
  if (copy.length > 0) {
    gsap.fromTo(
      copy,
      { y: 18, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.42,
        stagger: 0.04,
        ease: "power3.out",
      },
    )
  }
}

let storiesSwiper: Swiper | null = null

function createStories(): void {
  const slider = document.querySelector<HTMLElement>(".stories-slider")
  const pagination = document.querySelector<HTMLElement>(".stories-pagination")
  if (!slider || !pagination) return
  storiesSwiper?.destroy(true, true)
  storiesSwiper = new Swiper(slider, {
    modules: [A11y, Keyboard, Mousewheel, Pagination],
    direction: desktop.matches ? "vertical" : "horizontal",
    slidesPerView: 1,
    spaceBetween: 24,
    speed: 560,
    keyboard: { enabled: true },
    mousewheel: { forceToAxis: true, releaseOnEdges: true },
    pagination: { el: pagination, clickable: true },
    a11y: { enabled: true },
    on: {
      init(swiper: Swiper): void {
        updateProgress("stories", swiper)
        animateSlide(swiper)
      },
      slideChangeTransitionStart(swiper: Swiper): void {
        updateProgress("stories", swiper)
        animateSlide(swiper)
      },
    },
  })
}

createStories()
desktop.addEventListener("change", createStories)

const archive = new Swiper(".archive-slider", {
  modules: [A11y, Keyboard, Navigation],
  slidesPerView: "auto",
  spaceBetween: 24,
  speed: 580,
  keyboard: { enabled: true },
  navigation: {
    nextEl: "[data-archive-next]",
    prevEl: "[data-archive-prev]",
  },
  a11y: { enabled: true },
  on: {
    init(swiper: Swiper): void {
      updateProgress("archive", swiper)
      animateSlide(swiper)
    },
    slideChangeTransitionStart(swiper: Swiper): void {
      updateProgress("archive", swiper)
      animateSlide(swiper)
    },
    progress(swiper: Swiper): void {
      updateProgress("archive", swiper)
    },
  },
})

updateProgress("archive", archive)
