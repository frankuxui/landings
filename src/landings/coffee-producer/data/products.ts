import type { Product } from "../types"
import { productImages } from "./images"

export const products: Product[] = [
  {
    name: "Single Origin — Sierra Alta",
    origin: "Example plot, 1,900 m",
    roast: "Light-medium roast",
    format: "250 g bag, whole bean",
    description:
      "A single origin from our highest plots, picked at peak ripeness and dried slowly to preserve its subtle notes.",
    tastingNotes: ["Cocoa", "Caramel", "Red fruit"],
    image: productImages.singleOrigin,
  },
  {
    name: "House Espresso",
    origin: "Blend of partner farms",
    roast: "Medium-dark roast",
    format: "250 g bag, whole bean or ground",
    description:
      "Built for the espresso machine: dense body, lasting crema, and a sweetness that balances the roast's intensity.",
    tastingNotes: ["Dark chocolate", "Hazelnut", "Cane sugar"],
    image: productImages.houseEspresso,
  },
  {
    name: "Vientoclaro Classic",
    origin: "Mid-valley plots, 1,400–1,600 m",
    roast: "Medium roast",
    format: "250 g bag, whole bean or ground",
    description:
      "Our everyday coffee: balanced, versatile, and equally enjoyable in a filter brewer or a stovetop moka pot.",
    tastingNotes: ["Apple", "Honey", "Almond"],
    image: productImages.vientoclaroClassic,
  },
  {
    name: "Special Edition — High-Altitude Lot",
    origin: "Example family plot, honey process",
    roast: "Light roast",
    format: "200 g bag, limited micro-lot",
    description:
      "A short-run micro-lot, honey processed and hand-sorted bean by bean on our founding farm.",
    tastingNotes: ["Jasmine", "Mango", "Panela"],
    image: productImages.specialEdition,
  },
]
