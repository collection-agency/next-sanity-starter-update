module.exports = {
  content: ['./components/**/*.js', './pages/**/*.js', './utils/sanity.js'],
  theme: {
    extend: {
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
