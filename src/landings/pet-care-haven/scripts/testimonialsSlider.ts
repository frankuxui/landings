// Pet Care Haven — manual testimonials carousel (Swiper Core). No
// autoplay: navigation is drag/swipe, the prev/next <button>s, pagination,
// and the keyboard.
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
      prevSlideMessage: "Previous testimonial",
      nextSlideMessage: "Next testimonial",
      paginationBulletMessage: "Go to testimonial {{index}}",
    },
    pagination: {
      el: paginationEl,
      clickable: true,
    },
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
