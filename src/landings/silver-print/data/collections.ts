// Photographs sourced from Unsplash via the `unsplash-images` Skill.
// Search, selection and download-tracking handled during the editorial task
// that populated this file — production only ever renders the persisted `src`
// below (images.unsplash.com), never the API.
import type { Collection } from "../types"

const UTM = "utm_source=astro_landings_gallery&utm_medium=referral"

export const collections: Collection[] = [
  {
    id: "architecture",
    name: "Architecture",
    photographer: "Thomas Hart",
    price: "From $320",
    description:
      "Concrete, glass and steel in compositions that reveal the invisible geometry of our built world.",
    worksCount: 143,
    image: {
      id: "KgLtFCgfC28",
      src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=80",
      alt: "Geometric facade of a modern building with repeating grid windows",
      width: 4000,
      height: 6000,
      author: "The Roaming Platypus",
      authorUrl: `https://unsplash.com/@the_roaming_platypus?${UTM}`,
      sourceUrl: `https://unsplash.com/photos/1486325212027-8081e485255e?${UTM}`,
      unsplashUrl: `https://unsplash.com/?${UTM}`,
      downloadLocation:
        "https://api.unsplash.com/photos/1486325212027-8081e485255e/download",
    },
  },
  {
    id: "nature",
    name: "Nature",
    photographer: "Camille Beaumont",
    price: "From $280",
    description:
      "Pristine wilderness captured with the stillness and gravity it deserves — from mountain lakes to storm-lit coasts.",
    worksCount: 167,
    image: {
      id: "1506905925346-21bda4d32df4",
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
      alt: "Crystal-clear alpine lake reflecting surrounding mountains in stillness",
      width: 6000,
      height: 4000,
      author: "Jake Blucker",
      authorUrl: `https://unsplash.com/@jakeblucker?${UTM}`,
      sourceUrl: `https://unsplash.com/photos/1506905925346-21bda4d32df4?${UTM}`,
      unsplashUrl: `https://unsplash.com/?${UTM}`,
      downloadLocation:
        "https://api.unsplash.com/photos/1506905925346-21bda4d32df4/download",
    },
  },
  {
    id: "street",
    name: "Street",
    photographer: "Marcus Okoro",
    price: "From $240",
    description:
      "The city as stage — decisive moments, chance encounters and the poetry of ordinary life.",
    worksCount: 211,
    image: {
      id: "1477959858617-67f85cf4f1df",
      src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80",
      alt: "Dense city skyline illuminated at dusk, viewed from above",
      width: 5616,
      height: 3744,
      author: "Pedro Lastra",
      authorUrl: `https://unsplash.com/@pedro_lastra?${UTM}`,
      sourceUrl: `https://unsplash.com/photos/1477959858617-67f85cf4f1df?${UTM}`,
      unsplashUrl: `https://unsplash.com/?${UTM}`,
      downloadLocation:
        "https://api.unsplash.com/photos/1477959858617-67f85cf4f1df/download",
    },
  },
  {
    id: "portrait",
    name: "Portrait",
    photographer: "Emilia Novak",
    price: "From $360",
    description:
      "The interior life rendered visible — intimate studies of light, skin, gaze and presence.",
    worksCount: 98,
    image: {
      id: "1531746020798-e6953c6e8e04",
      src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=900&h=1200&q=80",
      alt: "Minimalist portrait of a person against a plain background, soft light",
      width: 3456,
      height: 5184,
      author: "Alexandru Zdrobău",
      authorUrl: `https://unsplash.com/@alexanderzdrobau?${UTM}`,
      sourceUrl: `https://unsplash.com/photos/1531746020798-e6953c6e8e04?${UTM}`,
      unsplashUrl: `https://unsplash.com/?${UTM}`,
      downloadLocation:
        "https://api.unsplash.com/photos/1531746020798-e6953c6e8e04/download",
    },
  },
  {
    id: "travel",
    name: "Travel",
    photographer: "Jin Hasegawa",
    price: "From $300",
    description:
      "Distant horizons and foreign light — photographs made in the patient hours between arrival and belonging.",
    worksCount: 89,
    image: {
      id: "1469854523086-cc02fe5d8800",
      src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
      alt: "Winding mountain road viewed from above in dramatic late-afternoon light",
      width: 6000,
      height: 4000,
      author: "Andrik Langfield",
      authorUrl: `https://unsplash.com/@andriklangfield?${UTM}`,
      sourceUrl: `https://unsplash.com/photos/1469854523086-cc02fe5d8800?${UTM}`,
      unsplashUrl: `https://unsplash.com/?${UTM}`,
      downloadLocation:
        "https://api.unsplash.com/photos/1469854523086-cc02fe5d8800/download",
    },
  },
  {
    id: "minimal",
    name: "Minimal",
    photographer: "Thomas Hart",
    price: "From $260",
    description:
      "When composition strips down to essentials — shadow, form, negative space and the eloquence of restraint.",
    worksCount: 76,
    image: {
      id: "1547586696-ea22b4d4235d",
      src: "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?auto=format&fit=crop&w=1200&q=80",
      alt: "Overhead flat-lay of clean white minimal objects arranged with precision",
      width: 5000,
      height: 3333,
      author: "Debby Hudson",
      authorUrl: `https://unsplash.com/@hudsoncrafted?${UTM}`,
      sourceUrl: `https://unsplash.com/photos/1547586696-ea22b4d4235d?${UTM}`,
      unsplashUrl: `https://unsplash.com/?${UTM}`,
      downloadLocation:
        "https://api.unsplash.com/photos/1547586696-ea22b4d4235d/download",
    },
  },
  {
    id: "black-and-white",
    name: "Black & White",
    photographer: "Marcus Okoro",
    price: "From $290",
    description:
      "Stripped of color, the world becomes form, tone and contrast — a vocabulary that precedes photography itself.",
    worksCount: 134,
    image: {
      id: "5Kc31_KqF6g",
      src: "https://images.unsplash.com/photo-1776376668004-258c5c688d1f?auto=format&fit=crop&w=1200&q=80",
      alt: "People with umbrellas walking on a wet city street in heavy rain",
      width: 4240,
      height: 2832,
      author: "Dominic Kurniawan Suryaputra",
      authorUrl: `https://unsplash.com/@d_ks11?${UTM}`,
      sourceUrl: `https://unsplash.com/photos/people-with-umbrellas-walk-on-a-wet-city-street-5Kc31_KqF6g?${UTM}`,
      unsplashUrl: `https://unsplash.com/?${UTM}`,
      downloadLocation:
        "https://api.unsplash.com/photos/5Kc31_KqF6g/download?ixid=M3wxMDQwNDk5fDB8MXxhbGx8fHx8fHx8fHwxNzg3NjQyMjkwfA",
    },
  },
]
