// Photographs sourced from Unsplash via the `unsplash-images` Skill. Search
// query, selection reasoning, and download-tracking are handled during the
// editorial task that populates this file — production only ever renders
// the persisted `src` below (images.unsplash.com), never the API.
import type { UnsplashImage } from "../types"

const UTM = "utm_source=astro_landings_gallery&utm_medium=referral"

export const heroImage: UnsplashImage = {
  id: "Ilpf2eUPpUE",
  src: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8bGFyZ2UlMjBzb2xhciUyMGZhcm0lMjBhZXJpYWwlMjB2aWV3JTIwcm93cyUyMHBhbmVsc3xlbnwxfDB8fHwxNzg3NjYzNTEwfDA&ixlib=rb-4.1.0&w=2000&h=1250&fit=crop&auto=format&q=80",
  alt: "Aerial view of a large field covered in rows of dark-blue solar panels",
  width: 3992,
  height: 2992,
  author: "Andreas Gücklhorn",
  authorUrl: `https://unsplash.com/@draufsicht?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/aerial-photography-of-grass-field-with-blue-solar-panels-Ilpf2eUPpUE?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/Ilpf2eUPpUE/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8bGFyZ2UlMjBzb2xhciUyMGZhcm0lMjBhZXJpYWwlMjB2aWV3JTIwcm93cyUyMHBhbmVsc3xlbnwxfDB8fHwxNzg3NjYzNTEwfDA",
}

export const transitionImage: UnsplashImage = {
  id: "fo29TwLF4to",
  src: "https://images.unsplash.com/photo-1642950863398-1fc3600a5313?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8c29sYXIlMjBwb3dlciUyMHBsYW50JTIwZmllbGQlMjBhZXJpYWwlMjByb3dzfGVufDF8MHx8fDE3ODc2NjM1MzR8MA&ixlib=rb-4.1.0&w=2000&h=1250&fit=crop&auto=format&q=80",
  alt: "Aerial view of an extensive solar power plant covering an open field",
  width: 5464,
  height: 3640,
  author: "ダモ リ",
  authorUrl: `https://unsplash.com/@darmau?${UTM}`,
  sourceUrl: `https://unsplash.com/photos/an-aerial-view-of-a-large-solar-power-plant-fo29TwLF4to?${UTM}`,
  unsplashUrl: `https://unsplash.com/?${UTM}`,
  downloadLocation:
    "https://api.unsplash.com/photos/fo29TwLF4to/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8c29sYXIlMjBwb3dlciUyMHBsYW50JTIwZmllbGQlMjBhZXJpYWwlMjByb3dzfGVufDF8MHx8fDE3ODc2NjM1MzR8MA",
}

