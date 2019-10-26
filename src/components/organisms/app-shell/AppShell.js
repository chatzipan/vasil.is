import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { SocialSideBar, ThemeSideBar } from '../../molecules'
import detectTabbing from '../../../utils/accessibity'

import { withTheme } from '../../hoc/theme'

import styles from './appShell.module.css'

detectTabbing()

const AppShell = ({ children, isProjectPage, theme }) => {
  const classes = cx(styles.app, styles[theme], {
    [styles.isProjectPage]: isProjectPage,
  })

  return (
    <div className={classes}>
      <ThemeSideBar isProjectPage={isProjectPage} />
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
