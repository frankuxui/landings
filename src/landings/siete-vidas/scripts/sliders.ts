import { gsap } from "gsap"
import Swiper from "swiper"
import { A11y, Keyboard, Mousewheel, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

const commonModules = [A11y, Keyboard, Pagination]
const desktopViewport = window.matchMedia("(min-width: 1024px)")
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)")

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
  const bars = document.querySelectorAll<HTMLElement>(
    `[data-slider-progress="${name}"], [data-slider-progress="${name}-mobile"]`,
  )

  if (counter) counter.textContent = formatCounter(current, total)
  bars.forEach((bar: HTMLElement) => {
    if (name === "stories" && bar.dataset.sliderProgress === "stories") {
      bar.style.height = `${ratio * 100}%`
      return
    }
    bar.style.width = `${ratio * 100}%`
  })
}

function animateActiveSlide(swiper: Swiper): void {
  if (reduceMotion.matches) return

  const activeSlide = swiper.slides[swiper.activeIndex] as
    HTMLElement | undefined
  if (!activeSlide) return

  const image = activeSlide.querySelector<HTMLElement>(".story-image > div")
  const copy = activeSlide.querySelectorAll<HTMLElement>(".story-copy > *")

  gsap.fromTo(
    image,
    { clipPath: "inset(0 0 100% 0)", scale: 1.04 },
    {
      clipPath: "inset(0 0 0% 0)",
      scale: 1,
      duration: 0.7,
      ease: "power3.out",
    },
  )
  gsap.fromTo(
    copy,
    { y: 22, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5, stagger: 0.055, ease: "power3.out" },
  )
}

const storiesSlider = document.querySelector<HTMLElement>(".stories-slider")
const storiesPagination = storiesSlider?.querySelector<HTMLElement>(
  ".stories-slider-pagination",
)
let storiesSwiper: Swiper | null = null

const createStoriesSlider = (): void => {
  if (!storiesSlider || !storiesPagination) return

  storiesSwiper?.destroy(true, true)
  storiesSwiper = new Swiper(storiesSlider, {
    modules: [...commonModules, Mousewheel],
    direction: desktopViewport.matches ? "vertical" : "horizontal",
    slidesPerView: 1,
    spaceBetween: 32,
    autoHeight: false,
    observer: true,
    observeParents: true,
    resizeObserver: true,
    speed: 520,
    threshold: 8,
    keyboard: { enabled: true },
    mousewheel: { forceToAxis: true, releaseOnEdges: true },
    pagination: {
      el: storiesPagination,
      clickable: true,
      type: "bullets",
    },
    a11y: { enabled: true },
    on: {
      init(swiper: Swiper): void {
        updateProgress("stories", swiper)
        animateActiveSlide(swiper)
      },
      slideChangeTransitionStart(swiper: Swiper): void {
        updateProgress("stories", swiper)
        animateActiveSlide(swiper)
      },
    },
  })
}

createStoriesSlider()
desktopViewport.addEventListener("change", createStoriesSlider)

const expressionsSwiper = new Swiper(".expressions-slider", {
  modules: commonModules,
  slidesPerView: "auto",
  spaceBetween: 24,
  keyboard: { enabled: true },
  pagination: {
    el: ".expressions-pagination",
    clickable: true,
  },
  a11y: { enabled: true },
  on: {
    init(swiper: Swiper): void {
      updateProgress("expressions", swiper)
    },
    slideChange(swiper: Swiper): void {
      updateProgress("expressions", swiper)
    },
    progress(swiper: Swiper): void {
      updateProgress("expressions", swiper)
    },
  },
})

const gallerySwiper = new Swiper(".gallery-slider", {
  modules: commonModules,
  slidesPerView: "auto",
  spaceBetween: 24,
  keyboard: { enabled: true },
  pagination: {
    el: ".gallery-pagination",
    clickable: true,
  },
  a11y: { enabled: true },
  on: {
    init(swiper: Swiper): void {
      updateProgress("gallery", swiper)
    },
    slideChange(swiper: Swiper): void {
      updateProgress("gallery", swiper)
    },
    progress(swiper: Swiper): void {
      updateProgress("gallery", swiper)
    },
  },
})

updateProgress("expressions", expressionsSwiper)
updateProgress("gallery", gallerySwiper)
