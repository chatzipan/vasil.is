import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useTranslation } from 'react-i18next'

import { useUI } from '../../../hooks'

import Email from '../../../assets/svgs/email.svg'
import LinkedIn from '../../../assets/svgs/linkedin.svg'
import Twitter from '../../../assets/svgs/twitter.svg'
import Github from '../../../assets/svgs/git.svg'
import Xing from '../../../assets/svgs/xing_icon.svg'

import styles from './SocialSideBar.module.css'

const logos = [
  {
    Logo: LinkedIn,
    url: 'https://www.linkedin.com/in/vasilis-chatzipanagiotis',
  },
  {
    Logo: Twitter,
    url: 'https://twitter.com/__vasilis',
  },
  {
    Logo: Github,
    url: 'https://github.com/chatzipan',
  },
  {
    Logo: Xing,
    url: 'https://www.xing.com/profile/Vasilis_Chatzipanagiotis/cv',
  },
]

const SocialSideBar = () => {
  const { t } = useTranslation()
  const {
    homepage: { projectPreviewOpen },
    theme: { theme },
  } = useUI()
  const sidebarClasses = cx(styles.sidebar, {
    [styles.covered]: projectPreviewOpen,
  })

  return (
    <nav className={sidebarClasses}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <a
            href={`mailto:vchatzipan@gmail.com?${t('HOME_EMAIL_SUBJECT')}`}
            rel="noopener noreferrer"
            target="_blank"
            className={styles.link}
          >
            <Email className={cx(styles.logo, styles[theme])} />
          </a>
        </li>
        {logos.map(({ Logo, url }, i) => (
          <li className={styles.listItem} key={i}>
            <a href={url} rel="noopener noreferrer" target="_blank">
              <Logo className={cx(styles.logo, styles[theme])} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

SocialSideBar.propTypes = {
  theme: PropTypes.oneOf(['dark', 'light']),
}

export default SocialSideBar
