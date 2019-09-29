import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { withTheme } from '../../hoc/theme'

import LinkedIn from '../../../assets/svgs/linkedin.svg'
import Twitter from '../../../assets/svgs/twitter.svg'
import Github from '../../../assets/svgs/git.svg'
import Xing from '../../../assets/svgs/xing_icon.svg'

import styles from './SocialSideBar.module.css'

const logos = [
  {
    Component: LinkedIn,
    url: 'https://www.linkedin.com/in/vasilis-chatzipanagiotis',
  },
  {
    Component: Twitter,
    url: 'https://twitter.com/__vasilis',
  },
  {
    Component: Github,
    url: 'https://github.com/chatzipan',
  },
  {
    Component: Xing,
    url: 'https://www.xing.com/profile/Vasilis_Chatzipanagiotis/cv',
  },
]

const SocialSideBar = ({ theme }) => (
  <div className={styles.sidebar}>
    <ul className={styles.list}>
      {logos.map(({ Component, url }, i) => (
        <li className={styles.listItem} key={i}>
          <a href={url} rel="noopener noreferrer" target="_blank">
            <Component
              className={cx(styles.logo, styles[theme])}
              width="100%"
            />
          </a>
        </li>
      ))}
    </ul>
  </div>
)

SocialSideBar.propTypes = {
  theme: PropTypes.oneOf(['dark', 'light']),
}

export default withTheme(SocialSideBar)
