// let's pick <base href="/ionic-nuxt-app/" /> when GitHub pages:
const baseHref = process.env.BASE_HREF || '/';
export default {
  head: {
    link: [
      // favicon for GitBub pages base href
      { rel: 'icon', type: 'image/x-icon', href: baseHref + 'favicon.ico' }
    ]
  },
  css: [
    // add required css:
    '../node_modules/@ionic/core/css/core.css',
    '../node_modules/@ionic/core/css/normalize.css',
    '../node_modules/@ionic/core/css/structure.css',
    '../node_modules/@ionic/core/css/typography.css',
    '../node_modules/@ionic/core/css/ionic.bundle.css',
  ],
  plugins: [
    // add created plugin:
    { src: '~/plugins/ionic.js', mode: 'client' },
  ],
  buildModules: ['@nuxtjs/tailwindcss'],
  generate: {
    routes: [
      '/',
    ],
  },
  router: {
    // router with correct public path
    base: baseHref,
    mode: 'history',
  },
  // skipped others...
}