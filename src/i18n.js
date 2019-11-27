import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next, useTranslation } from 'react-i18next'

import translation_de from './locales/de/translations.json'
import translation_en from './locales/en-GB/translations.json'
import translation_el from './locales/el/translations.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en-GB',
    debug: process.env.NODE_ENV === 'development',
    react: {
      useSuspense: false,
    },
  })

i18n.addResourceBundle('en', 'translation', translation_en)
i18n.addResourceBundle('en-GB', 'translation', translation_en)
i18n.addResourceBundle('en-US', 'translation', translation_en)
i18n.addResourceBundle('de', 'translation', translation_de)
i18n.addResourceBundle('de-CH', 'translation', translation_de)
i18n.addResourceBundle('de-DE', 'translation', translation_de)
i18n.addResourceBundle('el', 'translation', translation_el)

export default i18n
