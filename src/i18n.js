import i18n from 'i18next'
import Backend from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next, useTranslation } from 'react-i18next'

import translation_en from './locales/en-GB/translations.json'
import translation_de from './locales/de/translations.json'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en-EN',
    // have a common namespace used around the full app
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
    backend: {
      loadPath: './locales/{{lng}}/translations.json',
    },
    react: {
      wait: true,
    },
  })

i18n.addResourceBundle('en', 'translation', translation_en)
i18n.addResourceBundle('en-GB', 'translation', translation_en)
i18n.addResourceBundle('de', 'translation', translation_de)

export default i18n
