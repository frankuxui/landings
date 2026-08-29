// Budapest — floating editorial images for interactive words.
export {}

const triggers = document.querySelectorAll<HTMLButtonElement>(
  "[data-word-trigger]",
)
const preview = document.querySelector<HTMLElement>("[data-words-preview]")
const previewImage = document.querySelector<HTMLImageElement>(
  "[data-words-preview-image]",
)
const previewCredit = document.querySelector<HTMLElement>(
  "[data-words-preview-credit]",
)
const mobileImage = document.querySelector<HTMLImageElement>(
  "[data-words-mobile-image]",
)
const mobileCredit = document.querySelector<HTMLElement>(
  "[data-words-mobile-credit]",
)
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")

type WordData = {
  src: string
  alt: string
  credit: string
}

const getWordData = (trigger: HTMLButtonElement): WordData => ({
  src: trigger.dataset.imageSrc ?? "",
  alt: trigger.dataset.imageAlt ?? "",
  credit: trigger.dataset.credit ?? "",
})

const setImage = (data: WordData): void => {
  if (previewImage) previewImage.src = data.src
  if (previewCredit) previewCredit.textContent = data.credit
  if (mobileImage) {
    mobileImage.src = data.src
    mobileImage.alt = data.alt
  }
  if (mobileCredit) mobileCredit.textContent = data.credit
}

if (triggers.length > 0) {
  let quickX: ((value: number) => void) | undefined
  let quickY: ((value: number) => void) | undefined
  let showPreview: (() => void) | undefined
  let hidePreview: (() => void) | undefined

  if (preview && !reducedMotion.matches) {
    import("gsap").then(({ gsap }) => {
      gsap.set(preview, {
        autoAlpha: 0,
        scale: 0.94,
        clipPath: "inset(18% 18% 18% 18%)",
      })
      quickX = gsap.quickTo(preview, "x", {
        duration: 0.45,
        ease: "power3.out",
      })
      quickY = gsap.quickTo(preview, "y", {
        duration: 0.45,
        ease: "power3.out",
      })
      showPreview = () => {
        gsap.to(preview, {
          autoAlpha: 1,
          scale: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 0.32,
          ease: "power2.out",
        })
      }
      hidePreview = () => {
        gsap.to(preview, {
          autoAlpha: 0,
          scale: 0.96,
          clipPath: "inset(12% 12% 12% 12%)",
          duration: 0.22,
          ease: "power2.out",
        })
      }
    })
  }

  triggers.forEach((trigger: HTMLButtonElement) => {
    trigger.addEventListener("pointerenter", (event: PointerEvent) => {
      setImage(getWordData(trigger))
      quickX?.(event.clientX + 26)
      quickY?.(event.clientY - 140)
      showPreview?.()
    })

    trigger.addEventListener("pointermove", (event: PointerEvent) => {
      quickX?.(event.clientX + 26)
      quickY?.(event.clientY - 140)
    })

    trigger.addEventListener("pointerleave", () => {
      hidePreview?.()
    })

    trigger.addEventListener("focus", () => {
      setImage(getWordData(trigger))
      showPreview?.()
    })

    trigger.addEventListener("blur", () => {
      hidePreview?.()
    })

    trigger.addEventListener("click", () => {
      setImage(getWordData(trigger))
    })
  })
}
