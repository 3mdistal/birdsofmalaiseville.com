import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.vercel-storage.com',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/media/file/:filename*',
        destination: 'https://1des1qmcmnaqih0h.public.blob.vercel-storage.com/:filename*',
      },
    ]
  },
  reactStrictMode: true,
}

export default withPayload(nextConfig)
