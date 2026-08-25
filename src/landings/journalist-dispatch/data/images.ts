// Photographs sourced from Unsplash via the `unsplash-images` Skill. Search
// query, selection reasoning, and download-tracking were handled during the
// editorial task that populated this file — production only ever renders
// the persisted `src` below (images.unsplash.com), never the API. Every
// photo is rendered with a `grayscale` treatment in the sections that use
// it, to keep the landing strictly monochrome regardless of the source
// photo's original tonality.
import type { UnsplashImage } from "../types"

export const heroImage: UnsplashImage = {
  id: "H6-FvRWZ4bw",
  src: "https://images.unsplash.com/photo-1756561841472-786e926ad5b2?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8OHx8ZG9jdW1lbnRhcnklMjBwaG90b2pvdXJuYWxpc20lMjByZXBvcnRhZ2UlMjBibGFjayUyMGFuZCUyMHdoaXRlfGVufDF8MHx8fDE3ODc2NjA4ODR8MA&ixlib=rb-4.1.0&w=1600&h=2000&fit=crop&crop=entropy&auto=format&q=80",
  alt: "An elderly man stands with his hands behind his back on a quiet city street",
  width: 5472,
  height: 3648,
  author: "Hans Eiskonen",
  authorUrl:
    "https://unsplash.com/@eiskonen?utm_source=astro_landings_gallery&utm_medium=referral",
  sourceUrl:
    "https://unsplash.com/photos/elderly-man-stands-with-hands-behind-back-on-street-H6-FvRWZ4bw?utm_source=astro_landings_gallery&utm_medium=referral",
  unsplashUrl:
    "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
  downloadLocation:
    "https://api.unsplash.com/photos/H6-FvRWZ4bw/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8OHx8ZG9jdW1lbnRhcnklMjBwaG90b2pvdXJuYWxpc20lMjByZXBvcnRhZ2UlMjBibGFjayUyMGFuZCUyMHdoaXRlfGVufDF8MHx8fDE3ODc2NjA4ODR8MA",
}

