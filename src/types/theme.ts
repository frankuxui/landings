/**
 * Canonical light/dark theme values. Shared by the content collection schema
 * (a landing's supported themes) and the preview theme-switching mechanism.
 */
export const THEMES = ["light", "dark"] as const

export type Theme = (typeof THEMES)[number]

/** Narrows an untyped string (e.g. a DOM `dataset` value) to a `Theme`. */
export function isTheme(value: string | undefined): value is Theme {
  return !!value && (THEMES as readonly string[]).includes(value)
}
