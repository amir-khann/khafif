import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Menu - Khafif',
  description: 'Browse our delicious menu: Popcorn, Nachos, Cookies, Ice Cream, Slush, and French Fries',
}

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