export const featureFrames: UnsplashImage[] = [
  {
    id: "MCBjQXRsMOo",
    src: "https://images.unsplash.com/photo-1631627412230-cf651d683bca?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NHx8cmVmdWdlZSUyMG1pZ3JhdGlvbiUyMGNyb3NzaW5nJTIwZG9jdW1lbnRhcnl8ZW58MXwwfHx8MTc4NzY2MDg5Mnww&ixlib=rb-4.1.0&w=1600&h=2000&fit=crop&crop=entropy&auto=format&q=80",
    alt: "A long line of people walking together on an open road",
    width: 5880,
    height: 3920,
    author: "Kat von Wood",
    authorUrl:
      "https://unsplash.com/@kat_von_wood?utm_source=astro_landings_gallery&utm_medium=referral",
    sourceUrl:
      "https://unsplash.com/photos/a-large-group-of-people-walking-on-a-road-MCBjQXRsMOo?utm_source=astro_landings_gallery&utm_medium=referral",
    unsplashUrl:
      "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
    downloadLocation:
      "https://api.unsplash.com/photos/MCBjQXRsMOo/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NHx8cmVmdWdlZSUyMG1pZ3JhdGlvbiUyMGNyb3NzaW5nJTIwZG9jdW1lbnRhcnl8ZW58MXwwfHx8MTc4NzY2MDg5Mnww",
  },
  {
    id: "enIbuT4DayY",
    src: "https://images.unsplash.com/photo-1559733711-1b689ab44236?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8cmVmdWdlZSUyMG1pZ3JhdGlvbiUyMGNyb3NzaW5nJTIwZG9jdW1lbnRhcnl8ZW58MXwwfHx8MTc4NzY2MDg5Mnww&ixlib=rb-4.1.0&w=1600&h=2000&fit=crop&crop=entropy&auto=format&q=80",
    alt: "A group of people walking together across an open rural landscape",
    width: 5472,
    height: 3648,
    author: "mostafa meraji",
    authorUrl:
      "https://unsplash.com/@mostafa_meraji?utm_source=astro_landings_gallery&utm_medium=referral",
    sourceUrl:
      "https://unsplash.com/photos/people-walking-at-rural-area-enIbuT4DayY?utm_source=astro_landings_gallery&utm_medium=referral",
    unsplashUrl:
      "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
    downloadLocation:
      "https://api.unsplash.com/photos/enIbuT4DayY/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8cmVmdWdlZSUyMG1pZ3JhdGlvbiUyMGNyb3NzaW5nJTIwZG9jdW1lbnRhcnl8ZW58MXwwfHx8MTc4NzY2MDg5Mnww",
  },
  {
    id: "sRTX8vndcyI",
    src: "https://images.unsplash.com/photo-1560981478-e94a92d4ad1e?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8N3x8cmVmdWdlZSUyMG1pZ3JhdGlvbiUyMGNyb3NzaW5nJTIwZG9jdW1lbnRhcnl8ZW58MXwwfHx8MTc4NzY2MDg5Mnww&ixlib=rb-4.1.0&w=1600&h=2000&fit=crop&crop=entropy&auto=format&q=80",
    alt: "A man pushes a loaded wheelbarrow while a woman rides alongside him",
    width: 5102,
    height: 3663,
    author: "Hennie Stander",
    authorUrl:
      "https://unsplash.com/@henniestander?utm_source=astro_landings_gallery&utm_medium=referral",
    sourceUrl:
      "https://unsplash.com/photos/grayscale-photo-of-man-pushing-wheelbarrow-with-riding-woman-sRTX8vndcyI?utm_source=astro_landings_gallery&utm_medium=referral",
    unsplashUrl:
      "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
    downloadLocation:
      "https://api.unsplash.com/photos/sRTX8vndcyI/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8N3x8cmVmdWdlZSUyMG1pZ3JhdGlvbiUyMGNyb3NzaW5nJTIwZG9jdW1lbnRhcnl8ZW58MXwwfHx8MTc4NzY2MDg5Mnww",
  },
  {
    id: "mL2sKWUCTBw",
    src: "https://images.unsplash.com/photo-1729150781361-4b9d7d8565b3?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8OHx8cmVmdWdlZSUyMG1pZ3JhdGlvbiUyMGNyb3NzaW5nJTIwZG9jdW1lbnRhcnl8ZW58MXwwfHx8MTc4NzY2MDg5Mnww&ixlib=rb-4.1.0&w=1600&h=2000&fit=crop&crop=entropy&auto=format&q=80",
    alt: "A group of people sit together on top of a large pile of sandbags",
    width: 3936,
    height: 2624,
    author: "Moses Londo",
    authorUrl:
      "https://unsplash.com/@moseslondo?utm_source=astro_landings_gallery&utm_medium=referral",
    sourceUrl:
      "https://unsplash.com/photos/a-group-of-people-sitting-on-top-of-a-large-pile-of-sandbags-mL2sKWUCTBw?utm_source=astro_landings_gallery&utm_medium=referral",
    unsplashUrl:
      "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
    downloadLocation:
      "https://api.unsplash.com/photos/mL2sKWUCTBw/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8OHx8cmVmdWdlZSUyMG1pZ3JhdGlvbiUyMGNyb3NzaW5nJTIwZG9jdW1lbnRhcnl8ZW58MXwwfHx8MTc4NzY2MDg5Mnww",
  },
]

