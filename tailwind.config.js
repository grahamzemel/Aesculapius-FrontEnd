module.exports = {
  darkMode: 'class', // This can be 'media' if preferred.
  // Don't add a glob below `public` as Rollup doesn't
  // recognize them and will rebuild in an infinite loop.
  content: [
    './src/**/*.svelte',
    './src/**/*.html',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        'background': '#1a202c',
        'primary': '#808080',
        'title': '#404040',
        'offwhite': '#f8f8f8',
      },
    },
  },
  plugins: [],
}
