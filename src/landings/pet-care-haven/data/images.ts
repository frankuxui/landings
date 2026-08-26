// Every Unsplash photograph rendered anywhere in this landing, collected
// here for the consolidated "Photo credits" list in Footer.astro (see the
// astro-landing-pages Skill and the unsplash-images Skill §9.5). Each photo
// also carries its own discreet caption below it via components/Photo.astro
// or components/PhotoCredit.astro — this list is the required second,
// page-level point of attribution, not a replacement for it.
import { heroImage } from "./hero"
import { scenes } from "./scenes"
import { services } from "./services"
import { galleryPets } from "./gallery"
import { stories } from "./stories"
import { storytellingImage } from "./storytelling"
import { caregivers } from "./team"
import { ctaImage } from "./ctaBackground"
import { contactImage } from "./contact"
import type {
  UnsplashImage,
  Scene,
  Service,
  GalleryPet,
  Story,
  Caregiver,
} from "../types"

const candidateImages: UnsplashImage[] = [
  heroImage,
  ...scenes.map((scene: Scene) => scene.image),
  ...services.map((service: Service) => service.image),
  ...galleryPets.map((pet: GalleryPet) => pet.image),
  ...stories.map((story: Story) => story.image),
  storytellingImage,
  ...caregivers.map((caregiver: Caregiver) => caregiver.image),
  ctaImage,
  contactImage,
]

// Four services reuse the exact photograph already selected for the
// matching scene in "A day of care" (same Unsplash id, same credit) —
// de-duplicated here so the consolidated list credits each photo once.
const seenIds = new Set<string>()
export const allImages: UnsplashImage[] = candidateImages.filter(
  (image: UnsplashImage): boolean => {
    if (seenIds.has(image.id)) return false
    seenIds.add(image.id)
    return true
  },
)
