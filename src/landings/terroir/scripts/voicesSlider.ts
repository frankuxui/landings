// Terroir — Swiper Core initialization for the voices/testimonials section.
import { Swiper } from "swiper"
import { A11y, Keyboard, Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

const root = document.querySelector<HTMLElement>(".voices-slider")
const prevButton = document.querySelector<HTMLButtonElement>(
  ".voices-slider-prev",
)
const nextButton = document.querySelector<HTMLButtonElement>(
  ".voices-slider-next",
)
const paginationEl = document.querySelector<HTMLElement>(
  ".voices-slider-pagination",
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
      prevSlideMessage: "Testimonio anterior",
      nextSlideMessage: "Siguiente testimonio",
      paginationBulletMessage: "Ir al testimonio {{index}}",
    },
    pagination: {
      el: paginationEl,
      clickable: true,
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
