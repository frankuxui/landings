// Fictional stories with clearly placeholder names — not tied to any real
// person. See the astro-landing-pages Skill §15 "Privacy and fictional
// data".
import { storyImages } from "./images"
import type { Story } from "../types"

export const stories: Story[] = [
  {
    name: "Eleanor",
    role: "88, joined our walking group in her first year alone",
    quote:
      "I didn't think anyone had time for an old woman's stories. Now I have a Tuesday I look forward to every single week.",
    image: storyImages.eleanor,
  },
  {
    name: "Arthur",
    role: "91, receives weekly accompaniment visits",
    quote:
      "My daughter lives far away and worries. Since someone started visiting, she worries less — and honestly, so do I.",
    image: storyImages.arthur,
  },
  {
    name: "Margaret",
    role: "84, attended our first family guidance workshop with her son",
    quote:
      "We finally talked about things we'd both been avoiding for years. It didn't fix everything, but it opened the door.",
    image: storyImages.margaret,
  },
]
