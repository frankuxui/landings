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
    id: "vRMmUjwZkCQ",
    key: "operator",
    src: "https://images.unsplash.com/photo-1653451643028-e639abea333b?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0",
    alt: "A field operator shape from the same training patrol, used as a cropped identity layer.",
    width: 1000,
    height: 769,
    color: "#676c65",
    author: "Niamat Ullah",
    authorUrl: `https://unsplash.com/@niull8664?${utm}`,
    sourceUrl: `https://unsplash.com/photos/a-group-of-soldiers-walking-down-a-road-vRMmUjwZkCQ?${utm}`,
    unsplashUrl: `https://unsplash.com/?${utm}`,
    downloadLocation: "https://api.unsplash.com/photos/vRMmUjwZkCQ/download",
  },
  forest: {
    id: "vRMmUjwZkCQ",
    key: "forest",
    src: "https://images.unsplash.com/photo-1653451643028-e639abea333b?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0",
    alt: "A desaturated patrol crop standing in for collective field movement.",
    width: 1000,
    height: 769,
    color: "#676c65",
    author: "Niamat Ullah",
    authorUrl: `https://unsplash.com/@niull8664?${utm}`,
    sourceUrl: `https://unsplash.com/photos/a-group-of-soldiers-walking-down-a-road-vRMmUjwZkCQ?${utm}`,
    unsplashUrl: `https://unsplash.com/?${utm}`,
    downloadLocation: "https://api.unsplash.com/photos/vRMmUjwZkCQ/download",
  },
  helicopter: {
    id: "vRMmUjwZkCQ",
    key: "helicopter",
    src: "https://images.unsplash.com/photo-1653451643028-e639abea333b?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0",
    alt: "A hard-cropped patrol frame used as an abstract transit archive panel.",
    width: 1000,
    height: 769,
    color: "#676c65",
    author: "Niamat Ullah",
    authorUrl: `https://unsplash.com/@niull8664?${utm}`,
    sourceUrl: `https://unsplash.com/photos/a-group-of-soldiers-walking-down-a-road-vRMmUjwZkCQ?${utm}`,
    unsplashUrl: `https://unsplash.com/?${utm}`,
    downloadLocation: "https://api.unsplash.com/photos/vRMmUjwZkCQ/download",
  },
  loadout: {
    id: "vRMmUjwZkCQ",
    key: "loadout",
    src: "https://images.unsplash.com/photo-1653451643028-e639abea333b?ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0",
    alt: "Heavy packs on a patrol, cropped to emphasize preparation and carried weight.",
    width: 1000,
    height: 769,
    color: "#676c65",
    author: "Niamat Ullah",
    authorUrl: `https://unsplash.com/@niull8664?${utm}`,
    sourceUrl: `https://unsplash.com/photos/a-group-of-soldiers-walking-down-a-road-vRMmUjwZkCQ?${utm}`,
    unsplashUrl: `https://unsplash.com/?${utm}`,
    downloadLocation: "https://api.unsplash.com/photos/vRMmUjwZkCQ/download",
  },
}

export const allImages: UnsplashImage[] = [images.patrol]
