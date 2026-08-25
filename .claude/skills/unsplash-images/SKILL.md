---
name: unsplash-images
description: Search, select, attribute, and integrate Unsplash photos into landing pages in this project through the official Unsplash API. Use whenever a task needs to add, replace, audit, or reason about photographic imagery in a landing — hero photography, feature imagery, article covers, portraits, editorial placeholders, or any real photograph that must come from Unsplash. Does not handle full landing design; only the image lifecycle: query, pick, persist metadata, keep attribution, and stay within Unsplash's official rules.
---

# Unsplash Images

Specialized knowledge for sourcing, selecting, and integrating Unsplash photographs into the landings in this repository through the official Unsplash API (`api.unsplash.com`). This Skill owns only the image lifecycle — search, selection, attribution, persistence, production URL, audit. It does not own layout, section design, tokens, or copy; those belong to [`astro-landing-pages`](../astro-landing-pages/SKILL.md).

Read this Skill in full before making any Unsplash API request. Every rule below is mandatory unless the Skill itself explicitly marks it as optional.

---

## 1. Scope and non-goals

### In scope
- Building precise search queries for a specific section of a landing.
- Calling the Unsplash API (`GET /search/photos`, download tracking) with the correct headers and parameters.
- Selecting a photograph that fits the section, the composition, and this project's monochrome visual system.
- Triggering the required "download" event so the photographer is credited.
- Persisting the exact metadata a landing needs to render the image and its attribution offline.
- Rendering hotlinked `images.unsplash.com` URLs in production with the correct sizing parameters.
- Producing visible, accessible photographer attribution with the correct UTM parameters.
- Auditing existing landings for compliance with all of the above.

### Out of scope
- Designing sections, choosing tokens, writing copy, or restructuring a landing. Route that through `astro-landing-pages` and, when it's about a specific landing, the `landing-page-specialist` subagent.
- Any imagery that is not a real photograph from Unsplash — icon glyphs, brand marks, abstract placeholders (`<ImagePlaceholder />` and similar), SVG illustrations. Those are unrelated and not governed by this Skill.
- Reuploading Unsplash images to `/public/` or `src/assets/` (see rule 5).
- Using the API at runtime for site visitors (see rule 3).

---

## 2. Authentication and secrets

### 2.1 Access Key only
Use the Unsplash **Access Key** for all public search and photo-lookup calls. Never use the Secret Key for search — the Secret Key is for OAuth user actions this project does not perform.

### 2.2 Environment variable
The Access Key is read from a single environment variable:

```
UNSPLASH_ACCESS_KEY
```

- Read it via `process.env.UNSPLASH_ACCESS_KEY` (Node context: scripts, editorial tooling, tests) or `import.meta.env.UNSPLASH_ACCESS_KEY` (Astro build-time context, private — must not be prefixed with `PUBLIC_`).
- If it is missing, abort with a clear error. Never fall back to a hard-coded key, an empty string, or a public demo key.

### 2.3 Hard prohibitions
The Access Key must never appear in:
- Astro components (`.astro`), client scripts (`.ts` / `.js` shipped to the browser), or any file inside a landing.
- Landing metadata (`src/content/landings/*.json`, landing `data/`).
- Query strings of URLs rendered into HTML.
- Committed files — `.env`, `.env.local`, or any file tracked by Git.
- Logs, error messages, or console output.

Send the key only in the request header:

```
Authorization: Client-ID <UNSPLASH_ACCESS_KEY>
```

Do not use the `?client_id=…` query-string variant — it is more likely to leak into logs and shell history.

### 2.4 If a key is exposed
If a key ends up committed, printed, or otherwise leaked, stop, tell the user, and ask them to rotate it in the Unsplash developer dashboard. Do not proceed with API calls under a leaked key.

---

## 3. When the API may be called — and when it must not

**The Unsplash API is an editorial tool, not a runtime dependency.** Site visitors must never cause a request to `api.unsplash.com`.

