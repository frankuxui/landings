import { timelineImages } from "./images"
import type { TimelineStop } from "../types"

export const timelineStops: TimelineStop[] = [
  {
    year: "2026",
    location: "Beirut",
    story: "Rebuilding, one storefront at a time",
    outlet: "The Northbound Review",
    category: "Society",
    image: timelineImages.beirut,
  },
  {
    year: "2025",
    location: "Kyiv",
    story: "A winter of interrupted power",
    outlet: "Continental Dispatch",
    category: "Conflict",
    image: timelineImages.kyiv,
  },
  {
    year: "2025",
    location: "Mediterranean crossing",
    story: "Adrift for eleven hours",
    outlet: "Field & Ledger",
    category: "Migration",
    image: timelineImages.mediterranean,
  },
  {
    year: "2024",
    location: "Marrakesh",
    story: "The medina after the tremor",
    outlet: "The Northbound Review",
    category: "Environment",
    image: timelineImages.marrakesh,
  },
  {
    year: "2023",
    location: "Dakar",
    story: "A port city recounts itself",
    outlet: "Continental Dispatch",
    category: "Culture",
    image: timelineImages.dakar,
  },
]
