import fs from 'fs'
import path from 'path'
import colors from 'vuetify/es5/util/colors'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Claude Kirke',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'I am a full-stack developer. Laravel, Vue, Linux, Docker, and Git are my best friends! Check out what I can do in my portfolio.' },
      { name: 'format-detection', content: 'telephone=no' },

      // App Stuff ?
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'theme-color', content: '#ffffff' },

      // Open Graph Meta
      { name: 'og:title', content: 'Claude Kirke' },
      { name: 'og:type', content: 'profile' },
      { name: 'og:url', content: 'https://claudekirke.com/' },
      { name: 'og:image', content: 'https://claudekirke.com/images/claude_kirke.jpg' },
      { name: 'og:description', content: 'I am a full-stack developer. Laravel, Vue, Linux, Docker, and Git are my best friends! Check out what I can do in my portfolio.' },

    ],
    link: [
      // Icons
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v=1' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png?v=1' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png?v=1' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-touch-icon.png?v=1' },
      { rel: 'mask-icon',  color: '#5bbad5', href: '/safari-pinned-tab.svg?v=1' },
      { rel: 'shortcut-icon', href: '/favicon.ico?v=1' },

      // Manifest
      { rel: 'manifesst', href: '/site.webmanifest?v=1' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/gtm',
  ],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  gtm: {
    id: 'G-L1BW55E00Q',
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'ssl/server.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'ssl/server.crt')),
    },
  },
}
