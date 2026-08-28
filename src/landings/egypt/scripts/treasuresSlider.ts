// Egypt — Swiper Core initialization for the Treasures gallery.
import { Swiper } from "swiper"
import { A11y, Keyboard, Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

const root = document.querySelector<HTMLElement>(".treasures-slider")
const prevButton = document.querySelector<HTMLButtonElement>(
  ".treasures-slider-prev",
)
const nextButton = document.querySelector<HTMLButtonElement>(
  ".treasures-slider-next",
)
const paginationEl = document.querySelector<HTMLElement>(
  ".treasures-slider-pagination",
)

if (root && prevButton && nextButton && paginationEl) {
  const swiper = new Swiper(root, {
    modules: [Navigation, Pagination, Keyboard, A11y],
    slidesPerView: 1,
    spaceBetween: 24,
    grabCursor: true,
    watchOverflow: true,
    observer: true,
    observeParents: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    a11y: {
      prevSlideMessage: "Previous relic",
      nextSlideMessage: "Next relic",
      paginationBulletMessage: "Go to relic {{index}}",
    },
    pagination: {
      el: paginationEl,
      clickable: true,
    },
    breakpoints: {
      640: { slidesPerView: 1.2, spaceBetween: 24 },
      768: { slidesPerView: 1.5, spaceBetween: 32 },
      1024: { slidesPerView: 2, spaceBetween: 40 },
    },
  })

  const updateNavState = (): void => {
    prevButton.disabled = swiper.isBeginning
    prevButton.setAttribute("aria-disabled", String(swiper.isBeginning))
    nextButton.disabled = swiper.isEnd
    nextButton.setAttribute("aria-disabled", String(swiper.isEnd))
  }

  prevButton.addEventListener("click", () => swiper.slidePrev())
  nextButton.addEventListener("click", () => swiper.slideNext())

  swiper.on("slideChange", updateNavState)
  swiper.on("reachBeginning", updateNavState)
  swiper.on("reachEnd", updateNavState)
  swiper.on("resize", updateNavState)
  updateNavState()
}
