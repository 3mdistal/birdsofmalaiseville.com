import localFont from 'next/font/local'
import { Ibarra_Real_Nova } from 'next/font/google'

const signatureFont = localFont({
  src: './aAgreementSignature.otf',
  weight: '400',
  style: 'normal',
  variable: '--font-signature',
  display: 'fallback',
  fallback: ['cursive'],
  adjustFontFallback: false,
  preload: true,
  declarations: [
    { prop: 'font-smooth', value: 'always' },
    { prop: '-webkit-font-smoothing', value: 'antialiased' },
  ],
})

const serifFont = Ibarra_Real_Nova({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'fallback',
  fallback: ['serif'],
})

export default function FontVars({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${signatureFont.variable} ${serifFont.variable}`}
      style={{ display: 'contents' }}
    >
      {children}
    </div>
  )
}
