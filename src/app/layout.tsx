import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const sans = localFont({ src: './fonts/manrope-latin.woff2', weight: '200 800', variable: '--font-sans', display: 'swap' })
const mono = localFont({ src: './fonts/ibm-plex-mono-latin.woff2', weight: '400', variable: '--font-mono', display: 'swap' })

export const metadata: Metadata = {
  title: 'James Ling — Vibe Coder',
  description: 'Hey, I’m James. I build amazing things with AI. Vibe Coder at StarX Technology Solutions, based in Melbourne, Australia.',
  metadataBase: new URL('https://jake177.github.io/Portfolio/'),
  openGraph: {
    title: 'James Ling — Vibe Coder',
    description: 'I build amazing things with AI.',
    type: 'website',
    locale: 'en_AU',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${mono.variable}`}>{children}</body>
    </html>
  )
}
