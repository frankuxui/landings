import type { ProcessStep } from "../types"

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Selection",
    description:
      "Every sack of cacao beans is checked lot by lot: moisture, fermentation, and size, before it ever enters the factory.",
    iconLabel: "Selection",
  },
  {
    number: "02",
    title: "Roasting",
    description:
      "Our own roast profiles for each origin, adjusted bean by bean to reveal aroma without scorching the cacao.",
    iconLabel: "Roasting",
  },
  {
    number: "03",
    title: "Grinding",
    description:
      "The shelled beans are ground down into cacao liquor: the liquid base of every chocolate.",
    iconLabel: "Grinding",
  },
  {
    number: "04",
    title: "Refining",
    description:
      "Precision rollers reduce the texture to particles imperceptible on the palate, with no graininess left behind.",
    iconLabel: "Refining",
  },
  {
    number: "05",
    title: "Conching",
    description:
      "Hours of continuous mixing at a controlled temperature that round out flavor, aroma, and final texture.",
    iconLabel: "Conching",
  },
  {
    number: "06",
    title: "Tempering",
    description:
      "Exact temperature curves stabilize the cocoa butter to achieve gloss, snap, and a clean break.",
    iconLabel: "Tempering",
  },
  {
    number: "07",
    title: "Molding",
    description:
      "Tempered chocolate is poured into our own molds, vibrated to release air, and cooled under control.",
    iconLabel: "Molding",
  },
  {
    number: "08",
    title: "Finishing",
    description:
      "Unmolding, piece-by-piece visual inspection, packaging, and batch traceability before leaving the factory.",
    iconLabel: "Finishing",
  },
]
