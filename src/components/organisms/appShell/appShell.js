import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import ThemeSideBar from '../../molecules/themeSideBar'
import SocialSideBar from '../../molecules/socialSideBar'
import Header from '../header'

import { withTheme } from '../../hoc/theme'

import styles from './appShell.module.css'

const AppShell = ({ children, theme }) => (
  <div className={cx(styles.app, styles[theme])}>
    <Header />
    <ThemeSideBar />
    <div>{children}</div>
    <SocialSideBar />
  </div>
)

AppShell.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.oneOf(['dark', 'light']),
}

export default withTheme(AppShell)
