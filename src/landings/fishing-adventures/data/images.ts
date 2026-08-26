import type { UnsplashImage } from "../types"

const utm = "utm_source=astro_landings_gallery&utm_medium=referral"
const profile = (url: string): string => `${url}?${utm}`
const source = (url: string): string => `${url}?${utm}`

export const heroImage: UnsplashImage = {
  id: "qr7tsSwDOg0",
  src: "https://images.unsplash.com/photo-1493787039806-2edcbe808750?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8Zmx5JTIwZmlzaGluZyUyMHJpdmVyJTIwYW5nbGVyJTIwb3V0ZG9vcnN8ZW58MXwwfHx8MTc4NzY5NzMwOXww&ixlib=rb-4.1.0",
  alt: "Angler casting into a mountain river beneath a wide alpine landscape",
  width: 5464,
  height: 3643,
  color: "#c0c0c0",
  author: "Robson Hatsukami Morgan",
  authorUrl: profile("https://unsplash.com/@robsonhmorgan"),
  sourceUrl: source(
    "https://unsplash.com/photos/landscape-photo-of-man-fishing-on-river-near-mountain-alps-qr7tsSwDOg0",
  ),
  unsplashUrl: `https://unsplash.com/?${utm}`,
  downloadLocation:
    "https://api.unsplash.com/photos/qr7tsSwDOg0/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8Zmx5JTIwZmlzaGluZyUyMHJpdmVyJTIwYW5nbGVyJTIwb3V0ZG9vcnN8ZW58MXwwfHx8MTc4NzY5NzMwOXww",
}

export const reelImage: UnsplashImage = {
  id: "ZGRB8TMT6zQ",
  src: "https://images.unsplash.com/photo-1583249598754-b7a2f59651fb?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8ZmlzaGluZyUyMHJlZWwlMjBsdXJlJTIwaGFuZHMlMjBjbG9zZSUyMHVwfGVufDF8MHx8fDE3ODc2OTczMTB8MA&ixlib=rb-4.1.0",
  alt: "Close view of an angler holding a spinning reel beside the water",
  width: 5184,
  height: 3456,
  color: "#404040",
  author: "Brady Rogers",
  authorUrl: profile("https://unsplash.com/@bradydrogers"),
  sourceUrl: source(
    "https://unsplash.com/photos/person-holding-black-and-silver-fishing-reel-ZGRB8TMT6zQ",
  ),
  unsplashUrl: `https://unsplash.com/?${utm}`,
  downloadLocation:
    "https://api.unsplash.com/photos/ZGRB8TMT6zQ/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8ZmlzaGluZyUyMHJlZWwlMjBsdXJlJTIwaGFuZHMlMjBjbG9zZSUyMHVwfGVufDF8MHx8fDE3ODc2OTczMTB8MA",
}

export const portraitImage: UnsplashImage = {
  id: "wK9YUk6MWE0",
  src: "https://images.unsplash.com/photo-1613742518061-7b65f85ec418?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NXx8Zmx5JTIwZmlzaGluZyUyMHJpdmVyJTIwYW5nbGVyJTIwb3V0ZG9vcnN8ZW58MXwwfHx8MTc4NzY5NzMwOXww&ixlib=rb-4.1.0",
  alt: "Angler studying a rod and reel before making the next cast",
  width: 4992,
  height: 3328,
  color: "#c0c059",
  author: "Tim Foster",
  authorUrl: profile("https://unsplash.com/@timberfoster"),
  sourceUrl: source(
    "https://unsplash.com/photos/person-holding-black-and-silver-fishing-rod-wK9YUk6MWE0",
  ),
  unsplashUrl: `https://unsplash.com/?${utm}`,
  downloadLocation:
    "https://api.unsplash.com/photos/wK9YUk6MWE0/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NXx8Zmx5JTIwZmlzaGluZyUyMHJpdmVyJTIwYW5nbGVyJTIwb3V0ZG9vcnN8ZW58MXwwfHx8MTc4NzY5NzMwOXww",
}

export const mountainImage: UnsplashImage = {
  id: "MprDXksPXlE",
  src: "https://images.unsplash.com/photo-1779378027650-3930e4d9f429?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8YW5nbGVyJTIwbW91bnRhaW4lMjBsYWtlJTIwZGF3biUyMG1pc3R8ZW58MXwwfHx8MTc4NzY5NzMwOHww&ixlib=rb-4.1.0",
  alt: "Misty mountain lake reflecting the first light of sunrise",
  width: 7379,
  height: 4936,
  color: "#262626",
  author: "Scott Goodwill",
  authorUrl: profile("https://unsplash.com/@scottagoodwill"),
  sourceUrl: source(
    "https://unsplash.com/photos/misty-lake-reflecting-sunrise-over-mountains-and-forest-MprDXksPXlE",
  ),
  unsplashUrl: `https://unsplash.com/?${utm}`,
  downloadLocation:
    "https://api.unsplash.com/photos/MprDXksPXlE/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8YW5nbGVyJTIwbW91bnRhaW4lMjBsYWtlJTIwZGF3biUyMG1pc3R8ZW58MXwwfHx8MTc4NzY5NzMwOHww",
}

