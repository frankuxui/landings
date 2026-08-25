/**
 * Prefixes an app-internal path with Astro's configured `base` so links and
 * assets keep working when the site is deployed under a subpath (e.g. GitHub
 * Pages project sites). `path` must start with "/".
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "")
  return `${base}${path}`
}
