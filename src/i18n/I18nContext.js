import { createContext } from 'react'
import { translations } from './translations'

const FALLBACK_LANGUAGE = 'EN'

export const I18nContext = createContext({
  language: FALLBACK_LANGUAGE,
  setLanguage: () => {},
  t: translations[FALLBACK_LANGUAGE],
})
