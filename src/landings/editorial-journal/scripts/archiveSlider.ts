// Editorial Journal — manual "past issues" carousel (Swiper Core). No autoplay:
// navigation is drag/swipe, the prev/next <button>s, pagination, and the
// keyboard. Prev/next reflect Swiper's own beginning/end state instead of
// staying silently inert at the edges.
import { Swiper } from "swiper"
import { A11y, Keyboard, Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

const root = document.querySelector<HTMLElement>("[data-archive-slider]")
const prevButton = document.querySelector<HTMLButtonElement>(
  "[data-archive-prev]",
)
const nextButton = document.querySelector<HTMLButtonElement>(
  "[data-archive-next]",
)
const paginationEl = document.querySelector<HTMLElement>(
  "[data-archive-pagination]",
)

if (root && prevButton && nextButton && paginationEl) {
  const swiper = new Swiper(root, {
    modules: [Navigation, Pagination, Keyboard, A11y],
    slidesPerView: "auto",
    spaceBetween: 20,
    grabCursor: true,
    watchOverflow: true,
    observer: true,
    observeParents: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    a11y: {
      prevSlideMessage: "Previous issue",
      nextSlideMessage: "Next issue",
      paginationBulletMessage: "Go to issue {{index}}",
    },
    pagination: {
      el: paginationEl,
      clickable: true,
    },
    // Reuses Tailwind's native sm/xl breakpoint values instead of inventing
    // unrelated pixel thresholds for the slider alone.
    breakpoints: {
      640: { spaceBetween: 24 },
      1280: { spaceBetween: 28 },
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
