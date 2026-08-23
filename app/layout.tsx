import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const siteUrl = 'https://jeanromeo.dev'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Romeo Netflix',
    template: '%s | Romeo Netflix',
  },
  description:
    'Romeo Netflix is a software developer from Rwanda building modern web applications, business systems and responsive digital experiences.',
  keywords: [
    'Romeo Netflix',
    'Software Developer',
    'Rwanda',
    'Web Applications',
    'Business Systems',
    'Next.js Developer',
    'AUCA',
  ],
  authors: [{ name: 'Romeo Netflix' }],
  creator: 'Jean Romeo Nuwokwizerwa',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'Jean Romeo Nuwokwizerwa | Software Developer',
    description:
      'Software developer from Rwanda building modern web applications, business systems and responsive digital experiences.',
    siteName: 'Jean Romeo Nuwokwizerwa',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jean Romeo Nuwokwizerwa | Software Developer',
    description:
      'Software developer from Rwanda building modern web applications, business systems and responsive digital experiences.',
  },
  robots: {
    index: true,
    follow: true,
  }
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#111111',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
