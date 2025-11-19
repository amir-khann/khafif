'use client'

import { useTranslation } from '@/contexts/TranslationContext'

const jobs = [
  {
    id: 1,
    title: 'Odoo Consultant',
    location: 'الرياض الازدهار عثمان بن عفان 7, Saudi Arabia',
    postedDate: '2024-01-15',
    description: 'We are looking for an experienced Odoo Consultant to join our team. You will be responsible for implementing and customizing Odoo ERP solutions for our business needs.',
  },
  {
    id: 2,
    title: 'General Accountant',
    location: 'الرياض الازدهار عثمان بن عفان 7, Saudi Arabia',
    postedDate: '2024-01-10',
    description: 'We are seeking a qualified General Accountant to manage our financial records and ensure accurate bookkeeping. The ideal candidate should have experience in accounting principles and financial reporting.',
  },
]

export default function CareersPage() {
  const { t } = useTranslation()
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-4 text-gray-800 dark:text-gray-100 animate-fadeInUp">{t('careers')}</h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 text-xl animate-fadeIn">
          {t('joinTeam')}
        </p>
        <div className="max-w-4xl mx-auto space-y-6">
          {jobs.map((job, index) => (
            <div
              key={job.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-2xl transition-smooth transform hover:-translate-y-1 animate-scaleIn"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h2 className="text-3xl font-bold text-primary-orange mb-2 md:mb-0">
                  {job.title}
                </h2>
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  {t('postedDate')}: {formatDate(job.postedDate)}
                </span>
              </div>
              <div className="mb-4">
                <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{job.location}</span>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">{job.description}</p>
              <button className="bg-primary-orange text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-smooth font-semibold transform hover:scale-105 shadow-md hover:shadow-lg">
                {t('applyButton')}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

