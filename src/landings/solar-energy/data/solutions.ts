import { solutionImages } from "./images"
import type { Solution } from "../types"

export const solutions: Solution[] = [
  {
    number: "01",
    title: "Residential self-consumption",
    description:
      "Systems sized to each home's actual consumption, designed to lower the bill from the very first month of operation.",
    image: solutionImages.residential,
  },
  {
    number: "02",
    title: "Commercial installations",
    description:
      "Shop and office roofs turned into generation surfaces, without disrupting the business's daily activity.",
    image: solutionImages.commercial,
  },
  {
    number: "03",
    title: "Industrial installations",
    description:
      "Large-surface projects for warehouses and production plants, with payback studies tailored to industrial processes.",
    image: solutionImages.industrial,
  },
  {
    number: "04",
    title: "Energy communities",
    description:
      "Shared generation across several buildings or neighbors, with energy distribution and savings configured to each party's consumption.",
    image: solutionImages.community,
  },
  {
    number: "05",
    title: "Monitoring and optimization",
    description:
      "Post-installation follow-up to sustain performance over time and anticipate maintenance before it becomes necessary.",
    image: solutionImages.monitoring,
  },
]
