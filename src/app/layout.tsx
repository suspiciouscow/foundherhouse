// src/app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Outfit, Playfair_Display } from 'next/font/google' // Changed from Cormorant to Playfair for more impact

const outfit = Outfit({ subsets: ['latin'] })
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'], // Stronger weights for more impact
})

export const metadata: Metadata = {
  title: 'FoundHer House',
  description: 'A collaborative space where young women founders can innovate, connect, and build impactful startups.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${outfit.className} ${playfair.variable}`}>{children}</body>
    </html>
  )
}