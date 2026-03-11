import { useEffect, useMemo, useState } from 'react'
import { translations } from './translations'
import { I18nContext } from './I18nContext'

const STORAGE_KEY = 'izichangepay-language'
const FALLBACK_LANGUAGE = 'EN'
const SUPPORTED_LANGUAGES = ['FR', 'EN']

const getInitialLanguage = () => {
  const storedLanguage = localStorage.getItem(STORAGE_KEY)

  if (storedLanguage && SUPPORTED_LANGUAGES.includes(storedLanguage)) {
    return storedLanguage
  }

  const browserLanguage = navigator.language?.toUpperCase().startsWith('FR') ? 'FR' : 'EN'
  return browserLanguage
}

export function I18nProvider({ children }) {
  const [language, setLanguageState] = useState(getInitialLanguage)

  const setLanguage = (nextLanguage) => {
    if (!SUPPORTED_LANGUAGES.includes(nextLanguage)) return
    setLanguageState(nextLanguage)
  }

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language)
    document.documentElement.lang = language.toLowerCase()
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language] || translations[FALLBACK_LANGUAGE],
    }),
    [language],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
