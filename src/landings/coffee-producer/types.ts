// Local content shapes for the Coffee Producer landing. These types are specific
// to this landing's own data (products, process steps, values, stats,
// testimonials, navigation) and therefore live here rather than in the
// platform's shared `src/types/` — nothing outside this landing needs them.

/** A single link in the landing's own in-page navigation. */
export interface NavLink {
  label: string
  href: string
}

/** The six stages illustrated in the "From crop to cup" timeline. */
export type ProcessStepName =
  "Growing" | "Harvest" | "Selection" | "Drying" | "Roasting" | "Brewing"

/** One step of the "From crop to cup" process timeline. */
export interface ProcessStep {
  number: string
  title: ProcessStepName
  description: string
  iconLabel: ProcessStepName
}

/** A coffee variety presented in the "Products" section. */
export interface Product {
  name: string
  origin: string
  roast: string
  format: string
  description: string
  tastingNotes: string[]
  image: UnsplashImage
}

/** A brand value presented with a Lucide icon in the "Values" section. */
export interface ValueItem {
  title: string
  description: string
}

/** A single highlighted figure in the "Stats" section. */
export interface Stat {
  value: string
  label: string
}

/** A customer/partner quote in the "Testimonials" section. */
export interface Testimonial {
  quote: string
  author: string
  role: string
}

/**
 * A photograph sourced from Unsplash, with the full attribution/provenance
 * metadata the `unsplash-images` Skill requires persisted per image. Kept
 * local to this landing (not `src/types/`) so the landing stays a fully
 * self-contained, downloadable module — see the isolation rule in the
 * `astro-landing-pages` Skill.
 */
export interface UnsplashImage {
  id: string
  src: string
  alt: string
  width: number
  height: number
  author: string
  authorUrl: string
  sourceUrl: string
  unsplashUrl: string
  downloadLocation: string
}
