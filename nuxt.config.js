require('dotenv').config()

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Google Sheet + Mapbox Mapper - DemocraciaOS',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap', rel: 'stylesheet' },
      { href: 'https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.css', rel: 'stylesheet' },
      { href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css', rel: 'stylesheet', integrity: 'sha256-h20CPZ0QyXlBuAw7A+KluUYx/3pK+c7lYEpqLTlxjYQ=', crossorigin: 'anonymous' }
    ],
    script: [
      { src: 'https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.js' }
    ]
  },
  /*
  ** Enviroment variables for the client
  */
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    googleSheetId: process.env.GOOGLE_SHEET_ID || '',
    mapboxApiKey: process.env.MAPBOX_API_KEY || '',
    mapboxMapStyle: process.env.MAPBOX_MAP_STYLE || '',
    mapCenterLatitude: process.env.MAP_CENTER_LATITUDE || '',
    mapCenterLongitude: process.env.MAP_CENTER_LONGITUDE || '',
    mapZoomDefault: process.env.MAP_ZOOM_DEFAULT || ''
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    // { src: '@/assets/scss/buefy-overrides.scss', lang: 'sass' }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-analytics'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    ['nuxt-env', {
      keys: [
        { key: 'BASE_URL', name: 'baseUrl' },
        { key: 'GOOGLE_API_KEY', name: 'googleApiKey', secret: true },
        { key: 'GOOGLE_SHEET_ID', name: 'googleSheetId' },
        { key: 'MAPBOX_API_KEY', name: 'mapboxApiKey' },
        { key: 'MAPBOX_MAP_STYLE', name: 'mapboxMapStyle' },
        { key: 'MAP_CENTER_LATITUDE', name: 'mapCenterLatitude' },
        { key: 'MAP_CENTER_LONGITUDE', name: 'mapCenterLongitude' },
        { key: 'MAP_ZOOM_DEFAULT', name: 'mapZoomDefault' }
      ]
    }]
  ],
  serverMiddleware: [
    '~/api/sheets.js'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseUrl: process.env.baseUrl
  },
  /*
  ** Google Analytics configuration
  ** See https://github.com/nuxt-community/analytics-module
  */
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID,
    dev: false
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
