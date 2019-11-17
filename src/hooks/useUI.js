import { useContext } from 'react'

import { UIContext } from '../context'

const useUI = () => {
  const { homepage, language, navigation, theme } = useContext(UIContext)
  return { homepage, language, navigation, theme }
}

export default useUI
