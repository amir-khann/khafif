'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from '@/contexts/TranslationContext'

export default function HeroSection() {
  const { t } = useTranslation()
  
  return (
    <section className="relative min-h-[600px] flex items-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-slideInLeft">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
              {t('orderNowAndEnjoy')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t('orderUsingApp')}
            </p>
            
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-smooth transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.42-.5-3.84-.5-1.42 0-2.75 0-3.84.5-1.03.48-2.1.55-3.08-.4C1.79 19.25 1 16.21 1 12c0-4.21.79-7.25 1.37-8.28.98-.95 2.05-.88 3.08-.4C6.55 3.82 7.88 3.82 9.3 3.82c1.42 0 2.75 0 3.84-.5 1.03-.48 2.1-.55 3.08.4C17.21 4.75 18 7.79 18 12c0 4.21-.79 7.25-1.37 8.28zM10.5 6.75v10.5l6-5.25-6-5.25z"/>
                </svg>
                <span>iOS</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-smooth transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <span>Android</span>
              </a>
            </div>
          </div>

          <div className="relative animate-slideInRight">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/hero-home-screen.jpeg"
                alt="Hero Image"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full opacity-90 hover:opacity-100 transition-opacity duration-300"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="absolute bottom-8 right-8 animate-float">
              <Link
                href="/menu"
                className="bg-primary-orange text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-smooth shadow-xl hover:shadow-2xl transform hover:scale-110"
              >
                {t('orderNow')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

