const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const readingTime = require("reading-time");

module.exports = {
  watch: "../blog/**/*.md",
  load(id) {
    console.log(`Loading ${id}`);
    const postDir = path.resolve(__dirname, "../blog");
    return fs
      .readdirSync(postDir)
      .filter(
        (file) =>
          file !== ".vitepress" && file !== "index.md" && file !== ".DS_Store"
      )
      .map((file) => getPost(file, postDir))
      .sort((a, b) => b.date.time - a.date.time);
  },
};

const cache = new Map();

function getPost(file, postDir) {
  const fullePath = path.join(postDir, file) + "/index.md";
  const timestamp = fs.statSync(fullePath).mtimeMs;

  const cached = cache.get(fullePath);
  if (cached && timestamp === cached.timestamp) {
    return cached.post;
  }

  const src = fs.readFileSync(fullePath, "utf-8");
  const stats = readingTime(src);
  const { data } = matter(src);
  const post = {
    title: data.title,
    href: `/blog/${file.replace(/\.md$/, ".html")}/`,
    date: formatDate(data.date),
    summary: data.summary,
    readTime: stats.text,
    hidden: !!data.hidden,
  };

  cache.set(fullePath, {
    timestamp,
    post,
  });
  return post;
}

function formatDate(date) {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  date.setUTCHours(12);
  return {
    time: +date,
    string: date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };
}
