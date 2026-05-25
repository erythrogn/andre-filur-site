'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { translations, Language, TranslationKey } from '@/locales'

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  setLanguage: (lang: string) => void;
  t: (key: TranslationKey | string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt')

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt' ? 'en' : 'pt')
  }

  const t = (key: TranslationKey | string): string => {
    return (translations[language][key as TranslationKey] as string) || (key as string)
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage: (lang) => setLanguage(lang as Language), t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}