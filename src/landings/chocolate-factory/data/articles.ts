import type { EditorialPiece } from "../types"
import { articleImages } from "./images"

export const editorialPieces: EditorialPiece[] = [
  {
    eyebrow: "Del grano a la tableta",
    title: "Del cacao al chocolate",
    excerpt:
      "Un mismo grano puede convertirse en decenas de chocolates distintos. La diferencia está en cada decisión tomada entre la selección y el moldeado.",
    image: articleImages.cacaoPods,
    featured: true,
  },
  {
    eyebrow: "Precisión térmica",
    title: "El arte del templado",
    excerpt:
      "Tres curvas de temperatura separan un chocolate brillante y quebradizo de uno opaco y blando.",
    image: articleImages.temperingMachine,
  },
  {
    eyebrow: "Textura y aroma",
    title: "Qué ocurre durante el conchado",
    excerpt:
      "Horas de fricción continua eliminan la acidez residual y redondean el aroma final del chocolate.",
    image: articleImages.conchingDrum,
  },
  {
    eyebrow: "El número que más se pregunta",
    title: "Cómo se define el porcentaje de cacao",
    excerpt:
      "El porcentaje indica cuánto del producto procede del cacao, no su calidad ni su intensidad de sabor.",
    image: articleImages.cacaoPercentage,
  },
  {
    eyebrow: "El último control",
    title: "Textura, aroma y acabado",
    excerpt:
      "Antes de salir de fábrica, cada lote se cata para verificar snap, brillo, fusión en boca y persistencia aromática.",
    image: articleImages.qualityControl,
  },
]
