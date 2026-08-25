// Grandparent Care — "Stories that move us" carousel (Swiper Core). No
// autoplay: navigation is drag/swipe, the prev/next <button>s, pagination,
// and the keyboard. Large, partially visible slides; on every slide change
// the incoming caption is nudged in with a short translateY + fade instead
// of snapping into place.
import { Swiper } from "swiper"
import type { Swiper as SwiperInstance } from "swiper"
import { A11y, Keyboard, Navigation, Pagination } from "swiper/modules"
import gsap from "gsap"
import "swiper/css"
import "swiper/css/pagination"

const root = document.querySelector<HTMLElement>("[data-stories-slider]")
const prevButton = document.querySelector<HTMLButtonElement>(
  "[data-stories-prev]",
)
const nextButton = document.querySelector<HTMLButtonElement>(
  "[data-stories-next]",
)
const paginationEl = document.querySelector<HTMLElement>(
  "[data-stories-pagination]",
)

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches

if (root && prevButton && nextButton && paginationEl) {
  const swiper = new Swiper(root, {
    modules: [Navigation, Pagination, Keyboard, A11y],
    slidesPerView: 1.05,
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
      prevSlideMessage: "Previous story",
      nextSlideMessage: "Next story",
      paginationBulletMessage: "Go to story {{index}}",
    },
    pagination: {
      el: paginationEl,
      clickable: true,
    },
    breakpoints: {
      640: { slidesPerView: 1.4, spaceBetween: 24 },
      1024: { slidesPerView: 2.1, spaceBetween: 32 },
      1280: { slidesPerView: 2.6, spaceBetween: 36 },
    },
  })

  const updateNavState = (): void => {
    prevButton.disabled = swiper.isBeginning
    prevButton.setAttribute("aria-disabled", String(swiper.isBeginning))
    nextButton.disabled = swiper.isEnd
    nextButton.setAttribute("aria-disabled", String(swiper.isEnd))
  }

  const animateActiveSlide = (instance: SwiperInstance): void => {
    if (prefersReducedMotion) return
    const activeContent = instance.slides[
      instance.activeIndex
    ]?.querySelector<HTMLElement>("[data-story-content]")
    if (!activeContent) return

    gsap.fromTo(
      activeContent,
      { y: 18, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
    )
  }

  prevButton.addEventListener("click", () => swiper.slidePrev())
  nextButton.addEventListener("click", () => swiper.slideNext())

  swiper.on("slideChange", updateNavState)
  swiper.on("slideChangeTransitionStart", animateActiveSlide)
  swiper.on("reachBeginning", updateNavState)
  swiper.on("reachEnd", updateNavState)
  swiper.on("resize", updateNavState)
  updateNavState()
  animateActiveSlide(swiper)
}
