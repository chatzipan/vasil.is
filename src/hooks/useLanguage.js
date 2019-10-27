import { useContext } from 'react'

import LanguageContext from '../context/LanguageContext'

export const useLanguage = () => {
  const { language, selectLanguage } = useContext(LanguageContext)
  return { language, selectLanguage }
}
