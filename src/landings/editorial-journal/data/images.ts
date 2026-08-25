// Every Unsplash photograph rendered anywhere in this landing, collected
// here for the consolidated "Photo credits" list in Footer.astro (see the
// astro-landing-pages Skill and the unsplash-images Skill §9.5). Each photo
// also carries its own discreet caption below it via components/Photo.astro
// — this list is the required second, page-level point of attribution, not
// a replacement for it.
import { heroImage, featureImage, longFormImage, interviewImage } from "./media"
import { stories } from "./stories"
import { archiveIssues } from "./archive"
import type { UnsplashImage, Story, ArchiveIssue } from "../types"

export const allImages: UnsplashImage[] = [
  heroImage,
  featureImage,
  longFormImage,
  interviewImage,
  ...stories
    .filter((story: Story): story is Story & { image: UnsplashImage } =>
      Boolean(story.image),
    )
    .map((story: Story & { image: UnsplashImage }) => story.image),
  ...archiveIssues.map((issue: ArchiveIssue) => issue.image),
]
