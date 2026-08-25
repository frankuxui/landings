// Chocolate Factory — manual product carousel (Swiper Core). No autoplay:
// navigation is drag/swipe, the prev/next <button>s, pagination, and the
// keyboard. Prev/next reflect Swiper's own beginning/end state instead of
// staying silently inert at the edges. A numbered counter ("01 / 05")
// mirrors the active slide instead of the dot-only pagination of other
// sliders in this gallery.
import { Swiper } from "swiper"
import { A11y, Keyboard, Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

const root = document.querySelector<HTMLElement>("[data-products-slider]")
const prevButton = document.querySelector<HTMLButtonElement>(
  "[data-products-prev]",
)
const nextButton = document.querySelector<HTMLButtonElement>(
  "[data-products-next]",
)
const paginationEl = document.querySelector<HTMLElement>(
  "[data-products-pagination]",
)
const counterEl = document.querySelector<HTMLElement>("[data-products-counter]")

const formatIndex = (value: number): string => String(value).padStart(2, "0")

if (root && prevButton && nextButton && paginationEl) {
  const totalSlides = root.querySelectorAll(".swiper-slide").length

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
      prevSlideMessage: "Previous product",
      nextSlideMessage: "Next product",
      paginationBulletMessage: "Go to product {{index}}",
    },
    pagination: {
      el: paginationEl,
      clickable: true,
    },
    // Reuses Tailwind's native sm/lg/xl breakpoint values instead of
    // inventing unrelated pixel thresholds for the slider alone.
    breakpoints: {
      640: { slidesPerView: 1.6, spaceBetween: 20 },
      1024: { slidesPerView: 2.6, spaceBetween: 24 },
      1280: { slidesPerView: 3.3, spaceBetween: 28 },
    },
  })

  const updateNavState = (): void => {
    prevButton.disabled = swiper.isBeginning
    prevButton.setAttribute("aria-disabled", String(swiper.isBeginning))
    nextButton.disabled = swiper.isEnd
    nextButton.setAttribute("aria-disabled", String(swiper.isEnd))

    if (counterEl) {
      const activeIndex = Math.min(swiper.activeIndex + 1, totalSlides)
      counterEl.textContent = `${formatIndex(activeIndex)} / ${formatIndex(totalSlides)}`
    }
  }

  prevButton.addEventListener("click", () => swiper.slidePrev())
  nextButton.addEventListener("click", () => swiper.slideNext())

  swiper.on("slideChange", updateNavState)
  swiper.on("reachBeginning", updateNavState)
  swiper.on("reachEnd", updateNavState)
  swiper.on("resize", updateNavState)
  updateNavState()
}
