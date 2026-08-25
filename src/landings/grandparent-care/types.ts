// Local content shapes for the Grandparent Care landing. Specific to this
// landing's own data (services, stories, signs, tips, workshops, benefits,
// testimonials, resources, FAQ, navigation) and therefore kept here rather
// than in the platform's shared `src/types/` — nothing outside this landing
// needs them (see the astro-landing-pages Skill: isolation).

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

/** Icon keys mapped to a Lucide component inside each consuming section. */
export type ServiceIconName = "Mic" | "HeartHandshake" | "Compass" | "Users"

/** One card in the "What we do" services grid. */
export interface Service {
  icon: ServiceIconName
  title: string
  description: string
}

/** One entry in the "Signs to watch for" informative list. */
export interface Sign {
  title: string
  description: string
}

/** One entry in the staggered "Tips for better care" section. */
export interface Tip {
  number: string
  title: string
  description: string
}

/** One entry in the "Talks and workshops" agenda. */
export interface Workshop {
  title: string
  format: string
  duration: string
  audience: string
  description: string
}

/** One immersive slide in the "Stories that move us" carousel. */
export interface Story {
  name: string
  role: string
  quote: string
  image: UnsplashImage
}

/** One quote card in the family "Testimonials" section. */
export interface Testimonial {
  name: string
  relation: string
  quote: string
}

/** One highlighted figure in the "Benefits of accompaniment" section. */
export interface Benefit {
  value: string
  suffix: string
  label: string
  description: string
}

/** One entry in the "Resources and support" grid. */
export interface Resource {
  title: string
  description: string
  tag: string
}

/** One question/answer pair in the FAQ accordion. */
export interface FaqItem {
  question: string
  answer: string
}
