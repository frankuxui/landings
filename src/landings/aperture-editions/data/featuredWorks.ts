// The pinned selection shown in the "Featured Works" scroll-driven section —
// deliberately distinct from (but slightly overlapping) the Collections
// flagships, so the section reads as its own curated moment rather than a
// repeat of the grid above it.
import { getWork } from "./works"
import type { Work } from "../types"

export const featuredWorks: Work[] = [
  getWork("hero-summit"),
  getWork("night-grid"),
  getWork("grid-of-sand"),
  getWork("still-frame"),
  getWork("quiet-gaze"),
]
