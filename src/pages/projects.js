import React, { Fragment, useCallback, useState, useRef } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import cx from 'classnames'
import Helmet from 'react-helmet'
import { useTranslation } from 'react-i18next'

import { ProjectPreview } from '../components/molecules'
import { Logo } from '../components/atoms'
import CellularLogo from '../assets/images/cellular_logo.png'

import { useUI } from '../hooks'

import styles from './projects.module.css'

const ProjectsOverviewPage = ({ projects, titleTemplate }) => {
  const { t } = useTranslation()
  const {
    theme: { theme },
  } = useUI()

  return (
    <main className={styles.logosArea}>
      <Helmet title={titleTemplate.replace('%s', t('PAGE_TITLE_ALL'))} />
      {projects.sort().map((client, i) => {
        const logoClass = cx(
          styles.logo,
          styles[theme],
          styles['style' + client]
        )
        const Comp = client === 'Cellular' ? 'img' : Logo

        return (
          <Comp
            alt={`${client} logo`}
            className={logoClass}
            key={client}
            name={client}
            src={CellularLogo}
            style={{ animationDelay: i * 0.1 + 's' }}
            title={client}
          />
        )
      })}
      <h2 className={cx(styles.contact, styles[theme])}>
        {t('ALL_PROJECTS_CONTACT')}
        <br />
        <a
          className={styles.link}
          href={`mailto:vchatzipan@gmail.com?${t('LABEL_EMAIL_SUBJECT')}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          {t('ALL_PROJECTS_GET_IT_TOUCH')}
        </a>
      </h2>
    </main>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            mainProjects {
              client
            }
            otherProjects {
              client
            }
            ownProjects {
              client
            }
            titleTemplate
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { mainProjects, otherProjects, titleTemplate },
      },
    }) => (
      <ProjectsOverviewPage
        projects={[...mainProjects, ...otherProjects].map(
          ({ client }) => client
        )}
        titleTemplate={titleTemplate}
        {...props}
      />
    )}
  />
)
