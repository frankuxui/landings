import type { UnsplashCredit } from "../../types"

export interface UnsplashImage extends UnsplashCredit {
  src: string
  alt: string
  width: number
  height: number
  color?: string
}

export interface NavLink {
  label: string
  href: string
}

export interface Vehicle {
  marque: string
  model: string
  year: string
  country: string
  displacement: string
  power: string
  acquired: string
  note: string
  image: UnsplashImage
}

export interface FeaturedVehicle extends Vehicle {
  number: string
  highlight: string
}

export interface TimelineMoment {
  year: string
  title: string
  text: string
  image: UnsplashImage
}

export interface Restoration {
  vehicle: string
  duration: string
  status: string
  text: string
  specs: string[]
  image: UnsplashImage
}

export interface DetailNote {
  label: string
  text: string
  image: UnsplashImage
}

export interface EngineSound {
  engine: string
  vehicle: string
  bars: number[]
}

export interface EventItem {
  date: string
  title: string
  place: string
  vehicle: string
  image: UnsplashImage
}

export interface Exhibition {
  year: string
  title: string
  place: string
  vehicles: string
  image: UnsplashImage
}

export interface Journey {
  distance: string
  route: string
  vehicle: string
  text: string
  image: UnsplashImage
}

export interface GarageStory {
  title: string
  text: string
}

export interface FactNote {
  number: string
  title: string
  text: string
}

export interface ArchiveFilter {
  label: string
  values: string[]
}
