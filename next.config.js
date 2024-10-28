import { withPayload } from '@payloadcms/next/withPayload'

// const NEXT_PUBLIC_SERVER_URL =
//   process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
//     ? 'https://' + process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL
//     : process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview'
//       ? 'https://' + process.env.NEXT_PUBLIC_VERCEL_URL
//       : 'http://localhost:3000'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: '**',
      },
    ],
  },
  reactStrictMode: true,
}

export default withPayload(nextConfig)
