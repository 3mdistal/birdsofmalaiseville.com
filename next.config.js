import { withPayload } from '@payloadcms/next/withPayload'

const serverUrl =
  process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
    ? 'https://' + process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL
    : process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview'
      ? 'https://' + process.env.NEXT_PUBLIC_VERCEL_URL
      : 'http://localhost:3000'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      ...[serverUrl].map((item) => {
        const url = new URL(item)

        return {
          hostname: url.hostname,
          protocol: url.protocol.replace(':', ''),
          pathname: '/api/media/**',
        }
      }),
    ],
  },
  reactStrictMode: true,
}

export default withPayload(nextConfig)
