import type { ArchiveIssue, UnsplashImage } from "../types"

// Six black-and-white architecture photographs, chosen from a single search
// so the "past issues" carousel reads as one coherent editorial voice — see
// the unsplash-images Skill §6.3/§7.1. Real subject match to each issue's
// headline was not the goal here (a magazine's real archive covers vary
// freely); tonal and compositional consistency across the set was.
const issue23Image: UnsplashImage = {
  id: "Mrzh7wMWcbs",
  src: "https://images.unsplash.com/photo-1630041353236-d1e5a3c23116?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8YXJjaGl0ZWN0dXJlJTIwcHJpbnQlMjBtYWdhemluZSUyMGJsYWNrJTIwd2hpdGUlMjBtaW5pbWFsfGVufDB8MXx8fDE3ODc2ODE4ODR8MA&ixlib=rb-4.1.0",
  alt: "Black-and-white concrete building under a pale sky, cover image for Issue No. 23",
  width: 4338,
  height: 7712,
  color: "#c0c0c0",
  author: "Alaa Cherni",
  authorUrl:
    "https://unsplash.com/@alaa_cherni?utm_source=astro_landings_gallery&utm_medium=referral",
  sourceUrl:
    "https://unsplash.com/photos/black-and-white-concrete-building-under-white-clouds-during-daytime-Mrzh7wMWcbs?utm_source=astro_landings_gallery&utm_medium=referral",
  unsplashUrl:
    "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
  downloadLocation:
    "https://api.unsplash.com/photos/Mrzh7wMWcbs/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8YXJjaGl0ZWN0dXJlJTIwcHJpbnQlMjBtYWdhemluZSUyMGJsYWNrJTIwd2hpdGUlMjBtaW5pbWFsfGVufDB8MXx8fDE3ODc2ODE4ODR8MA",
}

const issue22Image: UnsplashImage = {
  id: "L3UZr6CAkbU",
  src: "https://images.unsplash.com/photo-1559739790-f49edd6e3d32?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8YXJjaGl0ZWN0dXJlJTIwcHJpbnQlMjBtYWdhemluZSUyMGJsYWNrJTIwd2hpdGUlMjBtaW5pbWFsfGVufDB8MXx8fDE3ODc2ODE4ODR8MA&ixlib=rb-4.1.0",
  alt: "Black-and-white spiral staircase, cover image for Issue No. 22",
  width: 3024,
  height: 4032,
  color: "#f3f3f3",
  author: "Robin Schreiner",
  authorUrl:
    "https://unsplash.com/@robin_schreiner?utm_source=astro_landings_gallery&utm_medium=referral",
  sourceUrl:
    "https://unsplash.com/photos/a-black-and-white-photo-of-a-spiral-staircase-L3UZr6CAkbU?utm_source=astro_landings_gallery&utm_medium=referral",
  unsplashUrl:
    "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
  downloadLocation:
    "https://api.unsplash.com/photos/L3UZr6CAkbU/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8YXJjaGl0ZWN0dXJlJTIwcHJpbnQlMjBtYWdhemluZSUyMGJsYWNrJTIwd2hpdGUlMjBtaW5pbWFsfGVufDB8MXx8fDE3ODc2ODE4ODR8MA",
}

const issue21Image: UnsplashImage = {
  id: "pW1w3RfUJEs",
  src: "https://images.unsplash.com/photo-1693903395525-dcdf17566d0c?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8YXJjaGl0ZWN0dXJlJTIwcHJpbnQlMjBtYWdhemluZSUyMGJsYWNrJTIwd2hpdGUlMjBtaW5pbWFsfGVufDB8MXx8fDE3ODc2ODE4ODR8MA&ixlib=rb-4.1.0",
  alt: "Black-and-white photo of the top of a building, cover image for Issue No. 21",
  width: 3829,
  height: 4786,
  color: "#f3f3f3",
  author: "Joakim Nådell",
  authorUrl:
    "https://unsplash.com/@joakimnadell?utm_source=astro_landings_gallery&utm_medium=referral",
  sourceUrl:
    "https://unsplash.com/photos/a-black-and-white-photo-of-the-top-of-a-building-pW1w3RfUJEs?utm_source=astro_landings_gallery&utm_medium=referral",
  unsplashUrl:
    "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
  downloadLocation:
    "https://api.unsplash.com/photos/pW1w3RfUJEs/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8YXJjaGl0ZWN0dXJlJTIwcHJpbnQlMjBtYWdhemluZSUyMGJsYWNrJTIwd2hpdGUlMjBtaW5pbWFsfGVufDB8MXx8fDE3ODc2ODE4ODR8MA",
}