### 3.1 Allowed contexts (editorial only)
Call the API only during an explicit, human-initiated editorial task:
1. Creating a new landing that needs photography.
2. Adding a new photographic image to an existing landing.
3. Replacing an existing photograph.
4. A specific auditing or verification task the user has asked for.

### 3.2 Forbidden contexts
Never call the API from:
- An Astro page/component that runs at request time.
- Client-side JavaScript.
- `getStaticPaths`, content-collection loaders, or any code that runs on every `npm run build`.
- Middleware, adapters, or CI steps that run for every build.
- Loops over sections or landings that would multiply requests without human intent.

### 3.3 Required flow

```
Agent / Skill (editorial task, human-initiated)
        │
        ▼
   Unsplash API  ── GET /search/photos ──►  candidates
        │
        ▼
   Pick one candidate (see rule 6)
        │
        ▼
   Trigger download  ── GET photo.links.download_location
        │
        ▼
   Persist metadata into the landing's data file
        │
        ▼
   ─── editorial phase ends here ───
        │
        ▼
   Production build & visitors
        │
        ▼
   images.unsplash.com   (hotlinked, no api.unsplash.com traffic)
```

This flow is binding. A landing that reaches production must be fully renderable from persisted metadata alone, with zero calls to `api.unsplash.com` at build or runtime.

---

## 4. API surface actually used

Only two endpoints are used routinely.

### 4.1 Search
```
GET https://api.unsplash.com/search/photos
Authorization: Client-ID <UNSPLASH_ACCESS_KEY>
Accept-Version: v1
```

Query parameters:
- `query` — the specific, composed query (see rule 6).
- `per_page` — a small number of candidates, typically `6`–`10`. Never use `30` "just in case".
- `orientation` — `landscape`, `portrait`, or `squarish` when the section requires it. Set this when the layout dictates aspect ratio (hero landscape, portrait interview, etc.).
- `content_filter` — `high` when appropriate.
- `page` — only if the first page truly did not contain a usable candidate.

Do not pass `client_id` in the query string; use the `Authorization` header.

### 4.2 Download tracking
```
GET <photo.links.download_location>
Authorization: Client-ID <UNSPLASH_ACCESS_KEY>
```

- Use the URL exactly as returned by the API, keeping every query parameter it already contains (`ixid`, etc.). Do not strip, rewrite, or reorder them.
- `photo.links.download` is a browser download link; **do not** use it as a substitute for `download_location`. Only `download_location` counts as a tracked download.
- Fire this request once per selection, right after the human agent commits to using that photo (see rule 7).

### 4.3 Endpoints deliberately not used
Do not call `/photos/:id`, `/photos/random`, per-user endpoints, or collection endpoints unless a specific task requires them and the user has asked for it. `/search/photos` already returns everything this Skill needs (`id`, `urls`, `links.download_location`, `user`, `alt_description`, `width`, `height`).

---

## 5. Hotlinking and image URLs

### 5.1 Always hotlink
Every image rendered in a landing must be served directly from `images.unsplash.com` via the URLs the API returned under `photo.urls`. This is a hard requirement from Unsplash and it is what makes photo views count.

Do not:
- Rehost the JPEG under `/public/`, `src/assets/`, a CDN of your own, or anywhere else.
- Rewrite the hostname or the path.
- Strip the `ixid` (or any other) query parameter that Unsplash adds to `photo.urls.raw`.
- Base64-encode the image into HTML/CSS.

The single exception is the Unsplash-generated URL itself, with the sizing parameters described below.

### 5.2 Which variant to pick
`photo.urls` exposes several preset variants:

| Variant   | Approx width  | Use for                                                       |
|-----------|---------------|---------------------------------------------------------------|
| `raw`     | Original      | Base URL to append your own sizing/format parameters.         |
| `full`    | Max, JPEG     | Only when you truly need the full asset (rare).               |
| `regular` | ~1080px, JPEG | Standard content images, mid-size feature blocks.             |
| `small`   | ~400px, JPEG  | Cards, thumbnails, small tiles.                               |
| `thumb`   | ~200px, JPEG  | Very small thumbnails, avatars.                               |

