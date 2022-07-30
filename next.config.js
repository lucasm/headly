// next.config.js
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  /* config options here */
};

(module.exports = withPWA({
  i18n: {
    locales: ["en", "pt-BR", "pt-PT"],
    defaultLocale: "en",
  },
  pwa: {
    dest: "public",
    runtimeCaching,
  },
})),
  nextConfig;
