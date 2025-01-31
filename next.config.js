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
    unoptimized: process.env.NODE_ENV === 'development', // This is to see images in dev.
  },
  async rewrites() {
    return [
      {
        source: '/api/media/file/:filename*',
        destination: 'https://lexjgnovoiqrpdxf.public.blob.vercel-storage.com/:filename*',
      },
    ]
  },
  reactStrictMode: true,
}

export default withPayload(nextConfig)