export const installationImages: Record<string, UnsplashImage> = {
  solarFarm: {
    id: "n2Q4QtRNeUg",
    src: "https://images.unsplash.com/photo-1770936994282-8811fb7129ac?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8c29sYXIlMjBwb3dlciUyMHBsYW50JTIwZmllbGQlMjBhZXJpYWwlMjByb3dzfGVufDF8MHx8fDE3ODc2NjM1MzR8MA&ixlib=rb-4.1.0&w=1600&h=1000&fit=crop&auto=format&q=80",
    alt: "Rows of solar panels seen from above, filling a grassy field",
    width: 4000,
    height: 2250,
    author: "Daniel Miksha",
    authorUrl: `https://unsplash.com/@danielmiksha?${UTM}`,
    sourceUrl: `https://unsplash.com/photos/rows-of-solar-panels-in-a-grassy-field-from-above-n2Q4QtRNeUg?${UTM}`,
    unsplashUrl: `https://unsplash.com/?${UTM}`,
    downloadLocation:
      "https://api.unsplash.com/photos/n2Q4QtRNeUg/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8c29sYXIlMjBwb3dlciUyMHBsYW50JTIwZmllbGQlMjBhZXJpYWwlMjByb3dzfGVufDF8MHx8fDE3ODc2NjM1MzR8MA",
  },
  residential: {
    id: "9CalgkSRZb8",
    src: "https://images.unsplash.com/flagged/photo-1566838616631-f2618f74a6a2?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8cmVzaWRlbnRpYWwlMjBzb2xhciUyMHBhbmVscyUyMHJvb2YlMjBob3VzZXxlbnwxfDF8fHwxNzg3NjYzNTYxfDA&ixlib=rb-4.1.0&w=1200&h=1600&fit=crop&auto=format&q=80",
    alt: "Brick single-family home with solar panels covering its roof",
    width: 3361,
    height: 5041,
    author: "Vivint Solar",
    authorUrl: `https://unsplash.com/@vivintsolar?${UTM}`,
    sourceUrl: `https://unsplash.com/photos/brown-brick-house-with-solar-panels-on-roof-9CalgkSRZb8?${UTM}`,
    unsplashUrl: `https://unsplash.com/?${UTM}`,
    downloadLocation:
      "https://api.unsplash.com/photos/9CalgkSRZb8/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8cmVzaWRlbnRpYWwlMjBzb2xhciUyMHBhbmVscyUyMHJvb2YlMjBob3VzZXxlbnwxfDF8fHwxNzg3NjYzNTYxfDA",
  },
  industrial: {
    id: "G73Y_MLPmuI",
    src: "https://images.unsplash.com/photo-1786913507799-0ddbb3e7dbb6?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8aW5kdXN0cmlhbCUyMHdhcmVob3VzZSUyMHJvb2Z0b3AlMjBzb2xhciUyMHBhbmVscyUyMGxhcmdlfGVufDF8MHx8fDE3ODc2NjM1Nzl8MA&ixlib=rb-4.1.0&w=1600&h=1200&fit=crop&auto=format&q=80",
    alt: "Aerial view of a large industrial warehouse with its entire roof covered in solar panels",
    width: 4096,
    height: 2763,
    author: "Bernd Dittrich",
    authorUrl: `https://unsplash.com/@hdbernd?${UTM}`,
    sourceUrl: `https://unsplash.com/photos/industrial-warehouse-with-solar-roof-panels-G73Y_MLPmuI?${UTM}`,
    unsplashUrl: `https://unsplash.com/?${UTM}`,
    downloadLocation:
      "https://api.unsplash.com/photos/G73Y_MLPmuI/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8aW5kdXN0cmlhbCUyMHdhcmVob3VzZSUyMHJvb2Z0b3AlMjBzb2xhciUyMHBhbmVscyUyMGxhcmdlfGVufDF8MHx8fDE3ODc2NjM1Nzl8MA",
  },
  commercial: {
    id: "aQOzmgcT6sI",
    src: "https://images.unsplash.com/photo-1617269778723-73a40cf299bd?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8Y29tbWVyY2lhbCUyMGJ1aWxkaW5nJTIwcm9vZnRvcCUyMHNvbGFyJTIwcGFuZWxzJTIwb2ZmaWNlfGVufDF8MHx8fDE3ODc2NjM1Njh8MA&ixlib=rb-4.1.0&w=1600&h=1200&fit=crop&auto=format&q=80",
    alt: "Close rows of solar panels covering an office building's flat roof",
    width: 5616,
    height: 3744,
    author: "Jeroen van de Water",
    authorUrl: `https://unsplash.com/@joenevdw?${UTM}`,
    sourceUrl: `https://unsplash.com/photos/black-and-white-solar-panels-aQOzmgcT6sI?${UTM}`,
    unsplashUrl: `https://unsplash.com/?${UTM}`,
    downloadLocation:
      "https://api.unsplash.com/photos/aQOzmgcT6sI/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8Y29tbWVyY2lhbCUyMGJ1aWxkaW5nJTIwcm9vZnRvcCUyMHNvbGFyJTIwcGFuZWxzJTIwb2ZmaWNlfGVufDF8MHx8fDE3ODc2NjM1Njh8MA",
  },
}

