// Terraltura — manual product carousel (Swiper Core). No autoplay:
// navigation is drag/swipe, the prev/next <button>s, pagination, and the
// keyboard. Prev/next reflect Swiper's own beginning/end state instead of
// staying silently inert at the edges.
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

if (root && prevButton && nextButton && paginationEl) {
  const swiper = new Swiper(root, {
    modules: [Navigation, Pagination, Keyboard, A11y],
    slidesPerView: 1.15,
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
      prevSlideMessage: "Producto anterior",
      nextSlideMessage: "Producto siguiente",
      paginationBulletMessage: "Ir al producto {{index}}",
    },
    pagination: {
      el: paginationEl,
      clickable: true,
    },
    // Reuses the landing's own established breakpoint values (the `cards`
    // theme breakpoint plus Tailwind's native lg/xl) instead of inventing
    // unrelated pixel thresholds for the slider alone.
    breakpoints: {
      760: { slidesPerView: 2.2, spaceBetween: 24 },
      1024: { slidesPerView: 3.15, spaceBetween: 24 },
      1280: { slidesPerView: 3.4, spaceBetween: 32 },
    },
  })

  const updateNavState = (): void => {
    prevButton.disabled = swiper.isBeginning
    prevButton.setAttribute("aria-disabled", String(swiper.isBeginning))
    nextButton.disabled = swiper.isEnd
    nextButton.setAttribute("aria-disabled", String(swiper.isEnd))
  }

  // Swiper's transformed, absolutely-positioned-in-effect slides don't
  // reliably pick up flexbox cross-axis stretch across browsers, so equal
  // card height is enforced directly instead of relying on CSS alone.
  const equalizeCardHeights = (): void => {
    const cards = root.querySelectorAll<HTMLElement>(".swiper-slide > article")
    cards.forEach((card: HTMLElement) => card.style.removeProperty("height"))
    const maxHeight = Math.max(
      ...Array.from(cards).map(
        (card: HTMLElement) => card.getBoundingClientRect().height,
      ),
    )
    cards.forEach((card: HTMLElement) => {
      card.style.height = `${maxHeight}px`
    })
  }

  prevButton.addEventListener("click", () => swiper.slidePrev())
  nextButton.addEventListener("click", () => swiper.slideNext())

  swiper.on("slideChange", updateNavState)
  swiper.on("reachBeginning", updateNavState)
  swiper.on("reachEnd", updateNavState)
  swiper.on("resize", () => {
    updateNavState()
    equalizeCardHeights()
  })
  swiper.on("breakpoint", equalizeCardHeights)
  updateNavState()
  equalizeCardHeights()
}
