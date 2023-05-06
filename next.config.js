/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  img: {
    domains: ['images.ctfassets.net'],
  }
}

module.exports = nextConfig
