import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.string().default('Ministério'),
    author: z.string().default('Equipe Esboço Online'),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };
