/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  i18n: {
    locales: ["en", "ru"],
    defaultLocale: "en",
    localeDetection: true,
  }
}

module.exports = nextConfig
