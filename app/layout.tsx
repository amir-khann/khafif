import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin', 'latin-ext'] })

export const metadata: Metadata = {
  title: 'Khafif - Enjoy Our Delicious Snacks',
  description: 'Order now and enjoy our snacks. Tastyliscious Popcorn, Crunchy Nachos, Freshly Baked Cookies, and more!',
  keywords: 'snacks, popcorn, nachos, cookies, food delivery, Saudi Arabia',
  openGraph: {
    title: 'Khafif - Enjoy Our Delicious Snacks',
    description: 'Order now and enjoy our snacks',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr">
      <body className={inter.className}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

