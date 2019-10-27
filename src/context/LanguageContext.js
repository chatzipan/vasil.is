import React, { createContext, useCallback, useState } from 'react'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'

const LanguageContext = createContext({
  language: 'en',
  selectLanguage: () => true,
})

export const LanguageContextProvider = ({ children }) => {
  const [, i18n] = useTranslation()
  const [language, setLanguage] = useState(i18n.language)

  const selectLanguage = useCallback(
    lang => {
      i18n.changeLanguage(lang)
      setLanguage(lang)
    },
    [i18n, setLanguage]
  )

  return (
    <LanguageContext.Provider value={{ language, selectLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageContext
