import { Swiper } from "swiper"
import { A11y, Keyboard, Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
const root = document.querySelector<HTMLElement>("[data-stories-slider]")
const prev = document.querySelector<HTMLButtonElement>("[data-story-prev]")
const next = document.querySelector<HTMLButtonElement>("[data-story-next]")
const pagination = document.querySelector<HTMLElement>(
  "[data-story-pagination]",
)
if (root && prev && next && pagination)
  new Swiper(root, {
    modules: [A11y, Keyboard, Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: true,
    observer: true,
    observeParents: true,
    keyboard: { enabled: true, onlyInViewport: true },
    navigation: { prevEl: prev, nextEl: next },
    pagination: { el: pagination, clickable: true },
    a11y: {
      prevSlideMessage: "Previous fishing story",
      nextSlideMessage: "Next fishing story",
    },
    breakpoints: { 768: { slidesPerView: 1.15, spaceBetween: 28 } },
  })