export const storyImages = {
  rights: {
    id: "Evo4wmtRaPI",
    src: "https://images.unsplash.com/photo-1511898634545-c01af8a54dd5?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8cHJvdGVzdCUyMGRlbW9uc3RyYXRpb24lMjBjcm93ZCUyMHN0cmVldCUyMGRvY3VtZW50YXJ5fGVufDF8MHx8fDE3ODc2NjA4OTN8MA&ixlib=rb-4.1.0&w=1200&h=1500&fit=crop&crop=entropy&auto=format&q=80",
    alt: "A large crowd holds up hand-lettered signs during a street demonstration",
    width: 6000,
    height: 3663,
    author: "Alex Radelich",
    authorUrl:
      "https://unsplash.com/@alexradelich?utm_source=astro_landings_gallery&utm_medium=referral",
    sourceUrl:
      "https://unsplash.com/photos/a-large-group-of-people-holding-up-signs-Evo4wmtRaPI?utm_source=astro_landings_gallery&utm_medium=referral",
    unsplashUrl:
      "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
    downloadLocation:
      "https://api.unsplash.com/photos/Evo4wmtRaPI/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8cHJvdGVzdCUyMGRlbW9uc3RyYXRpb24lMjBjcm93ZCUyMHN0cmVldCUyMGRvY3VtZW50YXJ5fGVufDF8MHx8fDE3ODc2NjA4OTN8MA",
  },
  migration: {
    id: "t86cJxwmBWc",
    src: "https://images.unsplash.com/photo-1591588211599-04eeffe9acc7?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8cHJvdGVzdCUyMGRlbW9uc3RyYXRpb24lMjBjcm93ZCUyMHN0cmVldCUyMGRvY3VtZW50YXJ5fGVufDF8MHx8fDE3ODc2NjA4OTN8MA&ixlib=rb-4.1.0&w=1600&h=1200&fit=crop&crop=entropy&auto=format&q=80",
    alt: "A dense crowd of people walking together down a city street",
    width: 4776,
    height: 3821,
    author: "Koshu Kunii",
    authorUrl:
      "https://unsplash.com/@koshuuu?utm_source=astro_landings_gallery&utm_medium=referral",
    sourceUrl:
      "https://unsplash.com/photos/grayscale-photo-of-people-on-street-t86cJxwmBWc?utm_source=astro_landings_gallery&utm_medium=referral",
    unsplashUrl:
      "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
    downloadLocation:
      "https://api.unsplash.com/photos/t86cJxwmBWc/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8cHJvdGVzdCUyMGRlbW9uc3RyYXRpb24lMjBjcm93ZCUyMHN0cmVldCUyMGRvY3VtZW50YXJ5fGVufDF8MHx8fDE3ODc2NjA4OTN8MA",
  },
  society: {
    id: "QscghMDg4jc",
    src: "https://images.unsplash.com/photo-1702455261956-64c3f6993a96?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8N3x8ZG9jdW1lbnRhcnklMjBwaG90b2pvdXJuYWxpc20lMjByZXBvcnRhZ2UlMjBibGFjayUyMGFuZCUyMHdoaXRlfGVufDF8MHx8fDE3ODc2NjA4ODR8MA&ixlib=rb-4.1.0&w=1200&h=1500&fit=crop&crop=entropy&auto=format&q=80",
    alt: "Passengers sit quietly together on a train carriage",
    width: 4733,
    height: 3648,
    author: "Maria Budanova (Pristavskaya)",
    authorUrl:
      "https://unsplash.com/@budanovamrus?utm_source=astro_landings_gallery&utm_medium=referral",
    sourceUrl:
      "https://unsplash.com/photos/a-black-and-white-photo-of-people-sitting-on-a-train-QscghMDg4jc?utm_source=astro_landings_gallery&utm_medium=referral",
    unsplashUrl:
      "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
    downloadLocation:
      "https://api.unsplash.com/photos/QscghMDg4jc/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8N3x8ZG9jdW1lbnRhcnklMjBwaG90b2pvdXJuYWxpc20lMjByZXBvcnRhZ2UlMjBibGFjayUyMGFuZCUyMHdoaXRlfGVufDF8MHx8fDE3ODc2NjA4ODR8MA",
  },
  culture: {
    id: "8MFLBHpLA8c",
    src: "https://images.unsplash.com/photo-1787547284129-3990c3ea27b8?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Nnx8ZG9jdW1lbnRhcnklMjBwaG90b2pvdXJuYWxpc20lMjByZXBvcnRhZ2UlMjBibGFjayUyMGFuZCUyMHdoaXRlfGVufDF8MHx8fDE3ODc2NjA4ODR8MA&ixlib=rb-4.1.0&w=1600&h=1200&fit=crop&crop=entropy&auto=format&q=80",
    alt: "A visitor looks closely at a wall of framed portraits in a gallery",
    width: 5952,
    height: 3968,
    author: "Rendy Novantino",
    authorUrl:
      "https://unsplash.com/@novantino?utm_source=astro_landings_gallery&utm_medium=referral",
    sourceUrl:
      "https://unsplash.com/photos/person-looking-at-framed-portraits-8MFLBHpLA8c?utm_source=astro_landings_gallery&utm_medium=referral",
    unsplashUrl:
      "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
    downloadLocation:
      "https://api.unsplash.com/photos/8MFLBHpLA8c/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Nnx8ZG9jdW1lbnRhcnklMjBwaG90b2pvdXJuYWxpc20lMjByZXBvcnRhZ2UlMjBibGFjayUyMGFuZCUyMHdoaXRlfGVufDF8MHx8fDE3ODc2NjA4ODR8MA",
  },
}

