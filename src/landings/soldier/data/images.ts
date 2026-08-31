export type UnsplashImage = {
  id: string
  key: string
  src: string
  alt: string
  width: number
  height: number
  color: string
  author: string
  authorUrl: string
  sourceUrl: string
  unsplashUrl: string
  downloadLocation: string
}

const utm = "utm_source=astro_landings_gallery&utm_medium=referral"

export const images: Record<string, UnsplashImage> = {
  patrol: {
    id: "vRMmUjwZkCQ",
    key: "patrol",
    src: "https://images.unsplash.com/photo-1653451643028-e639abea333b?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0",
    alt: "A small training patrol moving along an empty road with heavy field packs.",
    width: 1000,
    height: 769,
    color: "#676c65",
    author: "Niamat Ullah",
    authorUrl: `https://unsplash.com/@niull8664?${utm}`,
    sourceUrl: `https://unsplash.com/photos/a-group-of-soldiers-walking-down-a-road-vRMmUjwZkCQ?${utm}`,
    unsplashUrl: `https://unsplash.com/?${utm}`,
    downloadLocation: "https://api.unsplash.com/photos/vRMmUjwZkCQ/download",
  },
  operator: {
    id: "R_6kw7NUTLY",
    key: "operator",
    src: "https://images.unsplash.com/photo-1630534658718-395efda906cb?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0",
    alt: "A field operator in full camouflage gear holding a rifle against a dark background.",
    width: 4000,
    height: 5000,
    color: "#262626",
    author: "Alexander Jawfox",
    authorUrl: `https://unsplash.com/@jawfox_photography?${utm}`,
    sourceUrl: `https://unsplash.com/photos/R_6kw7NUTLY?${utm}`,
    unsplashUrl: `https://unsplash.com/?${utm}`,
    downloadLocation: "https://api.unsplash.com/photos/R_6kw7NUTLY/download",
  },
  forest: {
    id: "n61Cc60jXHo",
    key: "forest",
    src: "https://images.unsplash.com/photo-1778586288573-ef24acae4b4b?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0",
    alt: "A camouflaged soldier crouching low in an autumn forest during a field exercise.",
    width: 4000,
    height: 6000,
    color: "#594a3a",
    author: "Mikhail Mamaev",
    authorUrl: `https://unsplash.com/@mikhail_mamaev?${utm}`,
    sourceUrl: `https://unsplash.com/photos/n61Cc60jXHo?${utm}`,
    unsplashUrl: `https://unsplash.com/?${utm}`,
    downloadLocation: "https://api.unsplash.com/photos/n61Cc60jXHo/download",
  },
  helicopter: {
    id: "ianPiLGoZBM",
    key: "helicopter",
    src: "https://images.unsplash.com/photo-1552140498-f448ffb1301f?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0",
    alt: "A black and grey military helicopter on the ground ready for transit.",
    width: 4000,
    height: 4320,
    color: "#404040",
    author: "Terence Burke",
    authorUrl: `https://unsplash.com/@ancientwanderer?${utm}`,
    sourceUrl: `https://unsplash.com/photos/ianPiLGoZBM?${utm}`,
    unsplashUrl: `https://unsplash.com/?${utm}`,
    downloadLocation: "https://api.unsplash.com/photos/ianPiLGoZBM/download",
  },
  loadout: {
    id: "CZmogzQUVd0",
    key: "loadout",
    src: "https://images.unsplash.com/photo-1771241137542-c27f466b2a81?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0",
    alt: "Tactical gear and equipment laid out in a camouflage pattern, ready for deployment.",
    width: 4000,
    height: 6000,
    color: "#4a4a3a",
    author: "Taiwangun",
    authorUrl: `https://unsplash.com/@taiwangun?${utm}`,
    sourceUrl: `https://unsplash.com/photos/CZmogzQUVd0?${utm}`,
    unsplashUrl: `https://unsplash.com/?${utm}`,
    downloadLocation: "https://api.unsplash.com/photos/CZmogzQUVd0/download",
  },
  discipline: {
    id: "Mu0ExSKTOBs",
    key: "discipline",
    src: "https://images.unsplash.com/photo-1595472968262-48209bf5b390?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0",
    alt: "A man wearing a black helmet holding a rifle.",
    width: 6720,
    height: 4480,
    color: "#262626",
    author: "Alexander Jawfox",
    authorUrl: `https://unsplash.com/@jawfox_photography?${utm}`,
    sourceUrl: `https://unsplash.com/photos/Mu0ExSKTOBs?${utm}`,
    unsplashUrl: `https://unsplash.com/?${utm}`,
    downloadLocation: "https://api.unsplash.com/photos/Mu0ExSKTOBs/download",
  },
  smoke: {
    id: "2S2F2exmbhw",
    key: "smoke",
    src: "https://images.unsplash.com/photo-1487174244970-cd18784bb4a4?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0",
    alt: "A lone silhouette standing still inside dense smoke, the last moment before action.",
    width: 6016,
    height: 4000,
    color: "#262626",
    author: "Elti Meshau",
    authorUrl: `https://unsplash.com/@eltimeshau?${utm}`,
    sourceUrl: `https://unsplash.com/photos/silhouette-of-person-on-a-dark-place-with-smoke-2S2F2exmbhw?${utm}`,
    unsplashUrl: `https://unsplash.com/?${utm}`,
    downloadLocation: "https://api.unsplash.com/photos/2S2F2exmbhw/download",
  },
}

export const allImages: UnsplashImage[] = [
  images.patrol,
  images.operator,
  images.forest,
  images.helicopter,
  images.loadout,
  images.discipline,
  images.smoke,
]
