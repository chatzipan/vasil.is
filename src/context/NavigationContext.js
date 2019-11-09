import React, { createContext, useCallback, useEffect, useState } from 'react'
import i18n from 'i18next'

import { usePrevious } from '../hooks'

const NavigationContext = createContext({
  handleLinkClick: () => true,
  linkClicked: false,
})

export const NavigationContextProvider = ({ children, location }) => {
  const [linkClicked, setLinkClicked] = useState(false)
  const previousPathname = usePrevious(location.pathname)

  useEffect(() => {
    if (previousPathname !== location.pathname) {
      setLinkClicked(false)
    }
  }, [previousPathname, location.pathname])

  const handleLinkClick = useCallback(() => {
    setLinkClicked(true)
  }, [])

  return (
    <NavigationContext.Provider value={{ handleLinkClick, linkClicked }}>
      {children}
    </NavigationContext.Provider>
  )
}

export default NavigationContext
