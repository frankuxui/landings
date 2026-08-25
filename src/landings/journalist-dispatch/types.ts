// Local content shapes for the Journalist Dispatch landing. Specific to
// this landing's own data (navigation, dispatches, stories, investigations,
// gallery, field notes, timeline, publications, awards, archive) and
// therefore kept here rather than in the platform's shared `src/types/` —
// nothing outside this landing needs them.

/** A single link in the landing's own in-page navigation. */
export interface NavLink {
  label: string
  href: string
}

/**
 * A photograph sourced from Unsplash, with the full attribution/provenance
 * metadata the `unsplash-images` Skill requires persisted per image. Kept
 * local to this landing so it stays a fully self-contained, downloadable
 * module — see the isolation rule in the `astro-landing-pages` Skill.
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

/** The fixed set of editorial beats this landing's reporting is filed under. */
export type StoryCategory =
  | "Conflict"
  | "Society"
  | "Migration"
  | "Culture"
  | "Human Rights"
  | "Environment"
  | "Politics"
  | "Portraits"

/** One photograph within the lead dispatch's sticky photo sequence. */
export interface FeatureFrame {
  image: UnsplashImage
  caption: string
}

/** The current lead dispatch, presented as a sticky-text/scrolling-photo panel. */
export interface Feature {
  category: StoryCategory
  location: string
  date: string
  readingTime: string
  photoCount: string
  headline: string
  standfirst: string
  frames: FeatureFrame[]
}

/** A single selected story in the asymmetric "Selected Stories" grid. */
export interface Story {
  category: StoryCategory
  title: string
  location: string
  year: string
  description: string
  image?: UnsplashImage
  /** Layout weight inside the asymmetric grid — wide photo, tall photo, or type-only. */
  layout: "wide" | "tall" | "text"
}

/** A long-form investigation presented in the dark "Investigations" section. */
export interface Investigation {
  title: string
  region: string
  months: number
  interviews: number
  publishedOn: string
  outlet: string
  status: "Published" | "Ongoing"
}

/** One slide in the full-bleed "Photojournalism" exhibition gallery. */
export interface GallerySlide {
  image: UnsplashImage
  project: string
  location: string
  year: string
  caption: string
}

/** One entry in the "Field Notes" travel diary. */
export interface FieldNote {
  date: string
  city: string
  country: string
  note: string
  image?: UnsplashImage
}

/** One stop on the horizontal "Coverage" timeline. */
export interface TimelineStop {
  year: string
  location: string
  story: string
  outlet: string
  category: StoryCategory
  image: UnsplashImage
}

/** One outlet in the "Publications & Collaborations" section. */
export interface Publication {
  outlet: string
  pieces: number
  years: string
  themes: string
}

/** One line in the sober "Recognitions" list. */
export interface Award {
  year: string
  title: string
  organization: string
}

/** One reportage entry browsable inside the filterable "Archive". */
export interface ArchiveEntry {
  title: string
  category: StoryCategory
  location: string
  year: string
}
