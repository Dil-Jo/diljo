/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['pocketbase-production-fba8.up.railway.app'],
  },
}

module.exports = nextConfig
