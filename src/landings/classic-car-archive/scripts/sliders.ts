import { Swiper } from "swiper"
import { A11y, Keyboard, Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

export {}

const wireSlider = (
  rootSelector: string,
  prevSelector: string,
  nextSelector: string,
  paginationSelector: string,
  label: string,
): void => {
  const root = document.querySelector<HTMLElement>(rootSelector)
  const prevButton = document.querySelector<HTMLButtonElement>(prevSelector)
  const nextButton = document.querySelector<HTMLButtonElement>(nextSelector)
  const paginationEl = document.querySelector<HTMLElement>(paginationSelector)

  if (!root || !prevButton || !nextButton || !paginationEl) return

  const swiper = new Swiper(root, {
    modules: [Navigation, Pagination, Keyboard, A11y],
    slidesPerView: "auto",
    spaceBetween: 20,
    grabCursor: true,
    watchOverflow: true,
    observer: true,
    observeParents: true,
    keyboard: { enabled: true, onlyInViewport: true },
    a11y: {
      prevSlideMessage: `Previous ${label}`,
      nextSlideMessage: `Next ${label}`,
      paginationBulletMessage: `Go to ${label} {{index}}`,
    },
    pagination: { el: paginationEl, clickable: true },
    breakpoints: {
      640: { spaceBetween: 24 },
      1024: { spaceBetween: 32 },
    },
  })

  const updateNavState = (): void => {
    prevButton.disabled = swiper.isBeginning
    nextButton.disabled = swiper.isEnd
    prevButton.setAttribute("aria-disabled", String(swiper.isBeginning))
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

wireSlider(
  "[data-featured-slider]",
  "[data-featured-prev]",
  "[data-featured-next]",
  "[data-featured-pagination]",
  "featured vehicle",
)

wireSlider(
  "[data-exhibition-slider]",
  "[data-exhibition-prev]",
  "[data-exhibition-next]",
  "[data-exhibition-pagination]",
  "exhibition",
)
