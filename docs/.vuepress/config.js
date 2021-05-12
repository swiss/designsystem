module.exports = {
  title: "Vuepress Blog Example",
  description: "just another blog",
  postcss: {
    plugins: [
      require("tailwindcss")("./tailwind.config.js"),
      require("autoprefixer"),
    ],
  },
}