module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
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
        },
      },
      fontFamily: {
        brandSignature: ['Montserrat'],
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
      margin: ['hover', 'focus'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
