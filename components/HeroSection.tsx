'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from '@/contexts/TranslationContext'
import { useTheme } from '@/contexts/ThemeContext'
import { getImagePath } from '@/utils/imagePath'

export default function HeroSection() {
  const { t } = useTranslation()
  const { theme } = useTheme()
  
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
            
            <div className="flex items-center gap-4 flex-wrap">
              {/* App Store Badge */}
              <a
                href="https://apps.apple.com/sa/app/%D8%AE%D9%81%D9%8A%D9%81/id1533527641"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-smooth transform hover:scale-105"
                aria-label="Download on the App Store"
                style={{ height: '50px', display: 'flex', alignItems: 'center' }}
              >
                {theme === 'dark' ? (
                  <img
                    src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/white/en-us?size=250x83&releaseDate=1609459200"
                    alt="Download on the App Store"
                    style={{ height: '50px', width: 'auto', objectFit: 'contain', display: 'block' }}
                  />
                ) : (
                  <img
                    src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1609459200"
                    alt="Download on the App Store"
                    style={{ height: '50px', width: 'auto', objectFit: 'contain', display: 'block' }}
                  />
                )}
              </a>
              
              {/* Google Play Badge */}
              <a
                href="https://play.google.com/store/apps/details?id=com.khafif.android&pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-smooth transform hover:scale-105"
                aria-label="Get it on Google Play"
                style={{ height: '50px', display: 'flex', alignItems: 'center' }}
              >
                {theme === 'dark' ? (
                  <img
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                    alt="Get it on Google Play"
                    style={{ 
                      height: '50px', 
                      width: 'auto', 
                      objectFit: 'contain', 
                      display: 'block',
                      filter: 'brightness(0) invert(1)',
                      opacity: 0.9
                    }}
                  />
                ) : (
                  <img
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                    alt="Get it on Google Play"
                    style={{ 
                      height: '50px', 
                      width: 'auto', 
                      objectFit: 'contain', 
                      display: 'block'
                    }}
                  />
                )}
              </a>
            </div>
          </div>

          <div className="relative animate-slideInRight">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={getImagePath('/hero-home-screen.jpeg')}
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

