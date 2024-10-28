import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    localPatterns: [
      {
        pathname: '/api/media/**',
      },
    ],
    // remotePatterns: [
    //   {
    //     hostname: process.env.VERCEL_PROJECT_PRODUCTION_URL ?? '',
    //     protocol: 'https',
    //     pathname: '/api/media/**',
    //   },
    //   {
    //     hostname: process.env.VERCEL_URL ?? '',
    //     protocol: 'https',
    //     pathname: '/api/media/**',
    //   },
    // ],
  },
  reactStrictMode: true,
}

export default withPayload(nextConfig)