export const lakeImage: UnsplashImage = {
  id: "tr3ogBAj34w",
  src: "https://images.unsplash.com/photo-1689093998548-bc86ae9bc1fb?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8YW5nbGVyJTIwbW91bnRhaW4lMjBsYWtlJTIwZGF3biUyMG1pc3R8ZW58MXwwfHx8MTc4NzY5NzMwOHww&ixlib=rb-4.1.0",
  alt: "Small fishing boat resting on a still forest lake",
  width: 7952,
  height: 5304,
  color: "#a6a6a6",
  author: "Nicole Gaffney",
  authorUrl: profile("https://unsplash.com/@nicolegaffney"),
  sourceUrl: source(
    "https://unsplash.com/photos/a-boat-floating-on-top-of-a-lake-next-to-a-forest-tr3ogBAj34w",
  ),
  unsplashUrl: `https://unsplash.com/?${utm}`,
  downloadLocation:
    "https://api.unsplash.com/photos/tr3ogBAj34w/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8YW5nbGVyJTIwbW91bnRhaW4lMjBsYWtlJTIwZGF3biUyMG1pc3R8ZW58MXwwfHx8MTc4NzY5NzMwOHww",
}

export const riverImage: UnsplashImage = {
  id: "hA9GQ9QzLt4",
  src: "https://images.unsplash.com/photo-1505950476988-702d4a1af500?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Nnx8Zmx5JTIwZmlzaGluZyUyMHJpdmVyJTIwYW5nbGVyJTIwb3V0ZG9vcnN8ZW58MXwwfHx8MTc4NzY5NzMwOXww&ixlib=rb-4.1.0",
  alt: "Solitary angler fishing from rocks in a fast river",
  width: 5760,
  height: 3840,
  color: "#404040",
  author: "Taylor Grote",
  authorUrl: profile("https://unsplash.com/@taylor_grote"),
  sourceUrl: source(
    "https://unsplash.com/photos/man-fishing-river-at-daytime-hA9GQ9QzLt4",
  ),
  unsplashUrl: `https://unsplash.com/?${utm}`,
  downloadLocation:
    "https://api.unsplash.com/photos/hA9GQ9QzLt4/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Nnx8Zmx5JTIwZmlzaGluZyUyMHJpdmVyJTIwYW5nbGVyJTIwb3V0ZG9vcnN8ZW58MXwwfHx8MTc4NzY5NzMwOXww",
}

export const seaImage: UnsplashImage = {
  id: "eXSttBQoYbM",
  src: "https://images.unsplash.com/photo-1469903130378-57b1170cf901?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Nnx8c2VhJTIwZmlzaGluZyUyMHNtYWxsJTIwYm9hdCUyMHN1bnNldHxlbnwxfDB8fHwxNzg3Njk3MzEwfDA&ixlib=rb-4.1.0",
  alt: "Angler standing in silhouette on a small boat at sunset",
  width: 3504,
  height: 2336,
  color: "#c07340",
  author: "Steinar Engeland",
  authorUrl: profile("https://unsplash.com/@steinart"),
  sourceUrl: source(
    "https://unsplash.com/photos/silhouette-photography-of-person-standing-on-boat-eXSttBQoYbM",
  ),
  unsplashUrl: `https://unsplash.com/?${utm}`,
  downloadLocation:
    "https://api.unsplash.com/photos/eXSttBQoYbM/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Nnx8c2VhJTIwZmlzaGluZyUyMHNtYWxsJTIwYm9hdCUyMHN1bnNldHxlbnwxfDB8fHwxNzg3Njk3MzEwfDA",
}

export const handsImage: UnsplashImage = {
  id: "PTWiAcYnkWw",
  src: "https://images.unsplash.com/photo-1505850557988-b858c0aec076?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8ZmlzaGluZyUyMHJlZWwlMjBsdXJlJTIwaGFuZHMlMjBjbG9zZSUyMHVwfGVufDF8MHx8fDE3ODc2OTczMTB8MA&ixlib=rb-4.1.0",
  alt: "Hands adjusting a fishing reel in the field",
  width: 2531,
  height: 1684,
  color: "#26400c",
  author: "Clark Young",
  authorUrl: profile("https://unsplash.com/@cbyoung"),
  sourceUrl: source(
    "https://unsplash.com/photos/person-holding-fishing-reel-PTWiAcYnkWw",
  ),
  unsplashUrl: `https://unsplash.com/?${utm}`,
  downloadLocation:
    "https://api.unsplash.com/photos/PTWiAcYnkWw/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8ZmlzaGluZyUyMHJlZWwlMjBsdXJlJTIwaGFuZHMlMjBjbG9zZSUyMHVwfGVufDF8MHx8fDE3ODc2OTczMTB8MA",
}