export const galleryImages: UnsplashImage[] = [
  {
    id: "WfxZ268BDNc",
    src: "https://images.unsplash.com/photo-1768368488381-396d42aaa5ef?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8ZG9jdW1lbnRhcnklMjBwaG90b2pvdXJuYWxpc20lMjByZXBvcnRhZ2UlMjBibGFjayUyMGFuZCUyMHdoaXRlfGVufDF8MHx8fDE3ODc2NjA4ODR8MA&ixlib=rb-4.1.0&w=2000&auto=format&fit=crop&q=80",
    alt: "A photographer raises a vintage camera to take a picture",
    width: 6000,
    height: 4000,
    author: "JC Gellidon",
    authorUrl:
      "https://unsplash.com/@jcgellidon?utm_source=astro_landings_gallery&utm_medium=referral",
    sourceUrl:
      "https://unsplash.com/photos/man-holding-vintage-camera-and-taking-a-picture-WfxZ268BDNc?utm_source=astro_landings_gallery&utm_medium=referral",
    unsplashUrl:
      "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
    downloadLocation:
      "https://api.unsplash.com/photos/WfxZ268BDNc/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8ZG9jdW1lbnRhcnklMjBwaG90b2pvdXJuYWxpc20lMjByZXBvcnRhZ2UlMjBibGFjayUyMGFuZCUyMHdoaXRlfGVufDF8MHx8fDE3ODc2NjA4ODR8MA",
  },
  {
    id: "_ShB2QhB4C0",
    src: "https://images.unsplash.com/photo-1593014044944-7bf5d35777f5?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Nnx8cHJvdGVzdCUyMGRlbW9uc3RyYXRpb24lMjBjcm93ZCUyMHN0cmVldCUyMGRvY3VtZW50YXJ5fGVufDF8MHx8fDE3ODc2NjA4OTN8MA&ixlib=rb-4.1.0&w=2000&auto=format&fit=crop&q=80",
    alt: "A wide crowd of pedestrians moves along a busy street",
    width: 7952,
    height: 5304,
    author: "Corey Young",
    authorUrl:
      "https://unsplash.com/@corey_untitled?utm_source=astro_landings_gallery&utm_medium=referral",
    sourceUrl:
      "https://unsplash.com/photos/grayscale-photo-of-people-walking-on-street-_ShB2QhB4C0?utm_source=astro_landings_gallery&utm_medium=referral",
    unsplashUrl:
      "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
    downloadLocation:
      "https://api.unsplash.com/photos/_ShB2QhB4C0/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Nnx8cHJvdGVzdCUyMGRlbW9uc3RyYXRpb24lMjBjcm93ZCUyMHN0cmVldCUyMGRvY3VtZW50YXJ5fGVufDF8MHx8fDE3ODc2NjA4OTN8MA",
  },
  {
    id: "ZRjKE2D-GKU",
    src: "https://images.unsplash.com/photo-1623253488543-c198426d4b09?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8N3x8cHJvdGVzdCUyMGRlbW9uc3RyYXRpb24lMjBjcm93ZCUyMHN0cmVldCUyMGRvY3VtZW50YXJ5fGVufDF8MHx8fDE3ODc2NjA4OTN8MA&ixlib=rb-4.1.0&w=2000&auto=format&fit=crop&q=80",
    alt: "A group of demonstrators hold protest signs above their heads",
    width: 5184,
    height: 3456,
    author: "Janay Peters",
    authorUrl:
      "https://unsplash.com/@jpetersbydesign?utm_source=astro_landings_gallery&utm_medium=referral",
    sourceUrl:
      "https://unsplash.com/photos/a-group-of-people-holding-signs-and-protesting-ZRjKE2D-GKU?utm_source=astro_landings_gallery&utm_medium=referral",
    unsplashUrl:
      "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
    downloadLocation:
      "https://api.unsplash.com/photos/ZRjKE2D-GKU/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8N3x8cHJvdGVzdCUyMGRlbW9uc3RyYXRpb24lMjBjcm93ZCUyMHN0cmVldCUyMGRvY3VtZW50YXJ5fGVufDF8MHx8fDE3ODc2NjA4OTN8MA",
  },
  {
    id: "41eo5e8jW08",
    src: "https://images.unsplash.com/photo-1608052026785-0bc249c733e3?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8cmVmdWdlZSUyMG1pZ3JhdGlvbiUyMGNyb3NzaW5nJTIwZG9jdW1lbnRhcnl8ZW58MXwwfHx8MTc4NzY2MDg5Mnww&ixlib=rb-4.1.0&w=2000&auto=format&fit=crop&q=80",
    alt: "A group of people crowd together in a small boat on open water",
    width: 6720,
    height: 4247,
    author: "Sam Mann",
    authorUrl:
      "https://unsplash.com/@sammannfilms?utm_source=astro_landings_gallery&utm_medium=referral",
    sourceUrl:
      "https://unsplash.com/photos/people-in-a-white-boat-during-daytime-41eo5e8jW08?utm_source=astro_landings_gallery&utm_medium=referral",
    unsplashUrl:
      "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
    downloadLocation:
      "https://api.unsplash.com/photos/41eo5e8jW08/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8cmVmdWdlZSUyMG1pZ3JhdGlvbiUyMGNyb3NzaW5nJTIwZG9jdW1lbnRhcnl8ZW58MXwwfHx8MTc4NzY2MDg5Mnww",
  },
  {
    id: "YQl9DLZDrWs",
    src: "https://images.unsplash.com/photo-1696860682642-03203a617bce?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NXx8cmVmdWdlZSUyMG1pZ3JhdGlvbiUyMGNyb3NzaW5nJTIwZG9jdW1lbnRhcnl8ZW58MXwwfHx8MTc4NzY2MDg5Mnww&ixlib=rb-4.1.0&w=2000&auto=format&fit=crop&q=80",
    alt: "A group of people stand together at the side of an open road",
    width: 3504,
    height: 2336,
    author: "Ümit Yıldırım",
    authorUrl:
      "https://unsplash.com/@umityildirim?utm_source=astro_landings_gallery&utm_medium=referral",
    sourceUrl:
      "https://unsplash.com/photos/a-group-of-people-standing-on-the-side-of-a-road-YQl9DLZDrWs?utm_source=astro_landings_gallery&utm_medium=referral",
    unsplashUrl:
      "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
    downloadLocation:
      "https://api.unsplash.com/photos/YQl9DLZDrWs/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NXx8cmVmdWdlZSUyMG1pZ3JhdGlvbiUyMGNyb3NzaW5nJTIwZG9jdW1lbnRhcnl8ZW58MXwwfHx8MTc4NzY2MDg5Mnww",
  },
  {
    id: "ND7ZXUuTpyo",
    src: "https://images.unsplash.com/photo-1666128525817-f76e46eee736?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Nnx8cmVmdWdlZSUyMG1pZ3JhdGlvbiUyMGNyb3NzaW5nJTIwZG9jdW1lbnRhcnl8ZW58MXwwfHx8MTc4NzY2MDg5Mnww&ixlib=rb-4.1.0&w=2000&auto=format&fit=crop&q=80",
    alt: "Two men sit together on the ground beside a small herd of cattle",
    width: 5472,
    height: 3648,
    author: "Ali Minhass",
    authorUrl:
      "https://unsplash.com/@ali7866?utm_source=astro_landings_gallery&utm_medium=referral",
    sourceUrl:
      "https://unsplash.com/photos/a-couple-of-men-sitting-on-the-ground-next-to-some-cows-ND7ZXUuTpyo?utm_source=astro_landings_gallery&utm_medium=referral",
    unsplashUrl:
      "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
    downloadLocation:
      "https://api.unsplash.com/photos/ND7ZXUuTpyo/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Nnx8cmVmdWdlZSUyMG1pZ3JhdGlvbiUyMGNyb3NzaW5nJTIwZG9jdW1lbnRhcnl8ZW58MXwwfHx8MTc4NzY2MDg5Mnww",
  },
]

