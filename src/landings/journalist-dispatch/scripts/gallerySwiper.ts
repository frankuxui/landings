// Journalist Dispatch — "Photojournalism" exhibition slider (Swiper Core).
// No autoplay: navigation is drag/swipe, the prev/next <button>s,
// pagination, and the keyboard — deliberately slow, single-slide-at-a-time
// transitions rather than a commercial multi-card carousel, with a running
// "01 / 06" counter standing in for a gallery wall label.
import { Swiper } from "swiper"
import { A11y, Keyboard, Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

const root = document.querySelector<HTMLElement>("[data-gallery-slider]")
const prevButton = document.querySelector<HTMLButtonElement>(
  "[data-gallery-prev]",
)
const nextButton = document.querySelector<HTMLButtonElement>(
  "[data-gallery-next]",
)
const paginationEl = document.querySelector<HTMLElement>(
  "[data-gallery-pagination]",
)
const counter = document.querySelector<HTMLElement>("[data-gallery-counter]")

if (root && prevButton && nextButton && paginationEl && counter) {
  const total = root.querySelectorAll(".swiper-slide").length

  const swiper = new Swiper(root, {
    modules: [Navigation, Pagination, Keyboard, A11y],
    slidesPerView: 1,
    speed: 700,
    spaceBetween: 0,
    grabCursor: true,
    watchOverflow: true,
    observer: true,
    observeParents: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    a11y: {
      prevSlideMessage: "Previous photograph",
      nextSlideMessage: "Next photograph",
      paginationBulletMessage: "Go to photograph {{index}}",
    },
    pagination: {
      el: paginationEl,
      clickable: true,
    },
  })

  const updateState = (): void => {
    prevButton.disabled = swiper.isBeginning
    prevButton.setAttribute("aria-disabled", String(swiper.isBeginning))
    nextButton.disabled = swiper.isEnd
    nextButton.setAttribute("aria-disabled", String(swiper.isEnd))
    counter.textContent = `${String(swiper.activeIndex + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`
  }

  prevButton.addEventListener("click", () => swiper.slidePrev())
  nextButton.addEventListener("click", () => swiper.slideNext())

  swiper.on("slideChange", updateState)
  swiper.on("reachBeginning", updateState)
  swiper.on("reachEnd", updateState)
  swiper.on("resize", updateState)
  updateState()
}
