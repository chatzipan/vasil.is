import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'

import { withTheme } from '../../hoc/theme'
import Moon from '../../../assets/svgs/moon.svg'
import Home from '../../../assets/svgs/home.svg'
import ArrowRight from '../../../assets/svgs/chevron_right.svg'
import ArrowLeft from '../../../assets/svgs/chevron_left.svg'
import styles from './ThemeSideBar.module.css'

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

const ThemeSideBar = ({ changeTheme, isProjectPage, projects, theme }) => {
  const classes = cx(styles.sidebar, { [styles.dark]: theme === 'dark' })
  const current = document.location.pathname.split('/')[2]
  const { currentInd, next, previous } = getProjectUrls(current, projects)
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
        <span className={styles.index}>
          {currentInd}
          <br />－<br />
          {projects.length}
        </span>
      )}
      {isProjectPage && (
        <nav className={styles.nav}>
          <Link className={styles.link}>
            <Home alt={theme} className={styles.icon} to="/" />
          </Link>
          <Link className={styles.link} to={`/projects/${next}`}>
            <ArrowRight alt={theme} className={styles.icon} />
          </Link>
          <Link className={styles.link} to={`/projects/${previous}`}>
            <ArrowLeft alt={theme} className={styles.icon} />
          </Link>
        </nav>
      )}
    </div>
  )
}

ThemeSideBar.propTypes = {
  changeTheme: PropTypes.func,
  isProjectPage: PropTypes.bool,
  theme: PropTypes.oneOf(['dark', 'light']),
}

export default withTheme(props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            projects {
              client
            }
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { projects },
      },
    }) => {
      return (
        <ThemeSideBar
          projects={projects.map(({ client }) => client.toLowerCase())}
          {...props}
        />
      )
    }}
  />
))
