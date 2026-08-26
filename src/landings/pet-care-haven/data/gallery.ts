// Pet Care Haven — the pet gallery mosaic. Pet names, species, activities
// and captions are entirely fictional (see CLAUDE.md's rule against
// plausible personal/business data); the photographs are real, sourced via
// the unsplash-images Skill.
import type { GalleryPet } from "../types"

export const galleryPets: GalleryPet[] = [
  {
    id: "toby",
    name: "Toby",
    species: "Dog",
    activity: "Exploring the yard",
    caption: "Always the first at the door when it's time to go out.",
    image: {
      id: "SICTPNMiRkY",
      src: "https://images.unsplash.com/photo-1630204745647-7cbdd212bec4?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8ZG9nJTIwZmFjZSUyMGNsb3NlJTIwdXAlMjBwb3J0cmFpdCUyMG5hdHVyYWwlMjBsaWdodHxlbnwxfDJ8fHwxNzg3NjQ2NTcyfDA&ixlib=rb-4.1.0",
      alt: "Close-up portrait of a brown and black short-haired dog",
      width: 2257,
      height: 2414,
      color: "#260c0c",
      author: "Emily Chandler",
      authorUrl:
        "https://unsplash.com/@emilyc_2427?utm_source=astro_landings_gallery&utm_medium=referral",
      sourceUrl:
        "https://unsplash.com/photos/brown-and-black-short-coated-dog-SICTPNMiRkY?utm_source=astro_landings_gallery&utm_medium=referral",
      unsplashUrl:
        "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
      downloadLocation:
        "https://api.unsplash.com/photos/SICTPNMiRkY/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8ZG9nJTIwZmFjZSUyMGNsb3NlJTIwdXAlMjBwb3J0cmFpdCUyMG5hdHVyYWwlMjBsaWdodHxlbnwxfDJ8fHwxNzg3NjQ2NTcyfDA",
    },
  },
  {
    id: "luna",
    name: "Luna",
    species: "Dog",
    activity: "Watching the horizon",
    caption: "Loves the wind in her ears on long walks.",
    image: {
      id: "hGVz9vrkxBI",
      src: "https://images.unsplash.com/photo-1633186770232-a6931688e7d0?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8ZG9nJTIwZmFjZSUyMGNsb3NlJTIwdXAlMjBwb3J0cmFpdCUyMG5hdHVyYWwlMjBsaWdodHxlbnwxfDJ8fHwxNzg3NjQ2NTcyfDA&ixlib=rb-4.1.0",
      alt: "White dog with a red collar looking off into the distance",
      width: 3024,
      height: 2917,
      color: "#260c0c",
      author: "Jorge",
      authorUrl:
        "https://unsplash.com/@jorge7c?utm_source=astro_landings_gallery&utm_medium=referral",
      sourceUrl:
        "https://unsplash.com/photos/a-white-dog-with-a-red-collar-looking-off-into-the-distance-hGVz9vrkxBI?utm_source=astro_landings_gallery&utm_medium=referral",
      unsplashUrl:
        "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
      downloadLocation:
        "https://api.unsplash.com/photos/hGVz9vrkxBI/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8ZG9nJTIwZmFjZSUyMGNsb3NlJTIwdXAlMjBwb3J0cmFpdCUyMG5hdHVyYWwlMjBsaWdodHxlbnwxfDJ8fHwxNzg3NjQ2NTcyfDA",
    },
  },
  {
    id: "max",
    name: "Max",
    species: "Dog",
    activity: "Posing after a walk",
    caption: "The calmest of the group — almost never barks.",
    image: {
      id: "KFH8eK0oDZo",
      src: "https://images.unsplash.com/photo-1620002608768-c33a780df74f?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8ZG9nJTIwZmFjZSUyMGNsb3NlJTIwdXAlMjBwb3J0cmFpdCUyMG5hdHVyYWwlMjBsaWdodHxlbnwxfDJ8fHwxNzg3NjQ2NTcyfDA&ixlib=rb-4.1.0",
      alt: "Portrait of a brown and white short-haired dog",
      width: 2943,
      height: 2943,
      color: "#d9d9d9",
      author: "Michael Bennett",
      authorUrl:
        "https://unsplash.com/@michaelbennett?utm_source=astro_landings_gallery&utm_medium=referral",
      sourceUrl:
        "https://unsplash.com/photos/brown-and-white-short-coated-dog-KFH8eK0oDZo?utm_source=astro_landings_gallery&utm_medium=referral",
      unsplashUrl:
        "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
      downloadLocation:
        "https://api.unsplash.com/photos/KFH8eK0oDZo/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8ZG9nJTIwZmFjZSUyMGNsb3NlJTIwdXAlMjBwb3J0cmFpdCUyMG5hdHVyYWwlMjBsaWdodHxlbnwxfDJ8fHwxNzg3NjQ2NTcyfDA",
    },
  },
  {
    id: "nala",
    name: "Nala",
    species: "Cat",
    activity: "Resting in the sun",
    caption: "Finds the only patch of sunlight in the whole room.",
    image: {
      id: "FilM6ng7VGQ",
      src: "https://images.unsplash.com/photo-1490650034439-fd184c3c86a5?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8Y2F0JTIwcG9ydHJhaXQlMjBuYXR1cmFsJTIwbGlnaHQlMjByZXN0aW5nfGVufDF8Mnx8fDE3ODc2NDY1NzN8MA&ixlib=rb-4.1.0",
      alt: "Close-up portrait of a gray tabby cat",
      width: 3576,
      height: 3577,
      color: "#d9d9d9",
      author: "Kari Shea",
      authorUrl:
        "https://unsplash.com/@karishea?utm_source=astro_landings_gallery&utm_medium=referral",
      sourceUrl:
        "https://unsplash.com/photos/gray-tabby-cat-FilM6ng7VGQ?utm_source=astro_landings_gallery&utm_medium=referral",
      unsplashUrl:
        "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
      downloadLocation:
        "https://api.unsplash.com/photos/FilM6ng7VGQ/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8Y2F0JTIwcG9ydHJhaXQlMjBuYXR1cmFsJTIwbGlnaHQlMjByZXN0aW5nfGVufDF8Mnx8fDE3ODc2NDY1NzN8MA",
    },
  },
  {
    id: "coco",
    name: "Coco",
    species: "Cat",
    activity: "Watching from the window",
    caption: "Her favorite spot is the highest windowsill in the house.",
    image: {
      id: "N0uU8R93o9w",
      src: "https://images.unsplash.com/photo-1565285180720-9ace2102576b?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NHx8Y2F0JTIwcG9ydHJhaXQlMjBuYXR1cmFsJTIwbGlnaHQlMjByZXN0aW5nfGVufDF8Mnx8fDE3ODc2NDY1NzN8MA&ixlib=rb-4.1.0",
      alt: "Portrait of a white and brown cat looking closely at the camera",
      width: 3072,
      height: 3072,
      color: "#26260c",
      author: "Duniah almasri",
      authorUrl:
        "https://unsplash.com/@duniah989?utm_source=astro_landings_gallery&utm_medium=referral",
      sourceUrl:
        "https://unsplash.com/photos/white-and-brown-cat-N0uU8R93o9w?utm_source=astro_landings_gallery&utm_medium=referral",
      unsplashUrl:
        "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
      downloadLocation:
        "https://api.unsplash.com/photos/N0uU8R93o9w/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NHx8Y2F0JTIwcG9ydHJhaXQlMjBuYXR1cmFsJTIwbGlnaHQlMjByZXN0aW5nfGVufDF8Mnx8fDE3ODc2NDY1NzN8MA",
    },
  },
  {
    id: "milo",
    name: "Milo",
    species: "Cat",
    activity: "Curious about the camera",
    caption: "Stares down anyone who dares to photograph him.",
    image: {
      id: "0MwryWGio3I",
      src: "https://images.unsplash.com/photo-1750279785733-463471e653e6?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Nnx8Y2F0JTIwcG9ydHJhaXQlMjBuYXR1cmFsJTIwbGlnaHQlMjByZXN0aW5nfGVufDF8Mnx8fDE3ODc2NDY1NzN8MA&ixlib=rb-4.1.0",
      alt: "Orange cat with strikingly expressive green eyes",
      width: 4000,
      height: 4000,
      color: "#0c260c",
      author: "vegonaise",
      authorUrl:
        "https://unsplash.com/@vegonaise?utm_source=astro_landings_gallery&utm_medium=referral",
      sourceUrl:
        "https://unsplash.com/photos/orange-cat-with-striking-green-eyes-0MwryWGio3I?utm_source=astro_landings_gallery&utm_medium=referral",
      unsplashUrl:
        "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
      downloadLocation:
        "https://api.unsplash.com/photos/0MwryWGio3I/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Nnx8Y2F0JTIwcG9ydHJhaXQlMjBuYXR1cmFsJTIwbGlnaHQlMjByZXN0aW5nfGVufDF8Mnx8fDE3ODc2NDY1NzN8MA",
    },
  },
  {
    id: "bella",
    name: "Bella",
    species: "Dog",
    activity: "Chasing the frisbee",
    caption: "Never brings it back on the first try — that's half the fun.",
    image: {
      id: "cdjxywKEeEY",
      src: "https://images.unsplash.com/photo-1687959258030-171d9f95b6a7?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8ZG9nJTIwcGxheWluZyUyMHBhcmslMjBhY3Rpb24lMjBqdW1wfGVufDF8Mnx8fDE3ODc3MjgxNTJ8MA&ixlib=rb-4.1.0",
      alt: "Dog running across the grass with a frisbee in its mouth",
      width: 4808,
      height: 5152,
      color: "#595940",
      author: "Doğan Alpaslan Demir",
      authorUrl:
        "https://unsplash.com/@izafi?utm_source=astro_landings_gallery&utm_medium=referral",
      sourceUrl:
        "https://unsplash.com/photos/a-dog-running-in-the-grass-with-a-frisbee-in-its-mouth-cdjxywKEeEY?utm_source=astro_landings_gallery&utm_medium=referral",
      unsplashUrl:
        "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
      downloadLocation:
        "https://api.unsplash.com/photos/cdjxywKEeEY/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8ZG9nJTIwcGxheWluZyUyMHBhcmslMjBhY3Rpb24lMjBqdW1wfGVufDF8Mnx8fDE3ODc3MjgxNTJ8MA",
    },
  },
  {
    id: "duke",
    name: "Duke",
    species: "Dog",
    activity: "Mid-air during play",
    caption: "Convinced he can catch every leaf that falls.",
    image: {
      id: "5eAmYBA9eV0",
      src: "https://images.unsplash.com/photo-1704895594363-c530eae9e7be?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8ZG9nJTIwcGxheWluZyUyMHBhcmslMjBhY3Rpb24lMjBqdW1wfGVufDF8Mnx8fDE3ODc3MjgxNTJ8MA&ixlib=rb-4.1.0",
      alt: "White dog leaping joyfully in mid-air outdoors",
      width: 3040,
      height: 3040,
      color: "#a6a6a6",
      author: "Léa Journiac",
      authorUrl:
        "https://unsplash.com/@leajourniac?utm_source=astro_landings_gallery&utm_medium=referral",
      sourceUrl:
        "https://unsplash.com/photos/a-white-dog-is-jumping-in-the-air-5eAmYBA9eV0?utm_source=astro_landings_gallery&utm_medium=referral",
      unsplashUrl:
        "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
      downloadLocation:
        "https://api.unsplash.com/photos/5eAmYBA9eV0/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8ZG9nJTIwcGxheWluZyUyMHBhcmslMjBhY3Rpb24lMjBqdW1wfGVufDF8Mnx8fDE3ODc3MjgxNTJ8MA",
    },
  },
  {
    id: "olive",
    name: "Olive",
    species: "Cat",
    activity: "Hunting the feather toy",
    caption: "Treats every playtime like a serious mission.",
    image: {
      id: "PQPVudn4nYo",
      src: "https://images.unsplash.com/photo-1781030114295-aba2caaa9696?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8Y2F0JTIwcGxheWluZyUyMHRveSUyMGluZG9vcnxlbnwxfDJ8fHwxNzg3NzI4MTUzfDA&ixlib=rb-4.1.0",
      alt: "Tabby cat looking up intently at a feather toy",
      width: 4040,
      height: 3898,
      color: "#404026",
      author: "Vidak",
      authorUrl:
        "https://unsplash.com/@vidak?utm_source=astro_landings_gallery&utm_medium=referral",
      sourceUrl:
        "https://unsplash.com/photos/a-tabby-cat-looks-up-at-a-green-feather-toy-PQPVudn4nYo?utm_source=astro_landings_gallery&utm_medium=referral",
      unsplashUrl:
        "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
      downloadLocation:
        "https://api.unsplash.com/photos/PQPVudn4nYo/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8Y2F0JTIwcGxheWluZyUyMHRveSUyMGluZG9vcnxlbnwxfDJ8fHwxNzg3NzI4MTUzfDA",
    },
  },
  {
    id: "pepper",
    name: "Pepper",
    species: "Cat",
    activity: "Batting a toy across the floor",
    caption: "Plays fetch her own way — she bats it, we retrieve it.",
    image: {
      id: "ma3eJyJvDpo",
      src: "https://images.unsplash.com/photo-1677936181615-9ec066472b99?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NHx8Y2F0JTIwcGxheWluZyUyMHRveSUyMGluZG9vcnxlbnwxfDJ8fHwxNzg3NzI4MTUzfDA&ixlib=rb-4.1.0",
      alt: "Cat playing with a small toy on a wooden floor",
      width: 2410,
      height: 2349,
      color: "#a6a6a6",
      author: "Nika Benedictova",
      authorUrl:
        "https://unsplash.com/@nika_benedictova?utm_source=astro_landings_gallery&utm_medium=referral",
      sourceUrl:
        "https://unsplash.com/photos/a-cat-is-playing-with-a-toy-on-the-floor-ma3eJyJvDpo?utm_source=astro_landings_gallery&utm_medium=referral",
      unsplashUrl:
        "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
      downloadLocation:
        "https://api.unsplash.com/photos/ma3eJyJvDpo/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NHx8Y2F0JTIwcGxheWluZyUyMHRveSUyMGluZG9vcnxlbnwxfDJ8fHwxNzg3NzI4MTUzfDA",
    },
  },
]
