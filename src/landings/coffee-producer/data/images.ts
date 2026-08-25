// Photographs sourced from Unsplash via the `unsplash-images` Skill. Search
// query, selection reasoning, and download-tracking are handled during the
// editorial task that populates this file — production only ever renders
// the persisted `src` below (images.unsplash.com), never the API.
import type { UnsplashImage } from "../types"

export const heroImage: UnsplashImage = {
  id: "w2_RA1-3NaU",
  src: "https://images.unsplash.com/photo-1746367805612-bc46ff00bf9a?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NHx8Y29mZmVlJTIwY2hlcnJpZXMlMjBicmFuY2glMjBwbGFudCUyMGNsb3NldXB8ZW58MXwwfHx8MTc4NzQ3NTcwNHww&ixlib=rb-4.1.0&w=1600&h=2000&fit=crop&crop=entropy&auto=format&q=80",
  alt: "Coffee tree branches heavy with ripe cherries on the plantation",
  width: 5616,
  height: 3744,
  author: "PROJETO CAFÉ GATO-MOURISCO",
  authorUrl:
    "https://unsplash.com/@projetocafegatomourisco?utm_source=astro_landings_gallery&utm_medium=referral",
  sourceUrl:
    "https://unsplash.com/photos/coffee-berries-growing-on-a-leafy-branch-w2_RA1-3NaU?utm_source=astro_landings_gallery&utm_medium=referral",
  unsplashUrl:
    "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
  downloadLocation:
    "https://api.unsplash.com/photos/w2_RA1-3NaU/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NHx8Y29mZmVlJTIwY2hlcnJpZXMlMjBicmFuY2glMjBwbGFudCUyMGNsb3NldXB8ZW58MXwwfHx8MTc4NzQ3NTcwNHww",
}

export const aboutImage: UnsplashImage = {
  id: "imp-b2kcb08",
  src: "https://images.unsplash.com/photo-1762277142767-6e614520de15?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NXx8Y29mZmVlJTIwZmFybWVyJTIwcG9ydHJhaXQlMjBwbGFudGF0aW9uJTIwaGFuZHN8ZW58MXwxfHx8MTc4NzQ3NjUwNnww&ixlib=rb-4.1.0&w=1200&h=1600&fit=crop&crop=entropy&auto=format&q=80",
  alt: "Hands picking ripe coffee cherries directly from the branch",
  width: 4000,
  height: 6000,
  author: "LIVESTART STIVEN",
  authorUrl:
    "https://unsplash.com/@livestart?utm_source=astro_landings_gallery&utm_medium=referral",
  sourceUrl:
    "https://unsplash.com/photos/hands-picking-ripe-coffee-cherries-from-a-branch-imp-b2kcb08?utm_source=astro_landings_gallery&utm_medium=referral",
  unsplashUrl:
    "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
  downloadLocation:
    "https://api.unsplash.com/photos/imp-b2kcb08/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NXx8Y29mZmVlJTIwZmFybWVyJTIwcG9ydHJhaXQlMjBwbGFudGF0aW9uJTIwaGFuZHN8ZW58MXwxfHx8MTc4NzQ3NjUwNnww",
}

