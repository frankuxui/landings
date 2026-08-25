/** Open Graph / Twitter card content type for a page. */
export type PageOgType = "website" | "article"

/** Shared HTML page metadata accepted by the platform's layouts. */
export interface PageMetadata {
  title?: string
  description?: string
  image?: string
  imageAlt?: string
  url?: string
  type?: PageOgType
  /** Excludes the page from search-engine indexing (e.g. utility routes). */
  noindex?: boolean
}
