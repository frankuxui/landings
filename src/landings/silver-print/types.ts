// Local content shapes for the Silver Print landing. These types are
// specific to this landing's own data (collections, works, gallery,
// spotlight, photographers, navigation) and therefore live here rather than
// in the platform's shared `src/types/` — nothing outside this landing needs
// them (see the isolation rule in the astro-landing-pages Skill).

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
  author: string
  authorUrl: string
  sourceUrl: string
  unsplashUrl: string
  downloadLocation: string
}

/** One of the seven featured collection categories on the "Colecciones" section. */
export interface Collection {
  id: string
  name: string
  photographer: string
  price: string
  description: string
  worksCount: number
  image: UnsplashImage
}

/** One pinned work presented in the "Obras destacadas" sticky scroll section. */
export interface FeaturedWork {
  id: string
  title: string
  author: string
  year: string
  location: string
  technique: string
  price: string
  description: string
  image: UnsplashImage
}

/** A single aspect ratio used by the editorial masonry grid in "Galería". */
export type GalleryRatio = "3 / 4" | "4 / 3" | "1 / 1" | "4 / 5" | "3 / 2"

/** One piece offered for sale in the "Galería" shop grid. */
export interface GalleryItem {
  id: string
  name: string
  author: string
  category: string
  price: string
  description: string
  ratio: GalleryRatio
  image: UnsplashImage
}

/** One slide in the "Selección" Swiper carousel. */
export interface SpotlightItem {
  id: string
  title: string
  author: string
  price: string
  badge: string
  image: UnsplashImage
}

/** One fictional photographer profile in the "Fotógrafos" section. */
export interface Photographer {
  id: string
  name: string
  specialty: string
  country: string
  worksCount: number
  bio: string
  image: UnsplashImage
}
