/**
 * Converts a human-readable tag into a URL-safe slug.
 * Handles accented characters common in Spanish tags.
 */
export function slugifyTag(tag: string): string {
  return tag
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}
