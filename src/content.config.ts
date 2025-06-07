import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

/** SCHEMAS */
const articleSchema = z.object({
  title: z.string(),
  description: z.string(),
  author: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
});

/** COLLECTIONS */
const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/articles" }),
  schema: articleSchema,
});

/** EXPORT COLLECTIONS */
export const collections = { articles };
