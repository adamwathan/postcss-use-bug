const use = require('postcss-use')
const tailwindcss = require('tailwindcss')

module.exports = {
  plugins: [
    require('postcss-import'),
    // require('postcss-discard-comments'),
    use({
      modules: ['postcss-discard-comments'],
    }),
    require('autoprefixer'),
  ],
}
