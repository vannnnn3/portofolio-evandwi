import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import '@/styles/globals.css'
import { Navbar, Footer } from '@/components/sections'
import { ThemeProvider } from '@/components/providers/ThemeProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Evan Dwi - Full Stack Developer & Designer',
  description:
    'Premium portfolio website showcasing full-stack development expertise, modern design, and cutting-edge web technologies.',
  keywords:
    'developer, portfolio, full-stack, react, next.js, typescript, web design',
  authors: [{ name: 'Evan Dwi' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://evandwi.com',
    siteName: 'Evan Dwi Portfolio',
    title: 'Evan Dwi - Full Stack Developer & Designer',
    description:
      'Premium portfolio website showcasing full-stack development expertise',
    images: [
      {
        url: 'https://evandwi.com/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@evandwi',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#020617" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-background text-foreground`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="overflow-x-hidden">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
