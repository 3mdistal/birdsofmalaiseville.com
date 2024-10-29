import Css from '@/styles/css'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Css>
          <div className="appRoot">{children}</div>
        </Css>
      </body>
    </html>
  )
}
