// Local content shapes for the Solar Energy landing. These types are
// specific to this landing's own data (navigation, technology, solutions,
// process, installations, impact figures, testimonials, articles) and
// therefore live here rather than in the platform's shared `src/types/` —
// nothing outside this landing needs them.

/** A single link in the landing's own in-page navigation. */
export interface NavLink {
  label: string
  href: string
}

/** The four technical building blocks presented in the "Technology" grid. */
export type TechSpecName =
  "Photovoltaic panels" | "Inverters" | "Monitoring" | "Storage"

/** One technical building block of a photovoltaic installation. */
export interface TechSpec {
  number: string
  title: TechSpecName
  description: string
}

/** One deployment context presented as an editorial row in "Solutions". */
export interface Solution {
  number: string
  title: string
  description: string
  image: UnsplashImage
}

/** The six stages illustrated in the "Process" vertical progress rail. */
export type ProcessStepName =
  | "Analysis"
  | "Design"
  | "Installation"
  | "Commissioning"
  | "Monitoring"
  | "Optimization"

/** One step of the "Process" vertical progress rail. */
export interface ProcessStep {
  number: string
  title: ProcessStepName
  description: string
}

/** One tile in the "Installations" asymmetric mosaic grid. */
export interface Installation {
  image: UnsplashImage
  caption: string
  ratio: "1 / 1" | "4 / 3" | "3 / 4" | "16 / 10"
  span: "large" | "medium"
}

/** The single headline figure presented in "Impact". */
export interface PrimaryImpactStat {
  value: string
  unit: string
  description: string
}

/** One secondary figure listed alongside the headline figure in "Impact". */
export interface SecondaryImpactStat {
  value: string
  label: string
}

/** A customer/partner quote in the "Testimonials" slider — identified by a
 * neutral role, never a full name, per the platform's fictional-data rule. */
export interface Testimonial {
  quote: string
  role: string
}

/** One reading-column piece in the contained "Editorial" section. */
export interface Article {
  eyebrow: string
  title: string
  excerpt: string
}

/** A single Unsplash photograph used inside this landing, with the
 * attribution fields required by the unsplash-images Skill. */
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
