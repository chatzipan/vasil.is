import { useContext } from 'react'

import LanguageContext from '../context/LanguageContext'

const useLanguage = () => {
  const { language, selectLanguage } = useContext(LanguageContext)
  return { language, selectLanguage }
}

export default useLanguage
