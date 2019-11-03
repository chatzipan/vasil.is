import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Link } from 'gatsby'

import { SocialSideBar, ThemeSideBar } from '../../molecules'
import detectTabbing from '../../../utils/accessibity'

import { useTheme } from '../../../hooks'

import styles from './appShell.module.css'

detectTabbing()

const AppShell = ({ children, isProjectPage, projects }) => {
  const { theme } = useTheme()
  const [isNavOpen, setIsNavOpen] = useState(false)
  const classes = cx(styles.app, styles[theme], {
    [styles.isProjectPage]: isProjectPage,
    [styles.navOpen]: isNavOpen,
  })
  const menuClasses = cx(styles.menu, { [styles.navOpen]: isNavOpen })
  const toggleNav = useCallback(() => {
    setIsNavOpen(!isNavOpen)
  }, [isNavOpen])

  return (
    <div className={classes}>
      <nav className={menuClasses}>
        <ul className={styles.projectList}>
          {[...projects].sort().map(project => (
            <Link
              className={styles.item}
              key={project}
              tabIndex={isNavOpen ? '0' : '-1'}
              to={`/projects/${project}`}
            >
              {project}
            </Link>
          ))}
          <Link
            className={styles.item}
            tabIndex={isNavOpen ? '0' : '-1'}
            to="/projects"
          >
            All projects
          </Link>
        </ul>
      </nav>
      <ThemeSideBar
        isProjectPage={isProjectPage}
        projects={projects}
        toggleNav={toggleNav}
      />
      <div style={{ gridArea: 'content' }}>{children}</div>
      {!isProjectPage && <SocialSideBar />}
    </div>
  )
}

AppShell.propTypes = {
  children: PropTypes.node,
  isProjectPage: PropTypes.bool,
}

export default AppShell
