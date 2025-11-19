'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'en' | 'ar'

interface TranslationContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    home: 'Home',
    menu: 'Menu',
    careers: 'Careers',
    contact: 'Contact Us',
    orderNow: 'Order Now',
    orderNowAndEnjoy: 'Order now and enjoy our snacks.',
    orderUsingApp: 'Now you can order using our mobile application.',
    ourMenu: 'Our Menu',
    ourLocations: 'Our Locations',
    visitUs: 'Visit Us',
    joinOurTeam: 'Join our team and be part of something delicious!',
    posted: 'Posted',
    applyNow: 'Apply Now',
    sendMessage: 'Send us a Message',
    signIn: 'Sign In',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    message: 'Message',
    password: 'Password',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password?',
    dontHaveAccount: "Don't have an account?",
    signUp: 'Sign up',
    otherWaysToReach: 'Other Ways to Reach Us',
    discoverMenu: 'Discover our delicious selection of snacks and treats',
    contactUs: 'Contact Us',
    weLoveToHear: "We'd love to hear from you. Get in touch with us!",
    yourName: 'Your name',
    yourEmail: 'your.email@example.com',
    yourPhone: '+966 5XX XXX XXXX',
    yourMessage: 'Your message...',
    sendMessageButton: 'Send Message',
    rememberMeCheck: 'Remember me',
    signUpLink: "Don't have an account?",
    signUpButton: 'Sign up',
    phoneLabel: 'Phone',
    locationLabel: 'Location',
    whatsappLabel: 'WhatsApp',
    joinTeam: 'Join our team and be part of something delicious!',
    postedDate: 'Posted',
    applyButton: 'Apply Now',
    weLocated: 'We are located in the heart of Riyadh, serving delicious snacks to our valued customers.',
    quickLinks: 'Quick Links',
    footerDescription: 'Order now and enjoy our delicious snacks. Fresh, tasty, and delivered to you.',
    allRightsReserved: 'All rights reserved.',
    menu1Title: 'Tastyliscious Popcorn',
    menu1Description: 'Try our main roster, taste our different real mix flavored popcorn',
    menu2Title: 'Tasty-Crunchy-Nachos',
    menu2Description: 'Have a break. Enjoy the taste of our crunchy original Nachos',
    menu3Title: 'Freshly Baked Cookies',
    menu3Description: 'Enjoy our distinct taste of cookies others don\'t have it.',
    menu4Title: 'Delicious Ice Cream',
    menu4Description: 'Cool down with our premium ice cream flavors, made with the finest ingredients',
    menu5Title: 'Refreshing Slush',
    menu5Description: 'Beat the heat with our icy cold slush drinks in various flavors',
    menu6Title: 'French Fries with Hot Sauce',
    menu6Description: 'Are you craving to taste fried potatoes with spices and seasonings?',
  },
  ar: {
    home: 'الرئيسية',
    menu: 'القائمة',
    careers: 'الوظائف',
    contact: 'اتصل بنا',
    orderNow: 'اطلب الآن',
    orderNowAndEnjoy: 'اطلب الآن واستمتع بوجباتنا الخفيفة.',
    orderUsingApp: 'يمكنك الآن الطلب باستخدام تطبيقنا المحمول.',
    ourMenu: 'قائمتنا',
    ourLocations: 'مواقعنا',
    visitUs: 'زرنا',
    joinOurTeam: 'انضم إلى فريقنا وكن جزءًا من شيء لذيذ!',
    posted: 'تاريخ النشر',
    applyNow: 'قدم الآن',
    sendMessage: 'أرسل لنا رسالة',
    signIn: 'تسجيل الدخول',
    name: 'الاسم',
    email: 'البريد الإلكتروني',
    phone: 'الهاتف',
    message: 'الرسالة',
    password: 'كلمة المرور',
    rememberMe: 'تذكرني',
    forgotPassword: 'نسيت كلمة المرور؟',
    dontHaveAccount: 'ليس لديك حساب؟',
    signUp: 'سجل الآن',
    otherWaysToReach: 'طرق أخرى للتواصل معنا',
    discoverMenu: 'اكتشف مجموعتنا اللذيذة من الوجبات الخفيفة والحلويات',
    contactUs: 'اتصل بنا',
    weLoveToHear: 'نود أن نسمع منك. تواصل معنا!',
    yourName: 'اسمك',
    yourEmail: 'بريدك.الإلكتروني@example.com',
    yourPhone: '+966 5XX XXX XXXX',
    yourMessage: 'رسالتك...',
    sendMessageButton: 'إرسال الرسالة',
    rememberMeCheck: 'تذكرني',
    signUpLink: 'ليس لديك حساب؟',
    signUpButton: 'سجل الآن',
    phoneLabel: 'الهاتف',
    locationLabel: 'الموقع',
    whatsappLabel: 'واتساب',
    joinTeam: 'انضم إلى فريقنا وكن جزءًا من شيء لذيذ!',
    postedDate: 'تاريخ النشر',
    applyButton: 'قدم الآن',
    weLocated: 'نحن موجودون في قلب الرياض، نقدم وجبات خفيفة لذيذة لعملائنا الكرام.',
    quickLinks: 'روابط سريعة',
    footerDescription: 'اطلب الآن واستمتع بوجباتنا الخفيفة اللذيذة. طازجة ولذيذة ومُسلمة إليك.',
    allRightsReserved: 'جميع الحقوق محفوظة.',
    menu1Title: 'فشار لذيذ',
    menu1Description: 'جرب قائمتنا الرئيسية، تذوق أنواع الفشار المختلفة بنكهات حقيقية مختلطة',
    menu2Title: 'ناتشوز مقرمش لذيذ',
    menu2Description: 'خذ استراحة. استمتع بطعم ناتشوزنا المقرمش الأصلي',
    menu3Title: 'كوكيز مخبوزة طازجة',
    menu3Description: 'استمتع بطعم الكوكيز المميز الذي لا يمتلكه الآخرون.',
    menu4Title: 'آيس كريم لذيذ',
    menu4Description: 'تبرد مع نكهات الآيس كريم المميزة لدينا، المصنوعة من أجود المكونات',
    menu5Title: 'مشروب مثلج منعش',
    menu5Description: 'تغلب على الحر مع مشروباتنا المثلجة بنكهات متنوعة',
    menu6Title: 'بطاطس مقلية مع صلصة حارة',
    menu6Description: 'هل تتوق لتذوق البطاطس المقلية مع التوابل والبهارات؟',
  },
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ar')

  useEffect(() => {
    // Check for saved language preference or default to Arabic
    const savedLanguage = localStorage.getItem('language') as Language | null
    if (savedLanguage) {
      setLanguage(savedLanguage)
      if (typeof document !== 'undefined') {
        document.documentElement.lang = savedLanguage
        document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr'
      }
    } else {
      // Set default to Arabic if no saved preference
      if (typeof document !== 'undefined') {
        document.documentElement.lang = 'ar'
        document.documentElement.dir = 'rtl'
      }
    }
  }, [])

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ar' : 'en'
    setLanguage(newLang)
    localStorage.setItem('language', newLang)
    if (typeof document !== 'undefined') {
      document.documentElement.lang = newLang
      document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr'
    }
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <TranslationContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(TranslationContext)
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider')
  }
  return context
}

