import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { SocialSideBar, ThemeSideBar } from '../../molecules'
import detectTabbing from '../../../utils/accessibity'

import { withTheme } from '../../hoc/theme'

import styles from './appShell.module.css'

detectTabbing()

const AppShell = ({ children, theme }) => (
  <div className={cx(styles.app, styles[theme])}>
    <ThemeSideBar />
    <div style={{ gridArea: 'content' }}>{children}</div>
    <SocialSideBar />
  </div>
)

AppShell.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.oneOf(['dark', 'light']),
}

export default withTheme(AppShell)