export const fieldNoteImages = {
  typewriter: {
    id: "d34DtRp1bqo",
    src: "https://images.unsplash.com/photo-1530819568329-97653eafbbfa?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8bm90ZWJvb2slMjB0eXBld3JpdGVyJTIwZGVzayUyMGZpZWxkJTIwbm90ZXMlMjBkb2N1bWVudGFyeXxlbnwxfDB8fHwxNzg3NjYwOTAxfDA&ixlib=rb-4.1.0&w=1000&h=750&fit=crop&crop=entropy&auto=format&q=80",
    alt: "A black portable typewriter sits ready on a plain desk",
    width: 2863,
    height: 1920,
    author: "Daria Kraplak",
    authorUrl:
      "https://unsplash.com/@daria_kraplak?utm_source=astro_landings_gallery&utm_medium=referral",
    sourceUrl:
      "https://unsplash.com/photos/black-typewriter-d34DtRp1bqo?utm_source=astro_landings_gallery&utm_medium=referral",
    unsplashUrl:
      "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
    downloadLocation:
      "https://api.unsplash.com/photos/d34DtRp1bqo/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8bm90ZWJvb2slMjB0eXBld3JpdGVyJTIwZGVzayUyMGZpZWxkJTIwbm90ZXMlMjBkb2N1bWVudGFyeXxlbnwxfDB8fHwxNzg3NjYwOTAxfDA",
  },
  notebook: {
    id: "DyoixKolq9Y",
    src: "https://images.unsplash.com/photo-1727721361159-93adc6ddd89d?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8aGFuZCUyMHdyaXRpbmclMjBub3RlYm9vayUyMHBlbiUyMHRyYXZlbCUyMGpvdXJuYWwlMjBkZXNrfGVufDF8MHx8fDE3ODc2NjA5NDR8MA&ixlib=rb-4.1.0&w=1000&h=750&fit=crop&crop=entropy&auto=format&q=80",
    alt: "A hand writes into a notebook with a pen resting on a plain desk",
    width: 3508,
    height: 2339,
    author: "Romain B",
    authorUrl:
      "https://unsplash.com/@myblu?utm_source=astro_landings_gallery&utm_medium=referral",
    sourceUrl:
      "https://unsplash.com/photos/a-person-holding-a-pen-and-writing-on-a-notebook-DyoixKolq9Y?utm_source=astro_landings_gallery&utm_medium=referral",
    unsplashUrl:
      "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
    downloadLocation:
      "https://api.unsplash.com/photos/DyoixKolq9Y/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8aGFuZCUyMHdyaXRpbmclMjBub3RlYm9vayUyMHBlbiUyMHRyYXZlbCUyMGpvdXJuYWwlMjBkZXNrfGVufDF8MHx8fDE3ODc2NjA5NDR8MA",
  },
}

