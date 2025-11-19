'use client'

import { useState } from 'react'
import { useTranslation } from '@/contexts/TranslationContext'

export default function SignInPage() {
  const { t } = useTranslation()
  const [signInForm, setSignInForm] = useState({
    email: '',
    password: '',
  })

  const handleSignInSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Sign in form submitted:', signInForm)
    alert('Sign in functionality will be implemented soon.')
    setSignInForm({ email: '', password: '' })
  }

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <h1 className="text-5xl font-bold text-center mb-4 text-gray-800 dark:text-gray-100 animate-fadeInUp">{t('signIn')}</h1>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 text-xl animate-fadeIn">
            Welcome back! Please sign in to your account.
          </p>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-2xl transition-smooth animate-scaleIn">
            <form onSubmit={handleSignInSubmit} className="space-y-6">
              <div>
                <label htmlFor="signin-email" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  {t('email')}
                </label>
                <input
                  type="email"
                  id="signin-email"
                  value={signInForm.email}
                  onChange={(e) => setSignInForm({ ...signInForm, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-smooth"
                  placeholder={t('yourEmail')}
                />
              </div>
              <div>
                <label htmlFor="signin-password" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  {t('password')}
                </label>
                <input
                  type="password"
                  id="signin-password"
                  value={signInForm.password}
                  onChange={(e) => setSignInForm({ ...signInForm, password: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-orange focus:border-transparent transition-smooth"
                  placeholder="••••••••"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-gray-600 dark:text-gray-300">{t('rememberMeCheck')}</span>
                </label>
                <a href="#" className="text-primary-orange hover:underline">
                  {t('forgotPassword')}
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-primary-orange text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-smooth font-semibold text-lg transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                {t('signIn')}
              </button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-gray-600 dark:text-gray-300">
                {t('signUpLink')}{' '}
                <a href="#" className="text-primary-orange hover:underline font-semibold">
                  {t('signUpButton')}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

