import type { CollectionEntry } from "astro:content"

/** Canonical publication states for a landing's metadata entry. */
export const LANDING_STATUSES = ["draft", "published"] as const

export type LandingStatus = (typeof LANDING_STATUSES)[number]

/** A single entry from the `landings` content collection. */
export type LandingEntry = CollectionEntry<"landings">

/** The parsed metadata (frontmatter) of a landing entry. */
export type LandingData = LandingEntry["data"]

/** Shared prop shape for any component that renders a single landing entry. */
export interface LandingProps {
  landing: LandingEntry
}
