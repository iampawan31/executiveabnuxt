module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './data/**/*.js',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: '#eaa068',
          'gray-light': '#2e3137',
          'gray-medium-dark': '#1e2023',
          'gray-dark': '#191919',
          'gray-alternate': '#353535',
          'blue-dark': '#205b9e',
          'blue-light': '#3a9cc4',
          'turquoise-dark': '#53a4bb',
          'turquoise-light': '#29bec0',
          'green-dark': '#1eb38e',
          'green-light': '#3fccb0',
          'military-green-dark': '#4fb31e',
          'military-green-light': '#1ad950',
          'off-gray': '#f0f2f5',
        },
      },
      dropShadow: {
        max: '0 5px 15px rgba(0, 0, 0, 1)',
        'max-white': '0 5px 15px rgba(255, 255,255, 0.5)',
      },
      fontFamily: {
        brandSignature: ['Montserrat'],
      },
      transitionProperty: {
        height: 'height',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
      margin: ['hover', 'focus'],
      display: ['group-hover'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
