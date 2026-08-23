/**
 * A landing's optional color-palette system. Every landing defaults to the
 * grayscale palette (the platform's monochrome baseline); a landing may
 * additionally define one or more chromatic palettes the visitor can switch
 * between via the preview toolbar's palette selector. See "Optional
 * per-landing color palettes" in the astro-landing-pages Skill.
 */

/** The 5 shared CSS custom properties every landing palette must define. */
export interface PaletteColors {
  primary: string
  secondary: string
  tertiary: string
  accent: string
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
