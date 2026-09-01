import { Swiper } from "swiper"
import { A11y, Keyboard, Navigation } from "swiper/modules"
import "swiper/css"

const progressSegments = Array.from(
  document.querySelectorAll<HTMLElement>("[data-stories-progress] span"),
)

const storiesSwiper = new Swiper(".stories-swiper", {
  modules: [Navigation, Keyboard, A11y],
  slidesPerView: 1,
  spaceBetween: 18,
  grabCursor: true,
  keyboard: { enabled: true, onlyInViewport: true },
  navigation: {
    prevEl: "[data-stories-prev]",
    nextEl: "[data-stories-next]",
  },
  a11y: {
    prevSlideMessage: "Previous joy story",
    nextSlideMessage: "Next joy story",
  },
})

function updateStoriesProgress(): void {
  progressSegments.forEach((segment: HTMLElement, index: number) => {
    segment.style.opacity = index <= storiesSwiper.realIndex ? "1" : "0.35"
    segment.style.transform =
      index === storiesSwiper.realIndex ? "scaleX(1)" : "scaleX(0.72)"
  })
}

storiesSwiper.on("slideChange", updateStoriesProgress)
updateStoriesProgress()
