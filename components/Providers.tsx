'use client'

import { TranslationProvider } from '@/contexts/TranslationContext'
import { ThemeProvider } from '@/contexts/ThemeContext'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <TranslationProvider>{children}</TranslationProvider>
    </ThemeProvider>
  )
}

