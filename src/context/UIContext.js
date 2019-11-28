import React, { createContext, useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import { usePrevious } from '../hooks'
import track from '../utils/track'

const UIContext = createContext({
  homepage: {
    projectPreviewOpen: false,
    setProjectPreviewOpen: () => {},
  },
  language: {
    language: 'en',
    selectLanguage: () => true,
  },
  navigation: {
    handleLinkClick: () => true,
    linkClicked: false,
  },
  theme: {
    changeTheme: () => {},
    theme: 'light',
  },
})

const supportedLanguages = ['en-GB', 'de-DE', 'el']

export const UIProvider = ({ children, location }) => {
  const [, i18n] = useTranslation()
  const [language, setLanguage] = useState(i18n.language)
  const [theme, setTheme] = useState('light')
  const [linkClicked, setLinkClicked] = useState(false)
  const [projectPreviewOpen, setProjectPreviewOpen] = useState(false)
  const previousPathname = usePrevious(location.pathname)

  useEffect(() => {
    if (previousPathname !== location.pathname) {
      setLinkClicked(false)
    }
  }, [previousPathname, location.pathname])

  useEffect(() => {
    const initialTheme =
      window !== 'undefined' && 'localStorage' in window
        ? window.localStorage.getItem('theme')
        : 'light'

    setTheme(initialTheme)
    if (!window.localStorage.getItem('theme')) {
      window.localStorage.setItem('theme', 'light')
    }
  }, [])

  const changeTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    window.localStorage.setItem('theme', newTheme)
    setTheme(newTheme)

    track('change_theme', {
      event_category: 'ui_options',
      value: newTheme === 'light' ? 1 : 0,
    })
  }, [theme])

  const handleLinkClick = useCallback(() => {
    setLinkClicked(true)
  }, [])

  const selectLanguage = useCallback(
    lang => {
      i18n.changeLanguage(lang)
      setLanguage(lang)
    },
    [i18n, setLanguage]
  )

  useEffect(() => {
    if (language.includes('en-' && language !== 'en-GB')) {
      selectLanguage('en-GB')
      return
    }

    if (language.includes('de-' && language !== 'de-DE')) {
      selectLanguage('de-DE')
      return
    }

    if (!supportedLanguages.includes(language)) {
      selectLanguage('en-GB')
    }
  }, [language])

  const providedValues = {
    homepage: {
      projectPreviewOpen,
      setProjectPreviewOpen,
    },
    language: {
      language,
      selectLanguage,
    },
    navigation: {
      handleLinkClick,
      linkClicked,
    },
    theme: {
      changeTheme,
      theme,
    },
  }

  return (
    <UIContext.Provider value={providedValues}>{children}</UIContext.Provider>
  )
}

export default UIContext
