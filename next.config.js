/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["links.papareact.com", "cdn.sanity.io"]
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
