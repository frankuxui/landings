// Terroir — Swiper Core initialization for the old wines gallery (Section 13).
import { Swiper } from "swiper"
import { A11y, Keyboard, Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

const root = document.querySelector<HTMLElement>(".wine-slider")
const prevButton =
  document.querySelector<HTMLButtonElement>(".wine-slider-prev")
const nextButton =
  document.querySelector<HTMLButtonElement>(".wine-slider-next")
const paginationEl = document.querySelector<HTMLElement>(
  ".wine-slider-progress",
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
      prevSlideMessage: "Vino anterior",
      nextSlideMessage: "Siguiente vino",
      paginationBulletMessage: "Ir al vino {{index}}",
    },
    pagination: {
      el: paginationEl,
      type: "progressbar",
    },
    breakpoints: {
      640: { slidesPerView: 1.08, spaceBetween: 24 },
      768: { slidesPerView: 1.2, spaceBetween: 28 },
      1024: { slidesPerView: 1.55, spaceBetween: 32 },
      1400: { slidesPerView: 2, spaceBetween: 36 },
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
