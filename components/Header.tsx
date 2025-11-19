'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useTranslation } from '@/contexts/TranslationContext'
import { useTheme } from '@/contexts/ThemeContext'
import { getImagePath } from '@/utils/imagePath'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, toggleLanguage, t } = useTranslation()
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md sticky top-0 z-50 animate-fadeIn">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center transform hover:scale-105 transition-smooth">
            <Image
              src={getImagePath('/logo.png')}
              alt="Khafif Logo"
              width={120}
              height={60}
              className="object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-primary-orange transition-smooth relative group">
              {t('home')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-orange transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/menu" className="text-gray-700 dark:text-gray-300 hover:text-primary-orange transition-smooth relative group">
              {t('menu')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-orange transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/careers" className="text-gray-700 dark:text-gray-300 hover:text-primary-orange transition-smooth relative group">
              {t('careers')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-orange transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-primary-orange transition-smooth relative group">
              {t('contact')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-orange transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/signin" className="text-gray-700 dark:text-gray-300 hover:text-primary-orange transition-smooth relative group">
              {t('signIn')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-orange transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-primary-orange transition-smooth"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 bg-primary-orange text-white rounded-lg hover:bg-orange-600 transition-smooth transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              {language === 'en' ? 'عربي' : 'English'}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-primary-orange transition-smooth"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <button
              className="text-gray-700 dark:text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            </button>
          </div>
        </div>

        <div className={`md:hidden mt-4 space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
            {isMenuOpen && (
              <>
                <Link 
                  href="/" 
                  className="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary-orange transition-smooth"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('home')}
                </Link>
                <Link 
                  href="/menu" 
                  className="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary-orange transition-smooth"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('menu')}
                </Link>
                <Link 
                  href="/careers" 
                  className="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary-orange transition-smooth"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('careers')}
                </Link>
                <Link 
                  href="/contact" 
                  className="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary-orange transition-smooth"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('contact')}
                </Link>
                <Link 
                  href="/signin" 
                  className="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary-orange transition-smooth"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('signIn')}
                </Link>
                <button
                  onClick={() => {
                    toggleLanguage()
                    setIsMenuOpen(false)
                  }}
                  className="w-full text-left py-2 px-4 bg-primary-orange text-white rounded-lg hover:bg-orange-600 transition-smooth"
                >
                  {language === 'en' ? 'عربي' : 'English'}
                </button>
              </>
            )}
          </div>
      </nav>
    </header>
  )
}

