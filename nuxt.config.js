require('dotenv').config();

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
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
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/firebase'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  firebase: {
    config: {
      production: {
        apiKey: process.env.FB_PROD_APIKEY,
        authDomain: process.env.FB_PROD_AUTHDOMAIN,
        databaseURL: process.env.FB_PROD_DBURL,
        projectId: process.env.FB_PROD_PROJECTID,
        storageBucket: process.env.FB_PROD_STORAGE,
        messagingSenderId: process.env.FB_PROD_MESSAGING,
        appId: process.env.FB_PROD_APP,
        measurementId: process.env.FB_PROD_MEASUREMENT
      },
      development: {
        apiKey: process.env.FB_STAGING_APIKEY,
        authDomain: process.env.FB_STAGING_AUTHDOMAIN,
        databaseURL: process.env.FB_STAGING_DBURL,
        projectId: process.env.FB_STAGING_PROJECTID,
        storageBucket: process.env.FB_STAGING_STORAGE,
        messagingSenderId: process.env.FB_STAGING_MESSAGING,
        appId: process.env.FB_STAGING_APP,
        measurementId: process.env.FB_STAGING_MEASUREMENT
      }
    },
    onFirebaseHosting: true,
    services: {
      firestore: true,
      storage: true,
      performance: true,
      analytics: true
    }
  }
}
