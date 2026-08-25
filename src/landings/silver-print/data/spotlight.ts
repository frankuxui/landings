// Photographs sourced from Unsplash via the `unsplash-images` Skill.
import type { SpotlightItem } from "../types"

const UTM = "utm_source=astro_landings_gallery&utm_medium=referral"

export const spotlightItems: SpotlightItem[] = [
  {
    id: "sl-01",
    title: "Geometric Visions I",
    author: "Thomas Hart",
    price: "$1,200",
    badge: "New Edition",
    image: {
      id: "JBkwaYMuhdc",
      src: "https://images.unsplash.com/photo-1544411047-c491e34a24e0?auto=format&fit=crop&w=1600&q=80",
      alt: "Aerial city photography at night showing a dense geometric grid of city lights",
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
    id: "sl-02",
    title: "Still Water, Alp",
    author: "Camille Beaumont",
    price: "$890",
    badge: "Collector's Pick",
    image: {
      id: "1506905925346-21bda4d32df4",
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80",
      alt: "Swiss alpine lake with a perfect mirror-like reflection of mountains",
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
    id: "sl-03",
    title: "Nocturne",
    author: "Marcus Okoro",
    price: "$480",
    badge: "Limited Print",
    image: {
      id: "1477959858617-67f85cf4f1df",
      src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1600&q=80",
      alt: "City skyline at dusk with thousands of illuminated windows",
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
    id: "sl-04",
    title: "High Road",
    author: "Jin Hasegawa",
    price: "$560",
    badge: "Best Seller",
    image: {
      id: "1469854523086-cc02fe5d8800",
      src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80",
      alt: "Aerial view of winding mountain road with dramatic highland terrain",
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
    id: "sl-05",
    title: "Presence No. 7",
    author: "Emilia Novak",
    price: "$1,480",
    badge: "Edition of 5",
    image: {
      id: "1531746020798-e6953c6e8e04",
      src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1200&h=1600&q=80",
      alt: "Intimate portrait in soft natural light, plain background, direct gaze",
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
    id: "sl-06",
    title: "Fog Valley",
    author: "Camille Beaumont",
    price: "$580",
    badge: "New Arrival",
    image: {
      id: "1447752875215-b2761acb3c5d",
      src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1600&q=80",
      alt: "Forested valley with layers of morning mist between the trees",
      width: 5000,
      height: 3333,
      author: "Ales Krivec",
      authorUrl: `https://unsplash.com/@aleskrivec?${UTM}`,
      sourceUrl: `https://unsplash.com/photos/1447752875215-b2761acb3c5d?${UTM}`,
      unsplashUrl: `https://unsplash.com/?${UTM}`,
      downloadLocation:
        "https://api.unsplash.com/photos/1447752875215-b2761acb3c5d/download",
    },
  },
]
