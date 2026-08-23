// Heliogrid — manual testimonials carousel (Swiper Core). No autoplay:
// navigation is drag/swipe, the prev/next <button>s, pagination, and the
// keyboard. Prev/next reflect Swiper's own beginning/end state instead of
// staying silently inert at the edges.
import { Swiper } from "swiper"
import { A11y, Keyboard, Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

const root = document.querySelector<HTMLElement>("[data-testimonials-slider]")
const prevButton = document.querySelector<HTMLButtonElement>(
  "[data-testimonials-prev]",
)
const nextButton = document.querySelector<HTMLButtonElement>(
  "[data-testimonials-next]",
)
const paginationEl = document.querySelector<HTMLElement>(
  "[data-testimonials-pagination]",
)

if (root && prevButton && nextButton && paginationEl) {
  const swiper = new Swiper(root, {
    modules: [Navigation, Pagination, Keyboard, A11y],
    slidesPerView: 1.1,
    spaceBetween: 16,
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
      nextSlideMessage: "Testimonio siguiente",
      paginationBulletMessage: "Ir al testimonio {{index}}",
    },
    pagination: {
      el: paginationEl,
      clickable: true,
    },
    // Reuses Tailwind's native sm/lg/xl breakpoint values instead of
    // inventing unrelated pixel thresholds for the slider alone.
    breakpoints: {
      640: { slidesPerView: 1.6, spaceBetween: 20 },
      1024: { slidesPerView: 2.4, spaceBetween: 24 },
      1280: { slidesPerView: 3, spaceBetween: 28 },
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
