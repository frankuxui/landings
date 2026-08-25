// Pet Care Haven — local content types. Not shared with the platform or any
// other landing (see the astro-landing-pages Skill: isolation).

/** Real Unsplash photograph metadata, persisted per the unsplash-images
 * Skill so the landing can render both the image and its attribution
 * without ever calling the Unsplash API again. */
export interface UnsplashImage {
  id: string
  src: string
  alt: string
  width: number
  height: number
  color: string
  author: string
  authorUrl: string
  sourceUrl: string
  unsplashUrl: string
  downloadLocation: string
}

export interface NavLink {
  label: string
  href: string
}

/** One scene of the pinned "A day of care" storytelling section. */
export interface Scene {
  id: string
  index: string
  title: string
  description: string
  benefit: string
  image: UnsplashImage
}

export interface Service {
  id: string
  name: string
  description: string
  benefit: string
  image: UnsplashImage
}

/** One companion featured in the pet gallery mosaic. */
export interface GalleryPet {
  id: string
  name: string
  species: string
  activity: string
  caption: string
  image: UnsplashImage
}

/** One large slide of the "Featured companions" Swiper section. */
export interface Story {
  id: string
  petName: string
  headline: string
  quote: string
  image: UnsplashImage
}

export interface Testimonial {
  quote: string
  ownerName: string
  petName: string
  service: string
  location: string
  rating: number
}

export interface TrustMetric {
  value: number
  suffix: string
  label: string
}

export interface ProcessStep {
  index: string
  title: string
  description: string
}

export interface Caregiver {
  name: string
  role: string
  specialty: string
  trait: string
  image: UnsplashImage
}
