import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Link } from 'gatsby'

import { SocialSideBar, ThemeSideBar } from '../../molecules'
import detectTabbing from '../../../utils/accessibity'

import { withTheme } from '../../hoc/theme'

import styles from './appShell.module.css'

detectTabbing()

const AppShell = ({ children, isProjectPage, projects, theme }) => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const toggleNav = useCallback(() => {
    setIsNavOpen(!isNavOpen)
  }, [isNavOpen])
  const classes = cx(styles.app, styles[theme], {
    [styles.isProjectPage]: isProjectPage,
    [styles.navOpen]: isNavOpen,
  })

  return (
    <div className={classes}>
      <nav className={cx(styles.menu, { [styles.navOpen]: isNavOpen })}>
        <ul className={styles.projectList}>
          {projects.sort().map(project => (
            <Link
              className={styles.item}
              key={project}
              tabIndex={isNavOpen ? '0' : '-1'}
              to={`/projects/${project}`}
            >
              {project}
            </Link>
          ))}
          <Link className={styles.item} to="/projects">
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
  theme: PropTypes.oneOf(['dark', 'light']),
}

export default withTheme(AppShell)
