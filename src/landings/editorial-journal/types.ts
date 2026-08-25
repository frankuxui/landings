// Local content shapes for the Editorial Journal landing. These types are specific to
// this landing's own editorial data (stories, topics, dispatch items,
// archive issues, opinion columns, editor's picks, the interview) and
// therefore live here rather than in the platform's shared `src/types/` —
// nothing outside this landing needs them.

/** A single link in the landing's own in-page navigation. */
export interface NavLink {
  label: string
  href: string
}

/** A real photograph sourced from Unsplash via the `unsplash-images` Skill.
 * Persisted here (not fetched at runtime) so this landing renders and
 * attributes its photography with zero calls to the Unsplash API. */
export interface UnsplashImage {
  id: string
  src: string
  alt: string
  width: number
  height: number
  color: string
  author: string
  authorUrl: string
  sourceUrl: string
  unsplashUrl: string
  downloadLocation: string
}

/** One of the journal's six editorial sections/topics. */
export interface Topic {
  slug: string
  label: string
  description: string
  count: string
}

/** A single row in the "Latest Stories" list. */
export interface Story {
  category: string
  title: string
  excerpt: string
  author: string
  date: string
  isoDate: string
  readTime: string
  image?: UnsplashImage
}

/** A short piece inside the "Dispatch" sticky-scroll section. */
export interface DispatchItem {
  kind: "story" | "quote" | "note"
  topic: string
  title?: string
  body: string
  author?: string
  role?: string
}

/** One past issue shown in the horizontal "Archive" slider. */
export interface ArchiveIssue {
  number: string
  title: string
  date: string
  isoDate: string
  image: UnsplashImage
}

/** A short opinion/column piece. */
export interface OpinionPiece {
  topic: string
  title: string
  excerpt: string
  author: string
  readTime: string
}

/** A single spotlighted piece in "Editor's Picks". */
export interface EditorsPick {
  index: string
  category: string
  title: string
  excerpt: string
  readTime: string
}

/** One question/answer exchange in the "Interview" section. */
export interface InterviewExchange {
  question: string
  answer: string
}
