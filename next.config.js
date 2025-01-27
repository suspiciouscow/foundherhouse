/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove output: 'export' since you want to use API routes
  images: {
    domains: ['your-domain.com'], // Add any image domains you need
  },
}

module.exports = nextConfig