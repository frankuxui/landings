import { installationImages } from "./images"
import type { Installation } from "../types"

export const installations: Installation[] = [
  {
    image: installationImages.solarFarm,
    caption: "Ground-mounted plant · Example project",
    ratio: "16 / 10",
    span: "large",
  },
  {
    image: installationImages.residential,
    caption: "Single-family home · City, Country",
    ratio: "3 / 4",
    span: "medium",
  },
  {
    image: installationImages.industrial,
    caption: "Industrial warehouse · City, Country",
    ratio: "4 / 3",
    span: "medium",
  },
  {
    image: installationImages.commercial,
    caption: "Office building · City, Country",
    ratio: "4 / 3",
    span: "medium",
  },
]
