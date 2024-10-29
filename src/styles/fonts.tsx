import localFont from 'next/font/local'
import { Ibarra_Real_Nova } from 'next/font/google'

export const signatureFont = localFont({
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

export const serifFont = Ibarra_Real_Nova({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'fallback',
  fallback: ['serif'],
})