export const coastImage: UnsplashImage = {
  id: "VW5-71c0jBM",
  src: "https://images.unsplash.com/photo-1474436264739-43c009d3644e?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NHx8Zmx5JTIwZmlzaGluZyUyMHJpdmVyJTIwYW5nbGVyJTIwb3V0ZG9vcnN8ZW58MXwwfHx8MTc4NzY5NzMwOXww&ixlib=rb-4.1.0",
  alt: "Angler standing on a rocky ledge above deep water",
  width: 4692,
  height: 3128,
  color: "#0c4059",
  author: "Robson Hatsukami Morgan",
  authorUrl: profile("https://unsplash.com/@robsonhmorgan"),
  sourceUrl: source(
    "https://unsplash.com/photos/a-man-standing-on-top-of-a-rock-next-to-a-lake-VW5-71c0jBM",
  ),
  unsplashUrl: `https://unsplash.com/?${utm}`,
  downloadLocation:
    "https://api.unsplash.com/photos/VW5-71c0jBM/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NHx8Zmx5JTIwZmlzaGluZyUyMHJpdmVyJTIwYW5nbGVyJTIwb3V0ZG9vcnN8ZW58MXwwfHx8MTc4NzY5NzMwOXww",
}

export const boatImage: UnsplashImage = {
  id: "tEjBzUns8SQ",
  src: "https://images.unsplash.com/photo-1523005505536-da8021509536?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8c2VhJTIwZmlzaGluZyUyMHNtYWxsJTIwYm9hdCUyMHN1bnNldHxlbnwxfDB8fHwxNzg3Njk3MzEwfDA&ixlib=rb-4.1.0",
  alt: "Small boat crossing calm water beneath a warm sunset sky",
  width: 5937,
  height: 3958,
  color: "#f3c0a6",
  author: "Knut Troim",
  authorUrl: profile("https://unsplash.com/@knutt"),
  sourceUrl: source(
    "https://unsplash.com/photos/white-sailboat-in-body-of-water-during-sunset-tEjBzUns8SQ",
  ),
  unsplashUrl: `https://unsplash.com/?${utm}`,
  downloadLocation:
    "https://api.unsplash.com/photos/tEjBzUns8SQ/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8c2VhJTIwZmlzaGluZyUyMHNtYWxsJTIwYm9hdCUyMHN1bnNldHxlbnwxfDB8fHwxNzg3Njk3MzEwfDA",
}

export const rodImage: UnsplashImage = {
  id: "NSf27dNSCA0",
  src: "https://images.unsplash.com/photo-1452109436269-d410ed332571?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8ZmlzaGluZyUyMHJlZWwlMjBsdXJlJTIwaGFuZHMlMjBjbG9zZSUyMHVwfGVufDF8MHx8fDE3ODc2OTczMTB8MA&ixlib=rb-4.1.0",
  alt: "Close view of a hand gripping a fishing rod above the water",
  width: 5760,
  height: 3840,
  color: "#597373",
  author: "Carl Heyerdahl",
  authorUrl: profile("https://unsplash.com/@carlheyerdahl"),
  sourceUrl: source(
    "https://unsplash.com/photos/person-holding-black-and-brown-fishing-rod-NSf27dNSCA0",
  ),
  unsplashUrl: `https://unsplash.com/?${utm}`,
  downloadLocation:
    "https://api.unsplash.com/photos/NSf27dNSCA0/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8ZmlzaGluZyUyMHJlZWwlMjBsdXJlJTIwaGFuZHMlMjBjbG9zZSUyMHVwfGVufDF8MHx8fDE3ODc2OTczMTB8MA",
}

export const closingImage: UnsplashImage = {
  id: "Jy8PdNvEp2w",
  src: "https://images.unsplash.com/photo-1761816336242-ddeec5263e93?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8YW5nbGVyJTIwbW91bnRhaW4lMjBsYWtlJTIwZGF3biUyMG1pc3R8ZW58MXwwfHx8MTc4NzY5NzMwOHww&ixlib=rb-4.1.0",
  alt: "Calm lake reflecting misty mountains at daybreak",
  width: 4032,
  height: 1908,
  color: "#4073a6",
  author: "Alan Bowman",
  authorUrl: profile("https://unsplash.com/@prophet2018"),
  sourceUrl: source(
    "https://unsplash.com/photos/misty-mountains-reflected-in-a-calm-lake-at-dawn-Jy8PdNvEp2w",
  ),
  unsplashUrl: `https://unsplash.com/?${utm}`,
  downloadLocation:
    "https://api.unsplash.com/photos/Jy8PdNvEp2w/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8YW5nbGVyJTIwbW91bnRhaW4lMjBsYWtlJTIwZGF3biUyMG1pc3R8ZW58MXwwfHx8MTc4NzY5NzMwOHww",
}

export const environmentImages: UnsplashImage[] = [
  mountainImage,
  lakeImage,
  riverImage,
  seaImage,
]
export const storyImages: UnsplashImage[] = [
  riverImage,
  mountainImage,
  seaImage,
]
export const galleryImages: UnsplashImage[] = [
  mountainImage,
  handsImage,
  boatImage,
  coastImage,
]
export const allImages: UnsplashImage[] = [
  heroImage,
  reelImage,
  portraitImage,
  mountainImage,
  lakeImage,
  riverImage,
  seaImage,
  handsImage,
  coastImage,
  boatImage,
  rodImage,
  closingImage,
]
