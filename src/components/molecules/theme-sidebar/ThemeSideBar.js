import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { withTheme } from '../../hoc/theme'
import Moon from '../../../assets/svgs/moon.svg'
import styles from './ThemeSideBar.module.css'

const mode = mode =>
  ({
    light: 'dark',
    dark: 'light',
  }[mode])

const ThemeSideBar = ({ theme, changeTheme }) => (
  <div className={styles.sidebar}>
    <button
      className={cx(styles.btn, { [styles.dark]: theme === 'dark' })}
      onClick={changeTheme}
      title={`Switch to ${mode(theme)}`}
    >
      <Moon alt={theme} className={styles.img} />
    </button>
  </div>
)

ThemeSideBar.propTypes = {
  changeTheme: PropTypes.func,
  theme: PropTypes.oneOf(['dark', 'light']),
}

export default withTheme(ThemeSideBar)
