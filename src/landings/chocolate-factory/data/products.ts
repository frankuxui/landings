import type { Product } from "../types"
import { productImages } from "./images"

export const products: Product[] = [
  {
    name: "Dark 85%",
    cacaoContent: "85% cacao",
    format: "100 g bar",
    description:
      "Single origin, short roast, and long conching for an intense dark chocolate without harsh bitterness.",
    notes: ["Roasted cacao", "Nuts", "Dry finish"],
    image: productImages.darkBar,
  },
  {
    name: "House Milk",
    cacaoContent: "45% cacao",
    format: "100 g bar",
    description:
      "Our milk chocolate classic: creamy, balanced, made for everyday enjoyment.",
    notes: ["Caramel", "Whole milk", "Vanilla"],
    image: productImages.milkBar,
  },
  {
    name: "Single-Origin Cacao",
    cacaoContent: "100% cacao",
    format: "200 g bag",
    description:
      "Pure cacao paste from a single farm, for professional pastry work and hot chocolate.",
    notes: ["No additives", "Farm traceability", "Professional use"],
    image: productImages.cacaoPaste,
  },
  {
    name: "Special Edition Bar",
    cacaoContent: "70% cacao",
    format: "90 g bar",
    description:
      "A seasonal micro-batch with dried fig inclusions and a finer temper than usual.",
    notes: ["Dried fig", "Fine temper", "Short run"],
    image: productImages.specialEdition,
  },
  {
    name: "Limited Collection",
    cacaoContent: "4-piece selection",
    format: "160 g box",
    description:
      "Four distinct origins in bonbon form, presented in a numbered factory box.",
    notes: ["Four origins", "Numbered box", "Limited edition"],
    image: productImages.limitedBox,
  },
]
