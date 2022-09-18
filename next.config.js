// next.config.js

const runtimeCaching = require('next-pwa/cache')
const withPWA = require('next-pwa')({
  dest: 'public',
})

module.exports = withPWA({
  // next.js config
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    runtimeCaching,
  },
  i18n: {
    locales: ['en', 'pt-BR', 'pt-PT'],
    defaultLocale: 'en',
  },
})
