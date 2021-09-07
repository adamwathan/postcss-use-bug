const use = require("postcss-use");

module.exports = {
  plugins: [
    require("postcss-import"),
    // require("tailwindcss"),
    use({
      modules: ["tailwindcss"],
    }),
    require("autoprefixer"),
  ],
};
