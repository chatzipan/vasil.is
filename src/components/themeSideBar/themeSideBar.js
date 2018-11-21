import React from 'react'

import { withTheme } from '../../utils/themeContext'
import Moon from '../../assets/svgs/moon.svg'
import styles from './themeSideBar.module.css'

const mode = mode =>
  ({
    light: 'dark',
    dark: 'light',
  }[mode])

const ThemeSideBar = ({ theme, changeTheme }) => (
  <div className={styles.sidebar}>
    <button
      className={styles.btn}
      onClick={changeTheme}
      title={`Switch to ${mode(theme)}`}
    >
      <Moon alt={theme} className={styles.img} />
    </button>
  </div>
)

export default withTheme(ThemeSideBar)
