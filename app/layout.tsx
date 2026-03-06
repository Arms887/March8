import type { Metadata } from 'next'
import { Noto_Serif_Armenian, Noto_Sans_Armenian } from 'next/font/google'
import './globals.scss'

const notoSerif = Noto_Serif_Armenian({
  subsets: ['armenian'],
  weight: ['400', '700', '900'],
  variable: '--font-display',
})

const notoSans = Noto_Sans_Armenian({
  subsets: ['armenian'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'Շնորհավոր 8 Մարտ!',
  description: 'Կանանց միջազգային օրվա շնորհավորանք',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hy">
      <body className={`${notoSerif.variable} ${notoSans.variable}`}>{children}</body>
    </html>
  )
}
