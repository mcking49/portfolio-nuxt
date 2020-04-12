require('dotenv').config();
const path = require('path');

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Miten | Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap' }
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
    '~/assets/scss/tailwind.scss'
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
    '@nuxtjs/firebase',
    'nuxt-purgecss'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    extractCss: true,
    postcss: {
      plugins: {
        tailwindcss: path.resolve(__dirname, './tailwind.config.js')
      }
    }
  },
  purgeCSS: {
    mode: 'postcss'
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
  },
  tailwindcss: {
    exposeConfig: true
  },
  router: {
    scrollBehavior(to) {
      if (to.hash) {
        const el = document.querySelector(to.hash);

        if (el) {
          const header = document.getElementsByTagName('header')[0];
          const top = el.offsetTop - header.offsetHeight;

          return window.scrollTo({
            top,
            behavior: 'smooth'
          });
        }
      }
    }
  },
  pwa: {
    manifest: {
      name: 'Miten Chauhan',
      background_color: '#17252A',
      short_name: 'Miten Chauhan',
      theme_color: '#3AAFA9'
    },
    meta: {
      name: "Miten Chauhan",
      theme_color: "#3AAFA9"
    }
  }
}