export const solutionImages: Record<string, UnsplashImage> = {
  residential: {
    id: "Ja8t8nJN2I4",
    src: "https://images.unsplash.com/photo-1655300256335-beef51a914fe?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8cmVzaWRlbnRpYWwlMjByb29mdG9wJTIwc29sYXIlMjBwYW5lbHMlMjBob3VzZXxlbnwxfDB8fHwxNzg3NjYzNTQ3fDA&ixlib=rb-4.1.0&w=1200&h=900&fit=crop&auto=format&q=80",
    alt: "Single-family house with solar panels installed across its roof",
    width: 3936,
    height: 2216,
    author: "Watt A Lot",
    authorUrl: `https://unsplash.com/@wattalot?${UTM}`,
    sourceUrl: `https://unsplash.com/photos/a-house-with-solar-panels-Ja8t8nJN2I4?${UTM}`,
    unsplashUrl: `https://unsplash.com/?${UTM}`,
    downloadLocation:
      "https://api.unsplash.com/photos/Ja8t8nJN2I4/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8cmVzaWRlbnRpYWwlMjByb29mdG9wJTIwc29sYXIlMjBwYW5lbHMlMjBob3VzZXxlbnwxfDB8fHwxNzg3NjYzNTQ3fDA",
  },
  commercial: {
    id: "eNzotIHdUsY",
    src: "https://images.unsplash.com/photo-1698755394258-3c2c3dd9448f?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NHx8Y29tbWVyY2lhbCUyMGJ1aWxkaW5nJTIwcm9vZnRvcCUyMHNvbGFyJTIwcGFuZWxzJTIwb2ZmaWNlfGVufDF8MHx8fDE3ODc2NjM1Njh8MA&ixlib=rb-4.1.0&w=1200&h=900&fit=crop&auto=format&q=80",
    alt: "Solar panels installed on the flat roof of a commercial building",
    width: 3712,
    height: 2712,
    author: "Dad Hotel",
    authorUrl: `https://unsplash.com/@dadhotel?${UTM}`,
    sourceUrl: `https://unsplash.com/photos/solar-panels-on-the-roof-of-a-building-eNzotIHdUsY?${UTM}`,
    unsplashUrl: `https://unsplash.com/?${UTM}`,
    downloadLocation:
      "https://api.unsplash.com/photos/eNzotIHdUsY/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NHx8Y29tbWVyY2lhbCUyMGJ1aWxkaW5nJTIwcm9vZnRvcCUyMHNvbGFyJTIwcGFuZWxzJTIwb2ZmaWNlfGVufDF8MHx8fDE3ODc2NjM1Njh8MA",
  },
  industrial: {
    id: "KSbJu7bov8Q",
    src: "https://images.unsplash.com/photo-1786913508480-2dcec035a84a?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8aW5kdXN0cmlhbCUyMHdhcmVob3VzZSUyMHJvb2Z0b3AlMjBzb2xhciUyMHBhbmVscyUyMGxhcmdlfGVufDF8MHx8fDE3ODc2NjM1Nzl8MA&ixlib=rb-4.1.0&w=1200&h=900&fit=crop&auto=format&q=80",
    alt: "Aerial view of a large warehouse roof covered in solar panels beside open fields",
    width: 4096,
    height: 3064,
    author: "Bernd Dittrich",
    authorUrl: `https://unsplash.com/@hdbernd?${UTM}`,
    sourceUrl: `https://unsplash.com/photos/warehouse-roof-with-solar-panels-KSbJu7bov8Q?${UTM}`,
    unsplashUrl: `https://unsplash.com/?${UTM}`,
    downloadLocation:
      "https://api.unsplash.com/photos/KSbJu7bov8Q/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8aW5kdXN0cmlhbCUyMHdhcmVob3VzZSUyMHJvb2Z0b3AlMjBzb2xhciUyMHBhbmVscyUyMGxhcmdlfGVufDF8MHx8fDE3ODc2NjM1Nzl8MA",
  },
  community: {
    id: "j8bxJBbLjIo",
    src: "https://images.unsplash.com/photo-1631771819642-90cee9a2ccac?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8YXBhcnRtZW50JTIwYnVpbGRpbmclMjByb29mdG9wJTIwc29sYXIlMjBwYW5lbHMlMjBjb21tdW5pdHl8ZW58MXwwfHx8MTc4NzY2MzU4OHww&ixlib=rb-4.1.0&w=1200&h=900&fit=crop&auto=format&q=80",
    alt: "Row of solar panels shared across the rooftop of a residential building",
    width: 3648,
    height: 2736,
    author: "Yue Chan",
    authorUrl: `https://unsplash.com/@chanyue?${UTM}`,
    sourceUrl: `https://unsplash.com/photos/a-row-of-solar-panels-sitting-on-top-of-a-roof-j8bxJBbLjIo?${UTM}`,
    unsplashUrl: `https://unsplash.com/?${UTM}`,
    downloadLocation:
      "https://api.unsplash.com/photos/j8bxJBbLjIo/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8YXBhcnRtZW50JTIwYnVpbGRpbmclMjByb29mdG9wJTIwc29sYXIlMjBwYW5lbHMlMjBjb21tdW5pdHl8ZW58MXwwfHx8MTc4NzY2MzU4OHww",
  },
  monitoring: {
    id: "JKUTrJ4vK00",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8ZW5lcmd5JTIwbW9uaXRvcmluZyUyMGRhc2hib2FyZCUyMGxhcHRvcCUyMGRhdGElMjBzY3JlZW58ZW58MXwwfHx8MTc4NzY2MzU5NXww&ixlib=rb-4.1.0&w=1200&h=900&fit=crop&auto=format&q=80",
    alt: "Laptop screen displaying production and consumption performance graphs",
    width: 4810,
    height: 3207,
    author: "Luke Chesser",
    authorUrl: `https://unsplash.com/@lukechesser?${UTM}`,
    sourceUrl: `https://unsplash.com/photos/graphs-of-performance-analytics-on-a-laptop-screen-JKUTrJ4vK00?${UTM}`,
    unsplashUrl: `https://unsplash.com/?${UTM}`,
    downloadLocation:
      "https://api.unsplash.com/photos/JKUTrJ4vK00/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8ZW5lcmd5JTIwbW9uaXRvcmluZyUyMGRhc2hib2FyZCUyMGxhcHRvcCUyMGRhdGElMjBzY3JlZW58ZW58MXwwfHx8MTc4NzY2MzU5NXww",
  },
}

// Every Unsplash photograph rendered in this landing, for the consolidated
// "Photo credits" list in Footer.astro (see the astro-landing-pages Skill's
// "Photo credits" rule and the unsplash-images Skill §9.5 — each photo also
// carries its own discreet caption via components/Photo.astro; this list is
// the required second, page-level point of attribution).
export const allImages: UnsplashImage[] = [
  heroImage,
  transitionImage,
  ...Object.values(installationImages),
  ...Object.values(solutionImages),
]
