export default function getServerUrl() {
  const serverUrl =
    process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
      ? 'https://' + process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL
      : process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview'
        ? 'https://' + process.env.NEXT_PUBLIC_VERCEL_URL
        : ''

  return serverUrl
}
