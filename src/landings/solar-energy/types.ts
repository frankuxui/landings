// Local content shapes for the Heliogrid landing. These types are specific
// to this landing's own data (navigation, technology, solutions, process,
// installations, impact figures, testimonials, articles) and therefore live
// here rather than in the platform's shared `src/types/` — nothing outside
// this landing needs them.

/** A single link in the landing's own in-page navigation. */
export interface NavLink {
  label: string
  href: string
}

/** The four technical building blocks presented in the "Tecnología" grid. */
export type TechSpecName =
  "Paneles fotovoltaicos" | "Inversores" | "Monitorización" | "Almacenamiento"

/** One technical building block of a photovoltaic installation. */
export interface TechSpec {
  number: string
  title: TechSpecName
  description: string
}

/** One deployment context presented as an editorial row in "Soluciones". */
export interface Solution {
  number: string
  title: string
  description: string
  imageLabel: string
}

/** The six stages illustrated in the "Proceso" vertical progress rail. */
export type ProcessStepName =
  | "Análisis"
  | "Diseño"
  | "Instalación"
  | "Puesta en marcha"
  | "Monitorización"
  | "Optimización"

/** One step of the "Proceso" vertical progress rail. */
export interface ProcessStep {
  number: string
  title: ProcessStepName
  description: string
}

/** One tile in the "Instalaciones" asymmetric mosaic grid. */
export interface Installation {
  label: string
  caption: string
  ratio: "1 / 1" | "4 / 3" | "3 / 4" | "16 / 10"
  span: "large" | "medium"
}

/** The single headline figure presented in "Impacto". */
export interface PrimaryImpactStat {
  value: string
  unit: string
  description: string
}

/** One secondary figure listed alongside the headline figure in "Impacto". */
export interface SecondaryImpactStat {
  value: string
  label: string
}

/** A customer/partner quote in the "Testimonios" slider — identified by a
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
