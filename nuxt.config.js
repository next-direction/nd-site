require('dotenv').config();

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon.png' },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    { src: '~assets/style/main.scss', lang: 'sass' },
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/filters.js',
    '~plugins/globalFunctions.js',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    'nuxt-material-design-icons',
    [
      'nuxt-i18n',
      {
        locales: ['en', 'de'],
        defaultLocale: 'en',
        detectBrowserLanguage: {
          useCookie: false,
          fallbackLocale: 'en',
        },
        vueI18n: {
          fallbackLocale: 'en',
        },
      },
    ],
  ],
  styleResources: {
    scss: [
      '~assets/style/variables.scss',
    ],
  },  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost',
  },
};
