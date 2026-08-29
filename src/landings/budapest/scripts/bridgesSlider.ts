// Budapest — Swiper instance for the Bridges section.
export {}

async function initBridgesSlider(): Promise<void> {
  const { Swiper } = await import("swiper")
  const { Navigation, Pagination, Keyboard, A11y } =
    await import("swiper/modules")
  await import("swiper/css" as string)

  const container = document.querySelector<HTMLElement>(".bridges-slider")
  if (!container) return

  new Swiper(container, {
    modules: [Navigation, Pagination, Keyboard, A11y],
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 600,
    keyboard: { enabled: true, onlyInViewport: true },
    a11y: {
      prevSlideMessage: "Previous bridge",
      nextSlideMessage: "Next bridge",
    },
    pagination: {
      el: ".bridges-slider-pagination",
      clickable: true,
    },
    navigation: {
      prevEl: ".bridges-slider-prev",
      nextEl: ".bridges-slider-next",
    },
  })
}

initBridgesSlider()