Prefer `raw` for anything responsive, because you can append sizing/format parameters and generate a proper `srcset`. Use `regular`/`small`/`thumb` when you want the preset variant exactly.

### 5.3 Sizing parameters (append to `raw` only)
Append Unsplash's officially supported dynamic parameters to build the final `src`/`srcset`:

- `w` — target width in px.
- `h` — target height in px (with `fit=crop` when cropping).
- `fit=crop` — crop to fit the requested box.
- `crop=entropy` (or `crop=faces` for portraits) — pick a sensible crop.
- `auto=format` — let Unsplash serve WebP/AVIF when the browser supports it.
- `q=80` — sensible default quality for photographs.
- `dpr=2` — for hi-DPI variants inside a `srcset`.

Rules for these parameters:
- Never remove existing parameters that `photo.urls.raw` already contains (`ixid`, etc.). Append yours; do not replace.
- Never invent parameters that Unsplash does not document.
- Do not upscale beyond the natural size of the source; ask for widths that make sense for the layout.

### 5.4 Sensible defaults by use case
- **Hero / full-bleed cover** — `raw` + `w=2000&auto=format&fit=crop&q=80`, plus a `srcset` with `w=1200`, `w=1600`, `w=2000`, `w=2400`.
- **Feature block / editorial image** — `raw` + `w=1200&auto=format&fit=crop&q=80`, `srcset` at `800`, `1200`, `1600`.
- **Card / list item** — `raw` + `w=600&auto=format&fit=crop&q=80`, `srcset` at `400`, `600`, `800`.
- **Portrait / interview** — `raw` + `w=800&auto=format&fit=crop&crop=faces&q=80`.
- **Thumbnail** — `small` or `raw` + `w=300&auto=format&q=75`.

Always render `width` and `height` attributes from the persisted metadata to preserve intrinsic aspect ratio and avoid CLS.

---

## 6. Building the query

Do not send vague, single-word queries. A good query narrows results enough that the first page of `per_page` candidates already contains a usable photo.

### 6.1 Compose the query from the section's brief
For each image, decide, in this order:
1. **Subject** — what literal thing the photo depicts (`coffee plantation`, `type designer at desk`, `solar panel array`).
2. **Framing / composition** — `aerial`, `close up`, `wide`, `over the shoulder`, `flat lay`, `portrait`.
3. **Setting / mood** — `industrial`, `natural light`, `minimalist studio`, `overcast`, `warehouse`.
4. **Negative space / room for text**, when text will overlay the image — `negative space`, `empty sky`, `top copy space`.

Then compose 3–6 words. Examples:
- Hero for coffee producer: `coffee plantation aerial mist landscape`, not `coffee`.
- Portrait for an interview section: `type designer portrait natural light studio`.
- Long-form feature image: `contemporary architecture facade concrete minimal`.

### 6.2 Set orientation
Always set `orientation` when the layout requires it. A landscape hero must be searched with `orientation=landscape`; a tall portrait card must be `orientation=portrait`. This alone eliminates most misfit results and cuts the need for a second query.

### 6.3 Iterate carefully
If the first page of `per_page` candidates has nothing usable:
1. Refine the query (add specificity, remove ambiguity, or swap the framing term).
2. Try a second, refined query.
3. Stop.

Do not run more than a handful of queries per image. If you are on the third or fourth query, the query strategy is wrong — pause and think about the brief, don't keep hitting the API.

---

## 7. Selecting and committing a photo

### 7.1 Selection criteria (visual)
Pick the candidate that best satisfies, in order:
1. **Subject correctness** — does it depict what the section is actually about?
2. **Composition fit** — orientation, focal point placement, room for overlay text if any.
3. **Monochrome resilience** — this project is strictly grayscale (see `astro-landing-pages`). Prefer images with strong tonal contrast that survive `filter: grayscale(1)` and desaturated rendering. Avoid photos whose meaning is carried by color alone.
4. **Consistency with the rest of the landing** — a landing that mixes overexposed studio shots with moody outdoor shots looks accidental. Match lighting, contrast, and framing style across the landing's photos.
5. **Quality** — sharp, well-exposed, not visibly compressed.

