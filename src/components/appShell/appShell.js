import React from 'react'
import cx from 'classnames'

import ThemeSideBar from '../themeSideBar'
import SocialSideBar from '../socialSideBar'
import Header from '../header'

import { withTheme } from '../theme'

import styles from './appShell.module.css'

const AppShell = ({ children, theme }) => (
  <div className={cx(styles.app, styles[theme])}>
    <Header />
    <ThemeSideBar />
    <div>{children}</div>
    <SocialSideBar />
  </div>
)

export default withTheme(AppShell)
