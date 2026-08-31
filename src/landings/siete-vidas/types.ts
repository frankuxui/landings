export type PhotoRole =
  | "hero"
  | "black-cat"
  | "curiosity"
  | "story"
  | "expression"
  | "night"
  | "sleep"
  | "gallery"
  | "footer"

export interface UnsplashImage {
  id: string
  role: PhotoRole
  src: string
  alt: string
  width: number
  height: number
  color?: string
  author: string
  authorUrl: string
  sourceUrl: string
  unsplashUrl: string
  downloadLocation: string
}

export interface NavLink {
  href: string
  label: string
}

export interface FactItem {
  number: string
  category: string
  title: string
  body: string
  detail: string
  sourceLabel: string
  image: UnsplashImage
}

export interface Curiosity {
  number: string
  category: string
  title: string
  body: string
  why: string
  extra: string
  image: UnsplashImage
}

export interface Story {
  kicker: string
  title: string
  location: string
  context: string
  body: string
  note: string
  image: UnsplashImage
}

export interface Expression {
  word: string
  caption: string
  image: UnsplashImage
}

export interface ArchiveRecord {
  code: string
  coat: string
  mass: string
  likes: string
  hates: string
}

export interface PersonalityProfile {
  code: string
  title: string
  description: string
  signal: string
  image: UnsplashImage
}

export interface AnatomyItem {
  question: string
  title: string
  body: string
}

export interface LogicPair {
  setup: string
  result: string
}
