// Local content shapes for the Folio landing. These types are specific to
// this landing's own editorial data (stories, topics, dispatch items,
// archive issues, opinion columns, editor's picks, the interview) and
// therefore live here rather than in the platform's shared `src/types/` —
// nothing outside this landing needs them.

/** A single link in the landing's own in-page navigation. */
export interface NavLink {
  label: string
  href: string
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
  thumbnail?: string
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
  coverLabel: string
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
