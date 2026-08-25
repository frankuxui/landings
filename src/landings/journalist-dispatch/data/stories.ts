import { storyImages } from "./images"
import type { Story } from "../types"

export const stories: Story[] = [
  {
    category: "Human Rights",
    title: "Signs They Made Themselves",
    location: "Central Square",
    year: "2026",
    description:
      "Three weeks inside a movement that organized entirely off the record, one hand-painted sign at a time.",
    image: storyImages.rights,
    layout: "wide",
  },
  {
    category: "Migration",
    title: "The Waiting Rooms",
    location: "Northern transit corridor",
    year: "2025",
    description:
      "Inside the informal shelters where families spend months, not days, waiting for a decision no one can predict.",
    image: storyImages.migration,
    layout: "tall",
  },
  {
    category: "Politics",
    title: "The Quiet Recount",
    location: "Regional capital",
    year: "2025",
    description:
      "How a disputed local election was settled not in court, but in a back office, over three sleepless nights.",
    layout: "text",
  },
  {
    category: "Society",
    title: "Last Train Out",
    location: "Coastal rail line",
    year: "2025",
    description:
      "A commuter line slated for closure becomes, for a season, the only thing holding a town together.",
    image: storyImages.society,
    layout: "wide",
  },
  {
    category: "Environment",
    title: "What the River Took",
    location: "Lower delta basin",
    year: "2024",
    description:
      "Two seasons of flooding, one displaced village, and the engineers who say it was always going to happen.",
    layout: "text",
  },
  {
    category: "Portraits",
    title: "The Ones Who Stayed",
    location: "Old quarter",
    year: "2024",
    description:
      "A portrait series of residents who refused to leave a neighborhood slated for demolition.",
    image: storyImages.culture,
    layout: "tall",
  },
]
