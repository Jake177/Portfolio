import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const sans = localFont({ src: './fonts/manrope-latin.woff2', weight: '200 800', variable: '--font-sans', display: 'swap' })
const mono = localFont({ src: './fonts/ibm-plex-mono-latin.woff2', weight: '400', variable: '--font-mono', display: 'swap' })

export const metadata: Metadata = {
  title: 'James Ling — IT Solutions Architect',
  description: 'Independent IT solutions architect in Melbourne. Lark / Feishu integration, full-stack web development, deployment and iOS apps for small businesses and founders.',
  metadataBase: new URL('https://jake177.github.io/Portfolio/'),
  openGraph: {
    title: 'James Ling — IT Solutions Architect',
    description: 'Business systems, workflow automation, websites and iOS apps. Design, development, deployment and ongoing support.',
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
