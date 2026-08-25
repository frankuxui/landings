/**
 * Every landing owns a chromatic palette rooted in its theme and color
 * psychology; the visitor still lands on the grayscale palette first (the
 * platform's monochrome baseline) and switches via the preview toolbar's
 * palette selector. See "Per-landing color palette" in the
 * astro-landing-pages Skill.
 */

/**
 * The shared CSS custom properties a landing palette may define — up to 6.
 * `primary` and `light` are the only two every palette must set; the rest
 * are used only as far as the landing's own concept calls for them.
 */
export interface PaletteColors {
  primary: string
  secondary?: string
  tertiary?: string
  accent?: string
  support?: string
  light: string
}

/** One selectable palette entry, as persisted in a landing's metadata JSON. */
export interface PaletteOption {
  id: string
  name: string
  colors: PaletteColors
}

/** Canonical id for the mandatory grayscale default every landing starts on. */
export const DEFAULT_PALETTE_ID = "grayscale"