const issue20Image: UnsplashImage = {
  id: "P26JbxnaE4g",
  src: "https://images.unsplash.com/photo-1692007444301-fea0ab193247?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NHx8YXJjaGl0ZWN0dXJlJTIwcHJpbnQlMjBtYWdhemluZSUyMGJsYWNrJTIwd2hpdGUlMjBtaW5pbWFsfGVufDB8MXx8fDE3ODc2ODE4ODR8MA&ixlib=rb-4.1.0",
  alt: "Black-and-white photo of a curved building, cover image for Issue No. 20",
  width: 4983,
  height: 7467,
  color: "#f3f3f3",
  author: "blocks",
  authorUrl:
    "https://unsplash.com/@blocks?utm_source=astro_landings_gallery&utm_medium=referral",
  sourceUrl:
    "https://unsplash.com/photos/a-black-and-white-photo-of-a-curved-building-P26JbxnaE4g?utm_source=astro_landings_gallery&utm_medium=referral",
  unsplashUrl:
    "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
  downloadLocation:
    "https://api.unsplash.com/photos/P26JbxnaE4g/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NHx8YXJjaGl0ZWN0dXJlJTIwcHJpbnQlMjBtYWdhemluZSUyMGJsYWNrJTIwd2hpdGUlMjBtaW5pbWFsfGVufDB8MXx8fDE3ODc2ODE4ODR8MA",
}

const issue19Image: UnsplashImage = {
  id: "yADXyB-BhV8",
  src: "https://images.unsplash.com/photo-1559739790-2a4df7c229f5?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NXx8YXJjaGl0ZWN0dXJlJTIwcHJpbnQlMjBtYWdhemluZSUyMGJsYWNrJTIwd2hpdGUlMjBtaW5pbWFsfGVufDB8MXx8fDE3ODc2ODE4ODR8MA&ixlib=rb-4.1.0",
  alt: "Black-and-white stairwell, cover image for Issue No. 19",
  width: 3024,
  height: 4032,
  color: "#d9d9d9",
  author: "Robin Schreiner",
  authorUrl:
    "https://unsplash.com/@robin_schreiner?utm_source=astro_landings_gallery&utm_medium=referral",
  sourceUrl:
    "https://unsplash.com/photos/white-and-black-stairs-yADXyB-BhV8?utm_source=astro_landings_gallery&utm_medium=referral",
  unsplashUrl:
    "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
  downloadLocation:
    "https://api.unsplash.com/photos/yADXyB-BhV8/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NXx8YXJjaGl0ZWN0dXJlJTIwcHJpbnQlMjBtYWdhemluZSUyMGJsYWNrJTIwd2hpdGUlMjBtaW5pbWFsfGVufDB8MXx8fDE3ODc2ODE4ODR8MA",
}

const issue18Image: UnsplashImage = {
  id: "EKqFxqm-BFg",
  src: "https://images.unsplash.com/photo-1542753034-928e48a5ce79?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Nnx8YXJjaGl0ZWN0dXJlJTIwcHJpbnQlMjBtYWdhemluZSUyMGJsYWNrJTIwd2hpdGUlMjBtaW5pbWFsfGVufDB8MXx8fDE3ODc2ODE4ODR8MA&ixlib=rb-4.1.0",
  alt: "Black-and-white photo of a tall building, cover image for Issue No. 18",
  width: 3456,
  height: 5184,
  color: "#f3f3f3",
  author: "Jonas Off",
  authorUrl:
    "https://unsplash.com/@jonas_off?utm_source=astro_landings_gallery&utm_medium=referral",
  sourceUrl:
    "https://unsplash.com/photos/a-black-and-white-photo-of-a-tall-building-EKqFxqm-BFg?utm_source=astro_landings_gallery&utm_medium=referral",
  unsplashUrl:
    "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
  downloadLocation:
    "https://api.unsplash.com/photos/EKqFxqm-BFg/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Nnx8YXJjaGl0ZWN0dXJlJTIwcHJpbnQlMjBtYWdhemluZSUyMGJsYWNrJTIwd2hpdGUlMjBtaW5pbWFsfGVufDB8MXx8fDE3ODc2ODE4ODR8MA",
}

export const archiveIssues: ArchiveIssue[] = [
  {
    number: "23",
    title: "The Repair Issue",
    date: "July 2026",
    isoDate: "2026-07-01",
    image: issue23Image,
  },
  {
    number: "22",
    title: "What the Archive Keeps",
    date: "June 2026",
    isoDate: "2026-06-01",
    image: issue22Image,
  },
  {
    number: "21",
    title: "On Working Slowly",
    date: "May 2026",
    isoDate: "2026-05-01",
    image: issue21Image,
  },
  {
    number: "20",
    title: "The Infrastructure Issue",
    date: "April 2026",
    isoDate: "2026-04-01",
    image: issue20Image,
  },
  {
    number: "19",
    title: "Objects Without Owners",
    date: "March 2026",
    isoDate: "2026-03-01",
    image: issue19Image,
  },
  {
    number: "18",
    title: "The Unfinished City",
    date: "February 2026",
    isoDate: "2026-02-01",
    image: issue18Image,
  },
]
