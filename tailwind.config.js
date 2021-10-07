module.exports = {
  mode: "jit",
  purge: ["./.vitepress/theme/**/*.vue"],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
  },
};
