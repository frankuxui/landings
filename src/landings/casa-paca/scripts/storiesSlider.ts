import { Swiper } from "swiper"
import type { Swiper as SwiperInstance } from "swiper"
import { A11y, Keyboard, Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
const root = document.querySelector<HTMLElement>("[data-stories-slider]")
const prev = document.querySelector<HTMLButtonElement>("[data-story-prev]")
const next = document.querySelector<HTMLButtonElement>("[data-story-next]")
const pagination = document.querySelector<HTMLElement>(
  "[data-story-pagination]",
)
const counter = document.querySelector<HTMLElement>("[data-story-counter]")
const updateCounter = (activeIndex: number, total: number): void => {
  if (!counter) return
  counter.textContent = `${String(activeIndex + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`
}
if (root && prev && next && pagination)
  new Swiper(root, {
    modules: [A11y, Keyboard, Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 0,
    grabCursor: true,
    observer: true,
    observeParents: true,
    keyboard: { enabled: true, onlyInViewport: true },
    navigation: { prevEl: prev, nextEl: next },
    pagination: { el: pagination, clickable: true },
    a11y: {
      prevSlideMessage: "Historia anterior",
      nextSlideMessage: "Historia siguiente",
    },
    on: {
      init: (swiper: SwiperInstance): void =>
        updateCounter(swiper.activeIndex, swiper.slides.length),
      slideChange: (swiper: SwiperInstance): void =>
        updateCounter(swiper.activeIndex, swiper.slides.length),
    },
  })