When a landing needs several images, decide the overall visual direction first (mood, lighting, framing), then pick each image against that direction. Do not select images one at a time in isolation.

### 7.2 Do not alter the source
- Do not edit the Unsplash file itself (crop, retouch, recolor and rehost).
- Cropping or grayscale filtering **for display** via CSS/Tailwind on the hotlinked image is fine and is how the project achieves its monochrome look. That is presentation, not modification of the source asset.

### 7.3 Trigger the download event
As soon as the selection is committed (that is, you are about to persist its metadata into the landing), fire the download tracking request:

```
GET <photo.links.download_location>
Authorization: Client-ID <UNSPLASH_ACCESS_KEY>
```

Rules:
- Fire it exactly once per selection.
- Use the URL exactly as returned (do not strip `ixid` or any other query parameter).
- Do not use `photo.links.download` — that is a browser download link, not the tracking endpoint.
- A 2xx response is enough; you do not need to store the response body.

If this request fails, do not persist the selection until the download has been triggered successfully.

---

## 8. Persisted metadata (what a landing must store)

Once a photo is selected, the landing must persist enough data to render both the image and its attribution **without ever calling the API again**. Persist at minimum:

```ts
type UnsplashImage = {
  // Identity
  id: string;                 // photo.id

  // Rendering
  src: string;                // photo.urls.raw (or the exact preset variant used)
  alt: string;                // context-appropriate alt text (see rule 10)
  width: number;              // photo.width
  height: number;             // photo.height
  color?: string;             // photo.color — dominant hex, useful as CSS background placeholder

  // Attribution
  author: string;             // photo.user.name
  authorUrl: string;          // photo.user.links.html + UTM (see rule 9)

  // Provenance / links back to Unsplash
  sourceUrl: string;          // photo.links.html + UTM (photo page)
  unsplashUrl: string;        // "https://unsplash.com/" + UTM (the site itself)

  // Download tracking (persisted so a future replacement can re-check it if needed)
  downloadLocation: string;   // photo.links.download_location, unchanged
};
```

Rules:
- All values must come from the API response. Never fabricate an author, a profile URL, or a photo page URL.
- If the API response is missing something required (`user.name`, `links.html`, `links.download_location`), do not use the photo.
- Store this object in the landing's own `data/` folder (a `.ts` file typed against `UnsplashImage`), never as an inline object hidden inside a component. Keeping it in `data/` makes the attribution portable when the landing is downloaded.
- Never store the Access Key alongside the metadata.

If a landing needs several images, expose them as a typed array in `data/`, each entry keyed by the section that consumes it.

---

## 9. Attribution and UTM parameters

Attribution is a hard requirement, not a design detail.

### 9.1 Wording (conceptual)
Every Unsplash image must display, near the image, something semantically equivalent to:

> Photo by **[Author]** on **Unsplash**

- **[Author]** must be a link to `photo.user.links.html` + UTM.
- **Unsplash** must be a link to `https://unsplash.com/` + UTM (or to the photo page `photo.links.html` + UTM when that makes more sense in the design; both are acceptable and both must carry UTM).
- The language of the label ("Photo by …" / "Foto de …") should follow the landing's content language.

### 9.2 UTM parameters (mandatory on every link back to Unsplash)
Append these to **every** Unsplash-facing link generated by this project:

```
?utm_source=<APP_UTM_SOURCE>&utm_medium=referral
```

- `utm_source` — a single, consistent identifier for this project. Default value for this repository:

  ```
  utm_source=astro_landings_gallery
  ```

  Use it verbatim across every landing so Unsplash sees consistent referral traffic. Do not vary it per landing.
- `utm_medium=referral` — always this value.
- If the base URL already contains query parameters (rare for `links.html`, but possible), append with `&` and do not remove any existing parameter.

This applies to:
- The photographer's profile link.
- The photo page link.
- The link to `unsplash.com` itself.

