// The curated set shown in the "Spotlight" Swiper carousel — the
// marketplace's editor's-selection/award-winning rail.
import { getWork } from "./works"
import type { Work } from "../types"

export const spotlightWorks: Work[] = [
  getWork("hero-summit"),
  getWork("tidal-hour"),
  getWork("arc-facade"),
  getWork("quiet-gaze"),
  getWork("night-grid"),
  getWork("still-frame"),
]
