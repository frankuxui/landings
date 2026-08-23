import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"
import { z } from "astro/zod"
import { CATEGORY_SLUGS } from "./types/category"
import { LANDING_STATUSES } from "./types/landing"
import { THEMES } from "./types/theme"

/** Persisted Unsplash attribution — see src/types/unsplash.ts (`UnsplashCredit`). */
const unsplashCreditSchema = z.object({
  id: z.string(),
  author: z.string(),
  authorUrl: z.string(),
  sourceUrl: z.string(),
  unsplashUrl: z.string(),
  downloadLocation: z.string(),
})

const landings = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/landings" }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    description: z.string(),
    subtitle: z.string().optional(),
    category: z.enum(CATEGORY_SLUGS),
    tags: z.array(z.string()).default([]),
    technologies: z.array(z.string()).default([]),
    thumbnail: z.string(),
    thumbnailAlt: z.string().optional(),
    thumbnailWidth: z.number().optional(),
    thumbnailHeight: z.number().optional(),
    thumbnailCredit: unsplashCreditSchema.optional(),
    previewImage: z.string().optional(),
    createdAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.string().default("frankuxui"),
    themes: z.array(z.enum(THEMES)).default(["light"]),
    featured: z.boolean().default(false),
    status: z.enum(LANDING_STATUSES).default("draft"),
  }),
})

export const collections = { landings }