### 9.3 Where the attribution lives in the DOM
The attribution can be styled discreetly, but it must be:
- **Visible** — real text on a real background, with adequate contrast per this project's a11y rules (see [`semantic-accessibility-seo`](../semantic-accessibility-seo/SKILL.md)).
- **Legible** — not smaller than the smallest body-text size the landing uses for meaningful text.
- **Focusable and keyboard-accessible** — both links reachable with `Tab`.
- **Semantic** — inside a `<figcaption>` when the image is inside a `<figure>`, otherwise inside a caption block or a credits block adjacent to the image.
- **Below the photo, in normal flow** — never a caption/scrim overlaid on top of the image itself (`absolute`/`fixed` positioned over the photo). An overlay banner darkens the photo, fights the project's monochrome/high-contrast treatment, and is visually noisier than a small caption sitting under the image. Always lay the caption out below the `<img>`, in the page's normal document flow.
- **Never `title`-only.** A `title` attribute on the `<img>` is a welcome bonus (a hover tooltip for sighted mouse users) but never a substitute for the visible caption — `title` is unreliable with screen readers and completely inaccessible on touch (no hover). Add it in addition to the caption below, not instead of it.

Do not hide the attribution with `display: none`, `visibility: hidden`, `opacity: 0`, `aria-hidden="true"`, `hidden`, a `sr-only` utility, off-screen positioning, or CSS that visually removes it. Every one of those is a violation.

### 9.4 Recommended markup

```astro
<figure>
  <div class="overflow-hidden rounded-2xl">
    <img
      src={image.src}
      alt={image.alt}
      title={`Photo by ${image.author} on Unsplash`}
      width={image.width}
      height={image.height}
      loading="lazy"
      decoding="async"
    />
  </div>
  <figcaption class="mt-2 text-xs text-muted">
    Photo by <a href={image.authorUrl} rel="noopener">{image.author}</a>
    on <a href={image.unsplashUrl} rel="noopener">Unsplash</a>
  </figcaption>
</figure>
```

- `<figure>` wraps a separately-rounded/clipped image container plus a `<figcaption>` that sits below it in normal flow — the caption is never inside the clipped/positioned image box, so it can never end up overlaid on the photo.
- `rel="noopener"` on external links is required by [`semantic-accessibility-seo`](../semantic-accessibility-seo/SKILL.md).

### 9.5 Page-level "Photo credits" list (required, in addition to the per-photo caption)

Every landing that uses Unsplash photography must also render a consolidated "Photo credits" list directly below its `<Footer>` content (still inside the `<footer>` element), listing every distinct photo used in the landing with the same `Photo by [author] on Unsplash` pattern, both links carrying UTM. This is a second, page-level point of attribution — it does not replace the per-photo caption from §9.3/9.4, both must exist together.

Build the list from a single `allImages: UnsplashImage[]` array exported from the landing's own `data/images.ts` (collect every image constant/object used anywhere in the landing) so the footer has one place to iterate — never hand-duplicate the list of images inline in `Footer.astro`.

---

## 10. Alt text

Attribution and alt text are two separate responsibilities. Solve both.

- Do not copy `photo.alt_description` verbatim. It is generated automatically, often inaccurate, and rarely matches the section's meaning.
- Write an alt that describes the image **as used in this section**: what the reader sees and why it is relevant to the surrounding content.
- Keep it under ~120 characters, in the landing's content language, without the words "image of" or "photo of" (screen readers already announce the role).
- For a purely decorative image (rare on this project), use `alt=""` and, if possible, mark it with `role="presentation"`. Attribution still applies — the image is decorative, the credit is not.

---

## 11. API-call hygiene

The project runs against the standard Unsplash rate limits (50 req/hr in demo, 1000 req/hr in production). These rules keep usage inside those limits and honest.

### 11.1 Minimize
Before hitting the API:
1. Read the landing brief.
2. List every image the landing needs, per section, with its role, orientation, and use case.
3. Group images that can share a search (same subject, same mood).
4. Only then start calling `/search/photos`.

