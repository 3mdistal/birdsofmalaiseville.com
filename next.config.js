import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL,
        protocol: 'https',
      },
      {
        hostname: process.env.NEXT_PUBLIC_VERCEL_URL,
        protocol: 'https',
      },
    ],
  },
  reactStrictMode: true,
}

export default withPayload(nextConfig)
