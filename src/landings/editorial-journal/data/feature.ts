// The single "This Week's Report" featured article shown in the Feature
// section. Kept as its own small typed record — not an array — since only
// one feature runs at a time, unlike the repeated Story/DispatchItem shapes.
import { featureImage } from "./media"
import type { UnsplashImage } from "../types"

export interface FeatureArticle {
  category: string
  title: string
  summary: string
  author: string
  date: string
  isoDate: string
  readTime: string
  image: UnsplashImage
}

export const featureArticle: FeatureArticle = {
  category: "Technology",
  title: "The quiet migration back to paper forms",
  summary:
    "Across a dozen public services that digitized in the same decade, one pattern keeps repeating: a return to paper, not because the software failed, but because paper never asked anyone to create an account.",
  author: "Editorial Team",
  date: "August 21, 2026",
  isoDate: "2026-08-21",
  readTime: "12 min read",
  image: featureImage,
}