export const timelineImages = {
  beirut: {
    id: "mmMrVR7hlXA",
    src: "https://images.unsplash.com/photo-1766330976566-ba44451dc8e8?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8bWlkZGxlJTIwZWFzdCUyMG9sZCUyMGNpdHklMjBzdHJlZXQlMjBkb2N1bWVudGFyeXxlbnwxfDB8fHwxNzg3NjYwOTEzfDA&ixlib=rb-4.1.0&w=1200&h=900&fit=crop&crop=entropy&auto=format&q=80",
    alt: "A narrow alleyway runs between weathered old buildings in a dense city",
    width: 6116,
    height: 4949,
    author: "othmane ferrah",
    authorUrl:
      "https://unsplash.com/@0x0red?utm_source=astro_landings_gallery&utm_medium=referral",
    sourceUrl:
      "https://unsplash.com/photos/narrow-alleyway-between-old-buildings-in-a-city-mmMrVR7hlXA?utm_source=astro_landings_gallery&utm_medium=referral",
    unsplashUrl:
      "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
    downloadLocation:
      "https://api.unsplash.com/photos/mmMrVR7hlXA/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8bWlkZGxlJTIwZWFzdCUyMG9sZCUyMGNpdHklMjBzdHJlZXQlMjBkb2N1bWVudGFyeXxlbnwxfDB8fHwxNzg3NjYwOTEzfDA",
  },
  kyiv: {
    id: "nygmYd7CrMQ",
    src: "https://images.unsplash.com/photo-1773778628580-a86be9a16c9a?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8ZWFzdGVybiUyMGV1cm9wZSUyMHdpbnRlciUyMHN0cmVldCUyMGNpdHklMjBkb2N1bWVudGFyeXxlbnwxfDB8fHwxNzg3NjYwOTE0fDA&ixlib=rb-4.1.0&w=1200&h=900&fit=crop&crop=entropy&auto=format&q=80",
    alt: "A historic building faces a quiet street covered in fresh snow",
    width: 6000,
    height: 4000,
    author: "Voloshka Apelbsinovi",
    authorUrl:
      "https://unsplash.com/@voloshechka?utm_source=astro_landings_gallery&utm_medium=referral",
    sourceUrl:
      "https://unsplash.com/photos/historic-building-on-a-snowy-city-street-nygmYd7CrMQ?utm_source=astro_landings_gallery&utm_medium=referral",
    unsplashUrl:
      "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
    downloadLocation:
      "https://api.unsplash.com/photos/nygmYd7CrMQ/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8ZWFzdGVybiUyMGV1cm9wZSUyMHdpbnRlciUyMHN0cmVldCUyMGNpdHklMjBkb2N1bWVudGFyeXxlbnwxfDB8fHwxNzg3NjYwOTE0fDA",
  },
  mediterranean: {
    id: "cSHeeHen5mM",
    src: "https://images.unsplash.com/photo-1775401849151-d8ae5915c3a4?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8bWVkaXRlcnJhbmVhbiUyMGNvYXN0JTIwYm9hdCUyMHNlYSUyMGRvY3VtZW50YXJ5fGVufDF8MHx8fDE3ODc2NjA5MTR8MA&ixlib=rb-4.1.0&w=1200&h=900&fit=crop&crop=entropy&auto=format&q=80",
    alt: "A small boat drifts near a rocky breakwater on calm open water",
    width: 6982,
    height: 4655,
    author: "Redd Francisco",
    authorUrl:
      "https://unsplash.com/@reddfrancisco?utm_source=astro_landings_gallery&utm_medium=referral",
    sourceUrl:
      "https://unsplash.com/photos/a-small-boat-floats-near-a-rocky-breakwater-cSHeeHen5mM?utm_source=astro_landings_gallery&utm_medium=referral",
    unsplashUrl:
      "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
    downloadLocation:
      "https://api.unsplash.com/photos/cSHeeHen5mM/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8bWVkaXRlcnJhbmVhbiUyMGNvYXN0JTIwYm9hdCUyMHNlYSUyMGRvY3VtZW50YXJ5fGVufDF8MHx8fDE3ODc2NjA5MTR8MA",
  },
  marrakesh: {
    id: "wkqHK0G99P4",
    src: "https://images.unsplash.com/photo-1766330976655-629cbab33c9d?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8bm9ydGglMjBhZnJpY2ElMjBtZWRpbmElMjBtYXJrZXQlMjBzdHJlZXQlMjBkb2N1bWVudGFyeXxlbnwxfDB8fHwxNzg3NjYwOTE1fDA&ixlib=rb-4.1.0&w=1200&h=900&fit=crop&crop=entropy&auto=format&q=80",
    alt: "A person walks alone down a narrow alleyway lined with market shops",
    width: 6000,
    height: 4000,
    author: "othmane ferrah",
    authorUrl:
      "https://unsplash.com/@0x0red?utm_source=astro_landings_gallery&utm_medium=referral",
    sourceUrl:
      "https://unsplash.com/photos/a-person-walks-down-a-narrow-alleyway-with-shops-wkqHK0G99P4?utm_source=astro_landings_gallery&utm_medium=referral",
    unsplashUrl:
      "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
    downloadLocation:
      "https://api.unsplash.com/photos/wkqHK0G99P4/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8bm9ydGglMjBhZnJpY2ElMjBtZWRpbmElMjBtYXJrZXQlMjBzdHJlZXQlMjBkb2N1bWVudGFyeXxlbnwxfDB8fHwxNzg3NjYwOTE1fDA",
  },
  dakar: {
    id: "OHbYZhNzOmU",
    src: "https://images.unsplash.com/photo-1783815412052-281033cf6d34?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8d2VzdCUyMGFmcmljYSUyMHN0cmVldCUyMG1hcmtldCUyMGRvY3VtZW50YXJ5fGVufDF8MHx8fDE3ODc2NjA5MTZ8MA&ixlib=rb-4.1.0&w=1200&h=900&fit=crop&crop=entropy&auto=format&q=80",
    alt: "A child walks along a busy urban street lined with parked vehicles",
    width: 6000,
    height: 4000,
    author: "Angelica Hasbon",
    authorUrl:
      "https://unsplash.com/@angelicahasbon?utm_source=astro_landings_gallery&utm_medium=referral",
    sourceUrl:
      "https://unsplash.com/photos/child-walks-on-a-busy-urban-street-with-vehicles-OHbYZhNzOmU?utm_source=astro_landings_gallery&utm_medium=referral",
    unsplashUrl:
      "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
    downloadLocation:
      "https://api.unsplash.com/photos/OHbYZhNzOmU/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8d2VzdCUyMGFmcmljYSUyMHN0cmVldCUyMG1hcmtldCUyMGRvY3VtZW50YXJ5fGVufDF8MHx8fDE3ODc2NjA5MTZ8MA",
  },
}