export const productImages = {
  singleOrigin: {
    id: "obV_LM0KjxY",
    src: "https://images.unsplash.com/photo-1524350876685-274059332603?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8cm9hc3RlZCUyMGNvZmZlZSUyMGJlYW5zJTIwYmFnJTIwcHJvZHVjdCUyMHNob3R8ZW58MXwwfHx8MTc4NzQ3NjUwNnww&ixlib=rb-4.1.0&w=900&h=675&fit=crop&auto=format&q=80",
    alt: "Sack of roasted single-origin coffee beans ready for packing",
    width: 4096,
    height: 2730,
    author: "Tina Guina",
    authorUrl:
      "https://unsplash.com/@kittinskie?utm_source=astro_landings_gallery&utm_medium=referral",
    sourceUrl:
      "https://unsplash.com/photos/shallow-focus-photography-of-coffee-beans-in-sack-obV_LM0KjxY?utm_source=astro_landings_gallery&utm_medium=referral",
    unsplashUrl:
      "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
    downloadLocation:
      "https://api.unsplash.com/photos/obV_LM0KjxY/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8cm9hc3RlZCUyMGNvZmZlZSUyMGJlYW5zJTIwYmFnJTIwcHJvZHVjdCUyMHNob3R8ZW58MXwwfHx8MTc4NzQ3NjUwNnww",
  },
  houseEspresso: {
    id: "rsnzc-8dVs0",
    src: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8cm9hc3RlZCUyMGNvZmZlZSUyMGJlYW5zJTIwYmFnJTIwcHJvZHVjdCUyMHNob3R8ZW58MXwwfHx8MTc4NzQ3NjUwNnww&ixlib=rb-4.1.0&w=900&h=675&fit=crop&auto=format&q=80",
    alt: "Bag of coffee on a wooden surface, ready for espresso",
    width: 4608,
    height: 3072,
    author: "Battlecreek Coffee Roasters",
    authorUrl:
      "https://unsplash.com/@battlecreekcoffeeroasters?utm_source=astro_landings_gallery&utm_medium=referral",
    sourceUrl:
      "https://unsplash.com/photos/battercreek-coffee-pack-rsnzc-8dVs0?utm_source=astro_landings_gallery&utm_medium=referral",
    unsplashUrl:
      "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
    downloadLocation:
      "https://api.unsplash.com/photos/rsnzc-8dVs0/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8cm9hc3RlZCUyMGNvZmZlZSUyMGJlYW5zJTIwYmFnJTIwcHJvZHVjdCUyMHNob3R8ZW58MXwwfHx8MTc4NzQ3NjUwNnww",
  },
  vientoclaroClassic: {
    id: "_1wDmr4dtuk",
    src: "https://images.unsplash.com/photo-1559056199-96c307526265?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8N3x8cm9hc3RlZCUyMGNvZmZlZSUyMGJlYW5zJTIwYmFnJTIwcHJvZHVjdCUyMHNob3R8ZW58MXwwfHx8MTc4NzQ3NjUwNnww&ixlib=rb-4.1.0&w=900&h=675&fit=crop&auto=format&q=80",
    alt: "Classic coffee bag in kraft paper on a wooden table",
    width: 4608,
    height: 3072,
    author: "Battlecreek Coffee Roasters",
    authorUrl:
      "https://unsplash.com/@battlecreekcoffeeroasters?utm_source=astro_landings_gallery&utm_medium=referral",
    sourceUrl:
      "https://unsplash.com/photos/coffee-packet-_1wDmr4dtuk?utm_source=astro_landings_gallery&utm_medium=referral",
    unsplashUrl:
      "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
    downloadLocation:
      "https://api.unsplash.com/photos/_1wDmr4dtuk/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8N3x8cm9hc3RlZCUyMGNvZmZlZSUyMGJlYW5zJTIwYmFnJTIwcHJvZHVjdCUyMHNob3R8ZW58MXwwfHx8MTc4NzQ3NjUwNnww",
  },
  specialEdition: {
    id: "IJyQ1us6MVM",
    src: "https://images.unsplash.com/photo-1561766858-62033ae40ec3?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8OHx8cm9hc3RlZCUyMGNvZmZlZSUyMGJlYW5zJTIwYmFnJTIwcHJvZHVjdCUyMHNob3R8ZW58MXwwfHx8MTc4NzQ3NjUwNnww&ixlib=rb-4.1.0&w=900&h=675&fit=crop&auto=format&q=80",
    alt: "Roasted coffee beans in a steel scoop, special edition",
    width: 5472,
    height: 3648,
    author: "René Porter",
    authorUrl:
      "https://unsplash.com/@reneporter?utm_source=astro_landings_gallery&utm_medium=referral",
    sourceUrl:
      "https://unsplash.com/photos/coffee-beans-in-stainless-steel-scoop-IJyQ1us6MVM?utm_source=astro_landings_gallery&utm_medium=referral",
    unsplashUrl:
      "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
    downloadLocation:
      "https://api.unsplash.com/photos/IJyQ1us6MVM/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8OHx8cm9hc3RlZCUyMGNvZmZlZSUyMGJlYW5zJTIwYmFnJTIwcHJvZHVjdCUyMHNob3R8ZW58MXwwfHx8MTc4NzQ3NjUwNnww",
  },
}

// Every Unsplash photograph rendered in this landing, for the consolidated
// "Photo credits" list in Footer.astro (see the astro-landing-pages Skill:
// "Photo credits" — each photo also carries its own discreet caption via
// components/Photo.astro; this list is the required second, page-level
// point of attribution).
export const allImages: UnsplashImage[] = [
  heroImage,
  aboutImage,
  ...Object.values(productImages),
]
