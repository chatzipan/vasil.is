import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Link } from 'gatsby'
import TransitionLink from 'gatsby-plugin-transition-link'
import { useTranslation } from 'react-i18next'

import Moon from '../../../assets/svgs/moon.svg'
import FlagEn from '../../../assets/svgs/flag_englang.svg'
import FlagDe from '../../../assets/svgs/flag_germany.svg'
import FlagGr from '../../../assets/svgs/flag_greece.svg'
import Home from '../../../assets/svgs/home.svg'
import ArrowRight from '../../../assets/svgs/chevron_right.svg'
import ArrowLeft from '../../../assets/svgs/chevron_left.svg'
import { useUI } from '../../../hooks'
import track from '../../../utils/track'

import styles from './ThemeSideBar.module.css'

const flags = {
  'de-DE': FlagDe,
  'en-GB': FlagEn,
  el: FlagGr,
}

const languageFull = {
  'de-DE': 'German',
  'en-GB': 'English',
  el: 'Greek',
}

const langs = ['en-GB', 'de-DE', 'el']

const mode = mode =>
  ({
    light: 'dark',
    dark: 'light',
  }[mode])

const getProjectUrls = (current, all) => {
  const count = all.length
  const currentInd = all.indexOf(current)
  const next = currentInd + 1 > count - 1 ? all[0] : all[currentInd + 1]
  const previous = currentInd - 1 < 0 ? all[count - 1] : all[currentInd - 1]

  return { currentInd: currentInd + 1, next, previous }
}

const getNextLang = current => {
  const count = langs.length
  const currentInd = langs.indexOf(current)

  return currentInd === -1
    ? langs[1]
    : currentInd === count - 1
    ? langs[0]
    : langs[currentInd + 1]
}

const ThemeSideBar = ({ isProjectPage, location, projects, toggleNav }) => {
  const {
    language: { language, selectLanguage },
    navigation: { handleLinkClick },
    theme: { changeTheme, theme },
  } = useUI()
  const { t } = useTranslation()
  const FlagIcon = flags[language]
  const transitionDelay = location.pathname === '/projects' ? 0.5 : 1
  const isAboutPage = ['/about', '/about/'].includes(location.pathname)
  const isProjectsPage = ['/projects', '/projects/'].includes(location.pathname)
  const classes = cx(styles.sidebar, {
    [styles.dark]: theme === 'dark',
    [styles.withBlendMode]: isProjectPage && !isAboutPage && !isProjectsPage,
  })

  const current = location.pathname.split('/')[2]
  const { next, previous } = getProjectUrls(current, projects)
  const nextLang = getNextLang(language)
  const themeBtnClasses = cx(styles.themeBtn, {
    [styles.reveal]: !isProjectPage,
  })

  const languageBtnClasses = cx(styles.languageBtn, {
    [styles.reveal]: !isProjectPage,
  })

  const changeLanguage = useCallback(() => {
    selectLanguage(nextLang)
    track('change_language', {
      event_category: 'ui_options',
      value: langs.indexOf(nextLang) + 1,
    })
  }, [nextLang])

  const handleArrowsClick = useCallback(() => {
    handleLinkClick()
    track('click_arrow_navigation', {
      event_category: 'ui_options',
    })
  }, [])

  const handleHomeClick = useCallback(() => {
    handleLinkClick()
    track('click_home_button', {
      event_category: 'ui_options',
    })
  }, [])

  return (
    <>
      <div className={classes}>
        <button
          className={themeBtnClasses}
          onClick={changeTheme}
          title={`Switch to ${mode(theme)} mode`}
        >
          <Moon className={styles.icon} />
        </button>
        {isProjectPage && (
          <button className={styles.menuToggle} onClick={toggleNav}>
            {t('LABEL_PROJECTS')}
          </button>
        )}
        <nav className={styles.nav}>
          {isProjectPage && (
            <>
              <TransitionLink
                className={styles.link}
                exit={{ delay: transitionDelay }}
                onClick={handleHomeClick}
                to="/"
              >
                <Home alt={theme} className={styles.icon} />
              </TransitionLink>
              <TransitionLink
                className={styles.link}
                exit={{ delay: transitionDelay }}
                onClick={handleArrowsClick}
                to={`/projects/${next}`}
              >
                <ArrowRight alt={theme} className={styles.icon} />
              </TransitionLink>
              <TransitionLink
                className={styles.link}
                exit={{ delay: transitionDelay }}
                onClick={handleArrowsClick}
                to={`/projects/${previous}`}
              >
                <ArrowLeft alt={theme} className={styles.icon} />
              </TransitionLink>
            </>
          )}
        </nav>
      </div>
      <button
        className={languageBtnClasses}
        onClick={changeLanguage}
        title={`Switch to ${languageFull[nextLang]}`}
      >
        {FlagIcon && <FlagIcon className={styles.icon} />}
      </button>
    </>
  )
}

ThemeSideBar.propTypes = {
  isProjectPage: PropTypes.bool,
  toggleNav: PropTypes.func,
}

export default ThemeSideBar
