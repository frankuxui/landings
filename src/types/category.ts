/**
 * Canonical list of landing categories. This is the single source of truth —
 * both the content collection schema (`content.config.ts`) and the category
 * catalog (`data/categories.ts`) derive from it instead of repeating the list.
 */
export const CATEGORY_SLUGS = [
  "ecommerce",
  "portfolio",
  "saas",
  "blog",
  "business",
] as const

export type CategorySlug = (typeof CATEGORY_SLUGS)[number]

export interface Category {
  slug: CategorySlug
  label: string
  description: string
}
