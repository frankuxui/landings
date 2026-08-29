// Budapest — Swiper instance for Frame by Frame gallery.
export {}

async function initFrameSlider(): Promise<void> {
  const { Swiper } = await import("swiper")
  const { Navigation, Pagination, Keyboard, A11y, Mousewheel, FreeMode } =
    await import("swiper/modules")
  await import("swiper/css" as string)
  await import("swiper/css/free-mode" as string)

  const container = document.querySelector<HTMLElement>(".frame-slider")
  if (!container) return

  new Swiper(container, {
    modules: [Navigation, Pagination, Keyboard, A11y, Mousewheel, FreeMode],
    slidesPerView: "auto",
    spaceBetween: 8,
    speed: 650,
    grabCursor: true,
    freeMode: {
      enabled: true,
      momentumRatio: 0.7,
    },
    keyboard: { enabled: true, onlyInViewport: true },
    mousewheel: {
      forceToAxis: true,
      sensitivity: 0.55,
      releaseOnEdges: true,
    },
    a11y: {
      prevSlideMessage: "Previous frame",
      nextSlideMessage: "Next frame",
    },
    pagination: {
      el: ".frame-slider-pagination",
      clickable: true,
    },
    navigation: {
      prevEl: ".frame-slider-prev",
      nextEl: ".frame-slider-next",
    },
  })
}

initFrameSlider()