### 11.2 Reuse
- Within a single editorial task, reuse the response object. Do not re-`GET /search/photos` for the same query.
- If the search response already contains the fields you need (it does, for every field in the persisted metadata), do not fetch individual `/photos/:id` details.

### 11.3 Batch shape
- `per_page` should be small — typically `6`, sometimes up to `10`. Only raise it when a specific task justifies a wider pool.
- Do not fan out one search per section in a loop. Do sections' selections deliberately, one at a time, thinking about the pool of candidates.

### 11.4 Read the rate-limit headers
Every response includes:

```
X-Ratelimit-Limit: <n>
X-Ratelimit-Remaining: <n>
```

Watch them:
- When `X-Ratelimit-Remaining` drops below ~10% of the limit, stop initiating new searches. Finish the selections you can from the results already in hand, tell the user the budget is nearly exhausted, and let them decide.
- If a request returns `403` with a rate-limit reason, stop immediately. Do not retry in a loop. Report to the user.

### 11.5 Do not evade limits
Do not rotate keys, add jitter to bypass throttling, run parallel requests to defeat the counter, or "warm up" by prefetching. Any of those violate the Guidelines and get access terminated.

---

## 12. Monochrome fit (project-specific)

Every landing in this project is strictly monochrome (see `astro-landing-pages`). Photos are typically rendered under a grayscale CSS filter, or paired with monochrome layout so that color is not carrying meaning.

When picking photos:
- Favor **strong tonal range** — deep shadows and clean highlights survive desaturation.
- Avoid photos where **color is the subject** — a vivid red door, a color-coded diagram, a saturated brand shot. Once grayscale, they collapse.
- Textures, architecture, portraits with directional light, industrial and natural scenes tend to translate well to grayscale.
- Confirm mentally (or by preview) that the image reads correctly under `filter: grayscale(1)` before committing.

Do not permanently desaturate or re-encode the Unsplash source; presentation-time CSS filters are the correct way to achieve the monochrome look while still hotlinking the original.

---

## 13. Downloadable landings — attribution must travel

Landings in this project are exhibited and later downloaded by third parties. When a landing is copied out of this repo, its Unsplash attribution must remain intact and correct.

- Persist attribution in the landing's own `data/` folder (rule 8), not in a global helper the copy would leave behind.
- Do not centralize UTM/attribution rendering in a platform-level component that lives outside the landing. If a shared component is used, its usage inside the landing must still contain, verbatim, the metadata fields required for attribution.
- The landing's `README.md` should note that its imagery comes from Unsplash and that the credits must be preserved by anyone reusing the code.

If any of the above cannot be guaranteed for a specific selection, do not use Unsplash for that image.

---

## 14. Auditing an existing landing

When asked to audit a landing's Unsplash usage, verify each of the following. Report each item as pass/fail with the file and line.

1. **Source integrity** — every `src` for an Unsplash image comes from `images.unsplash.com` (either a `photo.urls.*` preset or `raw` + documented sizing parameters). No self-hosted copies under `/public/` or `src/assets/`.
2. **Metadata completeness** — every image has `id`, `src`, `alt`, `width`, `height`, `author`, `authorUrl`, `sourceUrl`, `unsplashUrl`, `downloadLocation` persisted in the landing's `data/`.
3. **Attribution present** — every image renders a visible caption naming the photographer and Unsplash, with real anchor tags to both, laid out below the photo in normal flow (never overlaid on top of it), plus a `title` attribute on the `<img>` as a supplementary hover tooltip (not a replacement for the caption).
3b. **Page-level credits list present** — the landing's `Footer.astro` renders a consolidated "Photo credits" list (§9.5) built from an `allImages` array in `data/images.ts`, covering every distinct photo used in the landing.
4. **UTM correctness** — every Unsplash-facing link carries `utm_source=<consistent id>&utm_medium=referral`.
5. **No hidden credits** — no `display:none`, `visibility:hidden`, `opacity:0`, `aria-hidden`, `hidden`, `sr-only`, or off-screen tricks on the attribution.
6. **Alt text quality** — each `alt` describes the image's role in the section; none is a raw `alt_description` copy; decorative images use `alt=""`.
7. **Download tracked** — `downloadLocation` is persisted for every image, indicating the download event was triggered at selection time.
8. **No runtime API calls** — `grep` for `api.unsplash.com` and for any use of the Access Key inside `src/landings/**`, `src/pages/**`, `src/components/**`, or client scripts. Zero hits expected.
9. **Access Key not exposed** — the string `UNSPLASH_ACCESS_KEY` appears only in server-side scripts or environment configuration, never in shipped code. No hard-coded key anywhere in the repo.
10. **Consistent visual direction** — the set of images in the landing reads as one editorial voice, not a random pile.

