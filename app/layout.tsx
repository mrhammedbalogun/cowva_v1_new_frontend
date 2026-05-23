import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistSans = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist-sans",
})
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: 'Cowva - Nigeria\'s Most Trusted Vaccination Records Platform',
  description: 'Digitise your health facility\'s vaccination records, automate patient reminders, and grow your practice — all in one platform. Simple. Secure. Efficient.',
  keywords: ['vaccination', 'health records', 'Nigeria', 'healthcare', 'immunisation', 'patient management'],
  authors: [{ name: 'Cowva' }],
  openGraph: {
    title: 'Cowva - Nigeria\'s Most Trusted Vaccination Records Platform',
    description: 'Digitise your health facility\'s vaccination records, automate patient reminders, and grow your practice.',
    type: 'website',
    locale: 'en_NG',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cowva - Nigeria\'s Most Trusted Vaccination Records Platform',
    description: 'Digitise your health facility\'s vaccination records, automate patient reminders, and grow your practice.',
  },
}

export const viewport: Viewport = {
  themeColor: '#00B5AD',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased bg-[#0D1B2A]">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
