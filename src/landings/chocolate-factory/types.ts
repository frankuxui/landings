// Local content shapes for the Chocolate Factory landing. These types are
// specific to this landing's own data (process, products, stats, segments,
// articles, navigation) and therefore live here rather than in the
// platform's shared `src/types/` — nothing outside this landing needs them.

/** A single link in the landing's own in-page navigation. */
export interface NavLink {
  label: string
  href: string
}

/** The eight stages illustrated in the horizontal "Process" rail. */
export type ProcessStepName =
  | "Selection"
  | "Roasting"
  | "Grinding"
  | "Refining"
  | "Conching"
  | "Tempering"
  | "Molding"
  | "Finishing"

/** One step of the "Process" horizontal scroll rail. */
export interface ProcessStep {
  number: string
  title: ProcessStepName
  description: string
  iconLabel: ProcessStepName
}

/** A chocolate reference presented in the "Products" slider. */
export interface Product {
  name: string
  cacaoContent: string
  format: string
  description: string
  notes: string[]
  image: UnsplashImage
}

/** A single highlighted production figure in the "Factory" section. */
export interface ProductionStat {
  value: string
  label: string
}

/** A professional audience segment presented in "Distribution". */
export interface Segment {
  number: string
  title: string
  description: string
}

/** An editorial content block in the "Editorial" section. */
export interface EditorialPiece {
  eyebrow: string
  title: string
  excerpt: string
  image: UnsplashImage
  featured?: boolean
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