export const aboutImage: UnsplashImage = {
  id: "JtbH32Q-tLI",
  src: "https://images.unsplash.com/photo-1624873613044-be3c1de7f09a?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBqb3VybmFsaXN0JTIwY2FtZXJhJTIwZmlsbSUyMGNvbnRlbXBsYXRpdmV8ZW58MXwxfHx8MTc4NzY2MDkwMHww&ixlib=rb-4.1.0&w=1200&h=1500&fit=crop&crop=faces&auto=format&q=80",
  alt: "A reporter holds a DSLR camera up, framing a shot in the field",
  width: 4000,
  height: 6000,
  author: "Efim Borisov",
  authorUrl:
    "https://unsplash.com/@efimborisov?utm_source=astro_landings_gallery&utm_medium=referral",
  sourceUrl:
    "https://unsplash.com/photos/woman-in-black-and-yellow-long-sleeve-shirt-holding-black-dslr-camera-JtbH32Q-tLI?utm_source=astro_landings_gallery&utm_medium=referral",
  unsplashUrl:
    "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
  downloadLocation:
    "https://api.unsplash.com/photos/JtbH32Q-tLI/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBqb3VybmFsaXN0JTIwY2FtZXJhJTIwZmlsbSUyMGNvbnRlbXBsYXRpdmV8ZW58MXwxfHx8MTc4NzY2MDkwMHww",
}

// Every Unsplash photograph rendered in this landing, for the consolidated
// "Photo credits" list in Footer.astro (see the astro-landing-pages Skill
// and the unsplash-images Skill §9.5) — each photo also carries its own
// discreet caption via components/Photo.astro; this list is the required
// second, page-level point of attribution.
export const allImages: UnsplashImage[] = [
  heroImage,
  ...featureFrames,
  ...Object.values(storyImages),
  ...galleryImages,
  ...Object.values(fieldNoteImages),
  ...Object.values(timelineImages),
  aboutImage,
]
