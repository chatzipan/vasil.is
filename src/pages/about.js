import React, { Fragment, useCallback, useState, useRef } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import cx from 'classnames'
import Helmet from 'react-helmet'
import { useTranslation } from 'react-i18next'

import { ProjectPreview } from '../components/molecules'
import { Logo } from '../components/atoms'
import CellularLogo from '../assets/images/cellular_logo.png'
import GreekFlag from '../assets/svgs/flag_greece.svg'

import { useUI } from '../hooks'

import styles from './about.module.css'

const AboutPage = () => {
  const {
    theme: { theme },
  } = useUI()
  const { t } = useTranslation()
  const textClasses = cx(styles.text, styles[theme])

  return (
    <main className={styles.logosArea}>
      <Helmet title={t('PAGE_TITLE_ABOUT')} />
      <p className={textClasses}>
        {t('ABOUT_PAGE_INFO')}
        <span
          aria-label={t('LABEL_GREECE')}
          className={styles.flagWrapper}
          title="LABEL_GREECE"
        >
          <GreekFlag className={styles.flag} />
        </span>
        🏛.
      </p>
      <p className={textClasses}>{t('ABOUT_PAGE_CLIENTS')}</p>
      <p className={textClasses}>{t('ABOUT_PAGE_EXPERIENCES')}</p>
      <p className={textClasses}>{t('ABOUT_PAGE_TASKS')}</p>
      <p className={textClasses}>
        <a
          className={textClasses}
          href={`mailto:vchatzipan@gmail.com?${t('LABEL_EMAIL_SUBJECT')}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          {t('ABOUT_PAGE_CONTACT_ME')}
        </a>
      </p>
    </main>
  )
}

export default AboutPage
