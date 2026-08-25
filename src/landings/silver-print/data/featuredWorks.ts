// Photographs sourced from Unsplash via the `unsplash-images` Skill.
import type { FeaturedWork } from "../types"

const UTM = "utm_source=astro_landings_gallery&utm_medium=referral"

export const featuredWorks: FeaturedWork[] = [
  {
    id: "geometric-visions-i",
    title: "Geometric Visions I",
    author: "Thomas Hart",
    year: "2024",
    location: "Berlin, Germany",
    technique: "Digital C-Print on Hahnemühle Baryta",
    price: "$1,200",
    description:
      "A study in architectural repetition — the Philharmonie's south facade at 06:14, before the city wakes. Hart's signature approach finds the sacred geometry buried in modernist planning.",
    image: {
      id: "JBkwaYMuhdc",
      src: "https://images.unsplash.com/photo-1544411047-c491e34a24e0?auto=format&fit=crop&w=1200&q=80",
      alt: "Aerial view of a city illuminated at night, dense geometric grid of lights",
      width: 3936,
      height: 2624,
      author: "Andre Benz",
      authorUrl: `https://unsplash.com/@trapnation?${UTM}`,
      sourceUrl: `https://unsplash.com/photos/an-aerial-view-of-a-city-at-night-JBkwaYMuhdc?${UTM}`,
      unsplashUrl: `https://unsplash.com/?${UTM}`,
      downloadLocation:
        "https://api.unsplash.com/photos/JBkwaYMuhdc/download?ixid=M3wxMDQwNDk5fDB8MXxhbGx8fHx8fHx8fHwxNzg3NjQyMjc0fA",
    },
  },
  {
    id: "still-water-alp",
    title: "Still Water, Alp",
    author: "Camille Beaumont",
    year: "2023",
    location: "Appenzell, Switzerland",
    technique: "Pigment Print on Fine Art Cotton",
    price: "$890",
    description:
      "Beaumont arrived at Seealpsee on the fourth morning before dawn. This image captures the 47-second window when mist, stillness and color converged — a landscape that cannot be revisited.",
    image: {
      id: "1506905925346-21bda4d32df4",
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
      alt: "Perfect reflection of alpine mountains in the still surface of a Swiss lake",
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
    id: "corridor-ii",
    title: "Corridor II",
    author: "Marcus Okoro",
    year: "2024",
    location: "Lagos, Nigeria",
    technique: "Archival Pigment Print",
    price: "$760",
    description:
      "Shot in the covered market district during the longest power outage of that summer. The light inventing its own logic. Okoro's street work never poses its subjects — they simply exist.",
    image: {
      id: "1477959858617-67f85cf4f1df",
      src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80",
      alt: "City skyline illuminated at dusk seen from a high vantage point",
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
    id: "presence-no-7",
    title: "Presence No. 7",
    author: "Emilia Novak",
    year: "2025",
    location: "Prague, Czech Republic",
    technique: "Platinum-Palladium Print",
    price: "$1,480",
    description:
      "The seventh image from Novak's two-year Presence series — a meditation on gaze, vulnerability and the contract between photographer and subject. Printed in editions of five.",
    image: {
      id: "1531746020798-e6953c6e8e04",
      src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=900&h=1200&q=80",
      alt: "Close minimalist portrait of a woman in diffused natural light, direct gaze",
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
]
