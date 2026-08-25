// Real photography sourced from Unsplash via the `unsplash-images` Skill for
// the sections that don't otherwise have their own typed content record
// (Hero's cover, Feature's report image, LongForm's wide article image, and
// the Interview's portrait). Persisted metadata only — this landing never
// calls the Unsplash API at build or runtime.
import type { UnsplashImage } from "../types"

export const heroImage: UnsplashImage = {
  id: "0TIAKTH3UdM",
  src: "https://images.unsplash.com/photo-1547561431-cef9607df712?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8bWFnYXppbmUlMjBlZGl0b3JpYWwlMjBkZXNrJTIwdHlwb2dyYXBoeSUyMGZsYXRsYXl8ZW58MHwxfHx8MTc4NzY4MTg3OXww&ixlib=rb-4.1.0",
  alt: "Reading glasses resting on an open stack of magazines and books",
  width: 3573,
  height: 5359,
  color: "#c0c0a6",
  author: "Kari Shea",
  authorUrl:
    "https://unsplash.com/@karishea?utm_source=astro_landings_gallery&utm_medium=referral",
  sourceUrl:
    "https://unsplash.com/photos/gray-framed-eyeglasses-and-books-0TIAKTH3UdM?utm_source=astro_landings_gallery&utm_medium=referral",
  unsplashUrl:
    "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
  downloadLocation:
    "https://api.unsplash.com/photos/0TIAKTH3UdM/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8MXx8bWFnYXppbmUlMjBlZGl0b3JpYWwlMjBkZXNrJTIwdHlwb2dyYXBoeSUyMGZsYXRsYXl8ZW58MHwxfHx8MTc4NzY4MTg3OXww",
}

export const featureImage: UnsplashImage = {
  id: "jpkvklXwt98",
  src: "https://images.unsplash.com/photo-1583913836387-ab656f4e0457?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8dmludGFnZSUyMHR5cGV3cml0ZXIlMjBwYXBlciUyMGRvY3VtZW50cyUyMGRlc2t8ZW58MHwwfHx8MTc4NzY4MTg4MHww&ixlib=rb-4.1.0",
  alt: "A manual typewriter on a plain desk, standing in for the paper forms this week's report covers",
  width: 3456,
  height: 2304,
  color: "#f3f3f3",
  author: "Katrin Hauf",
  authorUrl:
    "https://unsplash.com/@trine?utm_source=astro_landings_gallery&utm_medium=referral",
  sourceUrl:
    "https://unsplash.com/photos/black-and-white-typewriter-on-white-table-jpkvklXwt98?utm_source=astro_landings_gallery&utm_medium=referral",
  unsplashUrl:
    "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
  downloadLocation:
    "https://api.unsplash.com/photos/jpkvklXwt98/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8M3x8dmludGFnZSUyMHR5cGV3cml0ZXIlMjBwYXBlciUyMGRvY3VtZW50cyUyMGRlc2t8ZW58MHwwfHx8MTc4NzY4MTg4MHww",
}

export const longFormImage: UnsplashImage = {
  id: "XK0faa4_mCQ",
  src: "https://images.unsplash.com/photo-1546414701-81cc6963c67f?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NXx8Y29udGVtcG9yYXJ5JTIwYXJjaGl0ZWN0dXJlJTIwY29uY3JldGUlMjBmYWNhZGUlMjBtaW5pbWFsfGVufDB8MHx8fDE3ODc2ODE4ODB8MA&ixlib=rb-4.1.0",
  alt: "A minimal gray concrete building facade, standing in for the long-form report's public-service architecture",
  width: 4242,
  height: 2607,
  color: "#c0d9d9",
  author: "Simone Hutsch",
  authorUrl:
    "https://unsplash.com/@heysupersimi?utm_source=astro_landings_gallery&utm_medium=referral",
  sourceUrl:
    "https://unsplash.com/photos/landscape-photography-of-gray-concrete-building-XK0faa4_mCQ?utm_source=astro_landings_gallery&utm_medium=referral",
  unsplashUrl:
    "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
  downloadLocation:
    "https://api.unsplash.com/photos/XK0faa4_mCQ/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NXx8Y29udGVtcG9yYXJ5JTIwYXJjaGl0ZWN0dXJlJTIwY29uY3JldGUlMjBmYWNhZGUlMjBtaW5pbWFsfGVufDB8MHx8fDE3ODc2ODE4ODB8MA",
}

export const interviewImage: UnsplashImage = {
  id: "tCdBZUcI3Xw",
  src: "https://images.unsplash.com/photo-1781819114919-e9095f361374?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NXx8cG9ydHJhaXQlMjBkZXNpZ25lciUyMHN0dWRpbyUyMG5hdHVyYWwlMjBsaWdodHxlbnwwfDF8fHwxNzg3NjgxODgxfDA&ixlib=rb-4.1.0",
  alt: "Portrait of the type designer interviewed in this issue, lit with dramatic directional light",
  width: 3531,
  height: 5296,
  color: "#0c260c",
  author: "Marcin Sajur",
  authorUrl:
    "https://unsplash.com/@m_sajur?utm_source=astro_landings_gallery&utm_medium=referral",
  sourceUrl:
    "https://unsplash.com/photos/dramatic-lighting-illuminates-a-womans-face-with-strong-shadows-tCdBZUcI3Xw?utm_source=astro_landings_gallery&utm_medium=referral",
  unsplashUrl:
    "https://unsplash.com/?utm_source=astro_landings_gallery&utm_medium=referral",
  downloadLocation:
    "https://api.unsplash.com/photos/tCdBZUcI3Xw/download?ixid=M3wxMDQwNDk5fDB8MXxzZWFyY2h8NXx8cG9ydHJhaXQlMjBkZXNpZ25lciUyMHN0dWRpbyUyMG5hdHVyYWwlMjBsaWdodHxlbnwwfDF8fHwxNzg3NjgxODgxfDA",
}
