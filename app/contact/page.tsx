'use client'

import { useState } from 'react'
import { useTranslation } from '@/contexts/TranslationContext'
import Link from 'next/link'

export default function ContactPage() {
  const { t } = useTranslation()
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact form submitted:', contactForm)
    alert('Thank you for your message! We will get back to you soon.')
    setContactForm({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-4 text-gray-800 dark:text-gray-100 animate-fadeInUp">{t('contactUs')}</h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 text-xl animate-fadeIn">
          {t('weLoveToHear')}
        </p>

        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-2xl transition-smooth animate-scaleIn">
            <h2 className="text-3xl font-bold mb-6 text-primary-orange">{t('sendMessage')}</h2>
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  {t('name')}
                </label>
                <input
                  type="text"
                  id="name"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-smooth"
                  placeholder={t('yourName')}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  {t('email')}
                </label>
                <input
                  type="email"
                  id="email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-smooth"
                  placeholder={t('yourEmail')}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  {t('phone')}
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={contactForm.phone}
                  onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-smooth"
                  placeholder={t('yourPhone')}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  {t('message')}
                </label>
                <textarea
                  id="message"
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-smooth"
                  placeholder={t('yourMessage')}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary-orange text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-smooth font-semibold text-lg transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                {t('sendMessageButton')}
              </button>
            </form>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-4xl mx-auto hover:shadow-2xl transition-smooth animate-fadeInUp">
          <h2 className="text-3xl font-bold mb-6 text-primary-orange text-center">{t('otherWaysToReach')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-primary-yellow rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-800 dark:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 dark:text-gray-300">{t('phoneLabel')}</h3>
              <p className="text-gray-600 dark:text-gray-300">+966 55 711 6527</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-yellow rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-800 dark:text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 dark:text-gray-300">{t('whatsappLabel')}</h3>
              <a
                href="https://wa.me/966557116527"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-orange hover:underline"
              >
                +966 55 711 6527
              </a>
            </div>
            <div className="text-center">
              <div className="bg-primary-yellow rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-800 dark:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 dark:text-gray-300">{t('locationLabel')}</h3>
              <p className="text-gray-600 dark:text-gray-300">الرياض الازدهار<br />عثمان بن عفان 7</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

