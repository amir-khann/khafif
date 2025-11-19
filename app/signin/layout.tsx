import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign In - Khafif',
  description: 'Sign in to your Khafif account to order delicious snacks.',
}

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

