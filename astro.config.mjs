import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { remarkReadingTime } from "./src/helpers/remark-reading-time.mjs";

export default defineConfig({
  site: "https://alexei.me",
  integrations: [react(), tailwind()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: "github-dark",
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      // wrap: true,
    },
  },
});
