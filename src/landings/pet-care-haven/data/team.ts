// Pet Care Haven — fictional caregiver profiles paired with real Unsplash
// portrait photography, per the unsplash-images Skill (same treatment as
// the "photographers" reference profiles in the aperture-editions landing).
// None of these people exist; the photographs are real and correctly
// attributed to their actual photographers.
import type { Caregiver } from "../types"

export const caregivers: Caregiver[] = [
  {
    name: "Renata Solis",
    role: "Lead caregiver",
    specialty: "Canine behavior and socialization",
    trait: "Never forces a greeting: lets every dog decide when to approach.",
    image: {
      id: "rm7rZYdl3rY",
      src: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8dmV0ZXJpbmFyeSUyMHN0YWZmJTIwcG9ydHJhaXQlMjBzbWlsaW5nJTIwcHJvZmVzc2lvbmFsfGVufDF8MXx8fDE3ODc2NDY2ODR8MA&ixlib=rb-4.1.0",
      alt: "Professional portrait of a caregiver with crossed arms",
      width: 4480,
      height: 6720,
      color: "#060505",
      author: "Ocho Artex Media",
      authorUrl:
        "https://unsplash.com/@ochoartex?utm_source=astro_landings_gallery&utm_medium=referral",
      sourceUrl:
        "https://unsplash.com/photos/woman-in-teal-medical-scrubs-rm7rZYdl3rY?utm_source=astro_landings_gallery&utm_medium=referral",
      unsplashUrl:
        "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
      downloadLocation:
        "https://api.unsplash.com/photos/rm7rZYdl3rY/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8dmV0ZXJpbmFyeSUyMHN0YWZmJTIwcG9ydHJhaXQlMjBzbWlsaW5nJTIwcHJvZmVzc2lvbmFsfGVufDF8MXx8fDE3ODc2NDY2ODR8MA",
    },
  },
  {
    name: "Julia Amengual",
    role: "Wellbeing lead",
    specialty: "Veterinary follow-up and senior protocols",
    trait: "Keeps her own notebook with the exact routine of every senior pet.",
    image: {
      id: "_4xStiTXY1o",
      src: "https://images.unsplash.com/photo-1770134223774-13b735e29201?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NXx8dmV0ZXJpbmFyeSUyMHN0YWZmJTIwcG9ydHJhaXQlMjBzbWlsaW5nJTIwcHJvZmVzc2lvbmFsfGVufDF8MXx8fDE3ODc2NDY2ODR8MA&ixlib=rb-4.1.0",
      alt: "Professional portrait of a caregiver smiling, wearing glasses",
      width: 3000,
      height: 4243,
      color: "#8c7373",
      author: "Beatriz Mendez",
      authorUrl:
        "https://unsplash.com/@beatrizmendez?utm_source=astro_landings_gallery&utm_medium=referral",
      sourceUrl:
        "https://unsplash.com/photos/a-woman-in-blue-scrubs-with-glasses-smiles-_4xStiTXY1o?utm_source=astro_landings_gallery&utm_medium=referral",
      unsplashUrl:
        "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
      downloadLocation:
        "https://api.unsplash.com/photos/_4xStiTXY1o/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NXx8dmV0ZXJpbmFyeSUyMHN0YWZmJTIwcG9ydHJhaXQlMjBzbWlsaW5nJTIwcHJvZmVzc2lvbmFsfGVufDF8MXx8fDE3ODc2NDY2ODR8MA",
    },
  },
]
