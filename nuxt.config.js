export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'executiveabnuxt',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Montserrat:400,600,700',
      },
    ],
  },
  loading: {
    color: '#e67b25',
    throttle: 200,
    failedColor: 'red',
    height: '10px',
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['swiper/css/swiper.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '@/plugins/swiper.js', mode: 'client' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/fontawesome',
      {
        component: 'fa',
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['nuxt-webfontloader'],
  webfontloader: {
    google: {
      families: ['Montserrat:400,600,700'], // Loads B612 font with weights 400 and 700
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
