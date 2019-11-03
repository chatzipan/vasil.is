import { useContext } from 'react'

import ThemeContext from '../context/ThemeContext'

const useTheme = () => {
  const { changeTheme, theme } = useContext(ThemeContext)
  return { changeTheme, theme }
}

export default useTheme
