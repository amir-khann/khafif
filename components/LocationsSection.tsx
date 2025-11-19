'use client'

import React from 'react'
import { useTranslation } from '@/contexts/TranslationContext'

export default function LocationsSection() {
  const { t } = useTranslation()
  
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100 animate-fadeInUp">{t('ourLocations')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="animate-slideInLeft">
            <h3 className="text-2xl font-semibold mb-4 text-primary-orange">{t('visitUs')}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              الريـاض الازدهار عثمان بن عفان 7, Saudi Arabia
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              {t('weLocated')}
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-smooth animate-slideInRight">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.5!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ5LjAiTiA0NsKwNDAnMzEuMSJF!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

