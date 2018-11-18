import React from 'react'

import { withTheme } from '../../utils/themeContext'
import dark from './assets/sun.svg'
import light from './assets/moon.svg'
import styles from './themeSideBar.module.css'

const icon = {
  light,
  dark,
}

const ThemeSideBar = ({ theme, changeTheme }) => (
  <div className={styles.sidebar}>
    <button className={styles.btn} onClick={changeTheme}>
      <img alt={theme} className={styles.img} src={icon[theme]} />
    </button>
  </div>
)

export default withTheme(ThemeSideBar)
