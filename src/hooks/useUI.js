import { useContext } from 'react'

import { UIContext } from '../context'

const useUI = () => {
  const { language, navigation, theme } = useContext(UIContext)
  return { language, navigation, theme }
}

export default useUI
