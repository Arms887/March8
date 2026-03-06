import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'media.tenor.com' },
      { protocol: 'https', hostname: 'media1.tenor.com' },
      { protocol: 'https', hostname: 'media2.tenor.com' },
    ],
  },
}

export default nextConfig
