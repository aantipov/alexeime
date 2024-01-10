import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const blog = await getCollection("blog");

  return rss({
    title: "Alexey's Dev Notes: Web Engineering & More",
    description:
      "Dive into web dev, AI, and the indie hacker world with Alexey. Practical advice, industry trends, and personal stories await.",
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: blog
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.date,
        description: post.data.desc,
        link: `/blog/${post.slug}/`,
      }))
      .sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate)),
    stylesheet: "/rss/styles.xsl",
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
}