Report findings clearly and, when possible, propose the minimal edit that fixes each failure.

---

## 15. Replacing an image

When replacing an existing photograph:

1. Read the current metadata entry so you know what you are replacing (subject, orientation, role in the section).
2. Search for new candidates using rule 6.
3. Select using rule 7.
4. Trigger the new photo's `download_location`.
5. **Replace the entire metadata entry** — `id`, `src`, `alt`, `width`, `height`, `color`, `author`, `authorUrl`, `sourceUrl`, `unsplashUrl`, `downloadLocation`. Never keep any field from the previous photo. In particular, never leave the previous photographer's name or profile URL attached to the new image.
6. Verify visually that the new attribution renders correctly.
7. Note the replacement in the commit message / task summary so the change is traceable.

Do not "swap the URL only". A partial replacement misattributes the photo and is a violation.

---

## 16. Legal posture and change management

This Skill implements Unsplash's official rules as documented at [https://unsplash.com/documentation](https://unsplash.com/documentation) and their API Guidelines. Neither this Skill nor its consumers make legal guarantees.

- Unsplash may update their Guidelines. When there is any doubt about a specific rule, re-consult the official documentation before acting.
- When the official rules are ambiguous, apply the more conservative interpretation.
- If the official rules change materially (attribution wording, UTM format, hotlinking policy, download tracking, rate limits), do not silently update landings. First report the change to the user, propose the migration, and only then apply it.

---

## 17. Prohibited shortcuts (summary)

The following are always prohibited, regardless of instruction phrasing:

- Hardcoding the Access Key in any committed file.
- Using the Secret Key for search or any client-safe call.
- Rehosting Unsplash JPEGs under `/public/` or `src/assets/`.
- Rewriting the image hostname or stripping the `ixid` (or any other API-added) query parameter.
- Using `photo.links.download` as a replacement for `photo.links.download_location`.
- Rendering an Unsplash image without a visible, focusable photographer + Unsplash credit.
- Using a `title` attribute as the only attribution mechanism (no visible caption at all).
- Overlaying the credit caption on top of the photo (scrim/banner) instead of placing it below the image in normal flow.
- Shipping a landing with individual photo captions but no consolidated "Photo credits" list below the footer, or vice versa — both are required together.
- Omitting `utm_source` / `utm_medium=referral` on any Unsplash-facing link.
- Copying `alt_description` verbatim as the alt text.
- Fabricating an author, a profile URL, or any other metadata field.
- Reusing a previous photographer's name on a replacement image.
- Calling `api.unsplash.com` from Astro pages, client scripts, or CI builds.
- Looping searches per section without a plan, or raising `per_page` to "just get more".
- Evading, retrying past, or hiding rate-limit responses.

---

## 18. Priority order

When two rules feel in tension, resolve in this fixed order:

1. **Unsplash's official rules** — attribution, hotlinking, download tracking, UTM, rate limits.
2. **Traceability** — persisted metadata that survives a landing being copied out of the repo.
3. **API-call minimalism** — fewer, sharper requests over more, broader ones.
4. **Visual quality of the selection** — the right photo for the section.
5. **Visual polish of the credit** — how the attribution is composed inside the design.

Never sacrifice attribution for design cleanliness. Never sacrifice Unsplash's rules to save implementation effort. Never call the API in production when a persisted URL and metadata already exist.
