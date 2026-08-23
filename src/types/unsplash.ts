/**
 * Persisted metadata for a photograph sourced from the Unsplash API.
 * See .claude/skills/unsplash-images/SKILL.md for the full lifecycle rules
 * (search, selection, download tracking, attribution, UTM).
 */
export interface UnsplashCredit {
  /** Unsplash photo id (`photo.id`). */
  id: string
  /** Photographer's display name (`photo.user.name`). */
  author: string
  /** Photographer's Unsplash profile URL, with UTM (`photo.user.links.html`). */
  authorUrl: string
  /** Photo page URL on Unsplash, with UTM (`photo.links.html`). */
  sourceUrl: string
  /** unsplash.com URL, with UTM. */
  unsplashUrl: string
  /** Download-tracking endpoint (`photo.links.download_location`), fired once at selection time. */
  downloadLocation: string
}
