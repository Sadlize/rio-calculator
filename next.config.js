/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/main",
      },
    ]
  },
}

module.exports = nextConfig
