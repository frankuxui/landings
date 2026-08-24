// Local content shapes for the Aperture Editions landing. These types are
// specific to this landing's own data (works, collections, photographers,
// navigation) and therefore live here rather than in the platform's shared
// `src/types/` — nothing outside this landing needs them (see the isolation
// rule in the astro-landing-pages Skill).

/** A single link in the landing's own in-page navigation. */
export interface NavLink {
  label: string
  href: string
}

/**
 * A photograph sourced from Unsplash, with the full attribution/provenance
 * metadata the `unsplash-images` Skill requires persisted per image. Kept
 * local to this landing so it stays a fully self-contained, downloadable
 * module.
 */
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

/** One of the marketplace's seven curated categories. */
export type WorkCategory =
  | "Architecture"
  | "Nature"
  | "Street"
  | "Portrait"
  | "Travel"
  | "Minimal"
  | "Black & White"

/**
 * A single photographic edition sold on the marketplace — the marketplace's
 * one core content shape, reused across the Hero, Collections, Featured
 * Works, New Arrivals, Gallery, and Spotlight sections instead of
 * duplicating the same photograph's metadata per section.
 */
export interface Work {
  id: string
  title: string
  photographer: string
  category: WorkCategory
  year: string
  location: string
  technique: string
  price: string
  editionSize: string
  description: string
  limited: boolean
  isNew: boolean
  image: UnsplashImage
}

/** A fictional photographer profile shown in the "Photographers" section. */
export interface Photographer {
  id: string
  name: string
  specialty: string
  country: string
  worksCount: number
  bio: string
  portrait: UnsplashImage
}

/** A short, quantified claim used in the print-quality/manifesto strip. */
export interface PrintFeature {
  title: string
  description: string
  icon: "layers" | "droplet" | "award" | "package"
}
