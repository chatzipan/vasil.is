import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import TransitionLink from 'gatsby-plugin-transition-link'

import { SocialSideBar, ThemeSideBar } from '../../molecules'
import detectTabbing from '../../../utils/accessibity'
import { usePrevious, useTheme } from '../../../hooks'

import styles from './appShell.module.css'

detectTabbing()

const AppShell = ({ children, isProjectPage, location, projects }) => {
  const { theme } = useTheme()
  const previousPathname = usePrevious(location.pathname)
  const [isNavOpen, setIsNavOpen] = useState(false)
  const classes = cx(styles.app, styles[theme], {
    [styles.isProjectPage]: isProjectPage,
    [styles.navOpen]: isNavOpen,
  })
  const menuClasses = cx(styles.menu, styles[theme], {
    [styles.navOpen]: isNavOpen,
  })

  const toggleNav = useCallback(() => {
    setIsNavOpen(!isNavOpen)
  }, [isNavOpen])

  useEffect(() => {
    if (!isProjectPage || previousPathname !== location.pathname) {
      setIsNavOpen(false)
    }
  }, [isProjectPage, previousPathname, location.pathname])

  return (
    <div className={classes}>
      <nav className={menuClasses}>
        <ul className={styles.projectList}>
          {[...projects].sort().map(project => (
            <TransitionLink
              className={styles.item}
              key={project}
              tabIndex={isNavOpen ? '0' : '-1'}
              to={`/projects/${project}`}
            >
              {project}
            </TransitionLink>
          ))}
          <TransitionLink
            className={styles.item}
            tabIndex={isNavOpen ? '0' : '-1'}
            to="/projects"
          >
            All projects
          </TransitionLink>
        </ul>
      </nav>
      <ThemeSideBar
        isProjectPage={isProjectPage}
        projects={projects}
        toggleNav={toggleNav}
      />
      <div className={styles.page}>{children}</div>
      {!isProjectPage && <SocialSideBar />}
    </div>
  )
}

AppShell.propTypes = {
  children: PropTypes.node,
  isProjectPage: PropTypes.bool,
}

export default AppShell
