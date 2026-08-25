import { featureFrames } from "./images"
import type { Feature } from "../types"

export const feature: Feature = {
  category: "Migration",
  location: "Southern border crossing",
  date: "August 14, 2026",
  readingTime: "12 min read",
  photoCount: "24 photographs",
  headline: "The Long Walk North",
  standfirst:
    "Six weeks on the road with families who left everything behind, told through the towns that fed them, the officials who turned them away, and the ones who didn't.",
  frames: [
    {
      image: featureFrames[0],
      caption: "The column moves before sunrise, when the road is coolest.",
    },
    {
      image: featureFrames[1],
      caption: "Days without shelter blur into a single, flat horizon.",
    },
    {
      image: featureFrames[2],
      caption: "What can't be carried is left at the last checkpoint.",
    },
    {
      image: featureFrames[3],
      caption: "A night stop, and the first real rest in four days.",
    },
  ],
}
