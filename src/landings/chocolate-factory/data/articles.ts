import type { EditorialPiece } from "../types"
import { articleImages } from "./images"

export const editorialPieces: EditorialPiece[] = [
  {
    eyebrow: "From bean to bar",
    title: "From cacao to chocolate",
    excerpt:
      "The same bean can become dozens of different chocolates. The difference lies in every decision made between selection and molding.",
    image: articleImages.cacaoPods,
    featured: true,
  },
  {
    eyebrow: "Thermal precision",
    title: "The art of tempering",
    excerpt:
      "Three temperature curves separate a glossy, snappy chocolate from one that's dull and soft.",
    image: articleImages.temperingMachine,
  },
  {
    eyebrow: "Texture and aroma",
    title: "What happens during conching",
    excerpt:
      "Hours of continuous friction remove residual acidity and round out the chocolate's final aroma.",
    image: articleImages.conchingDrum,
  },
  {
    eyebrow: "The question we hear most",
    title: "How the cacao percentage is defined",
    excerpt:
      "The percentage indicates how much of the product comes from cacao — not its quality or flavor intensity.",
    image: articleImages.cacaoPercentage,
  },
  {
    eyebrow: "The final check",
    title: "Texture, aroma, and finish",
    excerpt:
      "Before leaving the factory, every batch is tasted to verify snap, gloss, mouthfeel, and lingering aroma.",
    image: articleImages.qualityControl,
  },
]
