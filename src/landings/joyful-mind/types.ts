export interface UnsplashImage {
  id: string
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

export interface Habit {
  label: string
  note: string
}

export interface FeelGoodTab {
  id: string
  label: string
  title: string
  copy: string
  cue: string
  image: UnsplashImage
}

export interface JoyStory {
  quote: string
  name: string
  context: string
  story: string
  image: UnsplashImage
}

export interface HorizontalScene {
  number: string
  label: string
  title: string
  copy: string
  meta: string
  image: UnsplashImage
}

export interface MoodState {
  id: string
  label: string
  title: string
  copy: string
  image: UnsplashImage
}

export interface GalleryMoment {
  caption: string
  image: UnsplashImage
}

export interface Reminder {
  line: string
  detail: string
  tag: string
}
