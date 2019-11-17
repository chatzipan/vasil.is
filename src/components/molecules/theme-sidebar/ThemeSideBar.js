import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Link } from 'gatsby'
import TransitionLink from 'gatsby-plugin-transition-link'

import { useUI } from '../../../hooks'

import Moon from '../../../assets/svgs/moon.svg'
import FlagEn from '../../../assets/svgs/flag_englang.svg'
import FlagDe from '../../../assets/svgs/flag_germany.svg'
import Home from '../../../assets/svgs/home.svg'
import ArrowRight from '../../../assets/svgs/chevron_right.svg'
import ArrowLeft from '../../../assets/svgs/chevron_left.svg'

import styles from './ThemeSideBar.module.css'

const flags = {
  'en-En': FlagEn,
  'de-DE': FlagDe,
}

const langs = ['en-EN', 'de-DE']

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

  return currentInd === 0 ? langs[1] : langs[0]
}

const ThemeSideBar = ({ isProjectPage, projects, toggleNav }) => {
  const {
    language: { language, selectLanguage },
    navigation: { handleLinkClick },
    theme: { changeTheme, theme },
  } = useUI()
  const FlagIcon = flags[language] || FlagEn
  const classes = cx(styles.sidebar, { [styles.dark]: theme === 'dark' })
  const current = document.location.pathname.split('/')[2]
  const { next, previous } = getProjectUrls(current, projects)
  const nextLang = getNextLang(language)
  const themeBtnClasses = cx(styles.themeBtn, {
    [styles.reveal]: !isProjectPage,
  })

  return (
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
          Projects
        </button>
      )}
      <nav className={styles.nav}>
        {isProjectPage && (
          <>
            <TransitionLink
              className={styles.link}
              exit={{ delay: 1 }}
              onClick={handleLinkClick}
              to="/"
            >
              <Home alt={theme} className={styles.icon} />
            </TransitionLink>
            <TransitionLink
              className={styles.link}
              exit={{ delay: 1 }}
              onClick={handleLinkClick}
              to={`/projects/${next}`}
            >
              <ArrowRight alt={theme} className={styles.icon} />
            </TransitionLink>
            <TransitionLink
              className={styles.link}
              exit={{ delay: 1 }}
              onClick={handleLinkClick}
              to={`/projects/${previous}`}
            >
              <ArrowLeft alt={theme} className={styles.icon} />
            </TransitionLink>
          </>
        )}
        <button
          className={themeBtnClasses}
          onClick={() => selectLanguage(nextLang)}
          title={`Switch to ${mode(theme)} mode`}
        >
          <FlagIcon className={styles.icon} />
        </button>
      </nav>
    </div>
  )
}

ThemeSideBar.propTypes = {
  isProjectPage: PropTypes.bool,
  toggleNav: PropTypes.func,
}

export default ThemeSideBar
