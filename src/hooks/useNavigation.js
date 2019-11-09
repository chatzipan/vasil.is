import { useContext } from 'react'

import NavigationContext from '../context/NavigationContext'

const useNavigation = () => {
  const { handleLinkClick, linkClicked } = useContext(NavigationContext)
  return { handleLinkClick, linkClicked }
}

export default useNavigation
