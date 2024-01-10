import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      summary: z.string(),
      desc: z.string(),
      image: image().refine((img) => img.width >= 500, {
        message: "Cover/og image must be at least 500 pixels wide!",
      }),
      heroImage: image().refine((img) => img.width >= 500, {
        message: "Cover image must be at least 500 pixels wide!",
      }),
      heroAlt: z.string(),
    }),
});

export const collections = {
  blog: blogCollection,
};
