import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers - Khafif',
  description: 'Join our team at Khafif. Explore career opportunities and job openings.',
}

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

