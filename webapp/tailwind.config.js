// tailwind.config.js
module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
            'neon': '#70ff3e',
          }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }