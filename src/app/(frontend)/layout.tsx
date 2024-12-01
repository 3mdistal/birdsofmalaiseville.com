import Css from '@/styles/css'

export const metadata = {
  metadataBase: new URL('https://birdsofmalaiseville.com'),
  title: {
    default: 'Birds of Malaiseville',
    template: '%s | Birds of Malaiseville',
  },
  description:
    'A collection of essays exploring the birds of Malaiseville through art and storytelling.',
  openGraph: {
    type: 'website',
    siteName: 'Birds of Malaiseville',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Birds of Malaiseville',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} style={{ backgroundColor: '#fdf8f2' }}>
        <Css>
          <div className="appRoot">{children}</div>
        </Css>
      </body>
    </html>
  )
}
