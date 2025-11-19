'use client'

import Image from 'next/image'
import { useTranslation } from '@/contexts/TranslationContext'
import { getImagePath } from '@/utils/imagePath'

export default function MenuPage() {
  const { t } = useTranslation()
  
  const menuItems = [
    {
      id: 1,
      image: getImagePath('/menu1.png'),
      title: t('menu1Title'),
      description: t('menu1Description'),
    },
    {
      id: 2,
      image: getImagePath('/menu2.png'),
      title: t('menu2Title'),
      description: t('menu2Description'),
    },
    {
      id: 3,
      image: getImagePath('/menu3.png'),
      title: t('menu3Title'),
      description: t('menu3Description'),
    },
    {
      id: 4,
      image: getImagePath('/Mocha.png'),
      title: t('menu4Title'),
      description: t('menu4Description'),
    },
    {
      id: 5,
      image: getImagePath('/slush.png'),
      title: t('menu5Title'),
      description: t('menu5Description'),
    },
    {
      id: 6,
      image: getImagePath('/French Fries.png'),
      title: t('menu6Title'),
      description: t('menu6Description'),
    },
  ]
  
  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-4 text-gray-800 dark:text-gray-100 animate-fadeInUp">{t('ourMenu')}</h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 text-xl animate-fadeIn">
          {t('discoverMenu')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-smooth transform hover:-translate-y-2 animate-scaleIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-300 transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary-orange">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

