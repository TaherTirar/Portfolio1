import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Taher's Portfolio",
  description: 'Portfolio website of Mohamed Taher Tirar',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
