import React, { Fragment, useCallback, useState, useRef } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import cx from 'classnames'

import { ProjectPreview } from '../components/molecules'
import { Logo } from '../components/atoms'
import CellularLogo from '../assets/images/cellular_logo.png'

import { useUI } from '../hooks'

import styles from './projects.module.css'

const ProjectsOverviewPage = ({ projects }) => {
  const {
    theme: { theme },
  } = useUI()

  return (
    <main className={styles.logosArea}>
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
        Do you want to be a part of this list?&nbsp;
        <a
          className={styles.link}
          href="mailto:vchatzipan@gmail.com?subject=I'd like to talk about a project&body=Hi Vasilis,"
          rel="noopener noreferrer"
          target="_blank"
        >
          Get in touch!
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
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { mainProjects, otherProjects },
      },
    }) => (
      <ProjectsOverviewPage
        projects={[...mainProjects, ...otherProjects].map(
          ({ client }) => client
        )}
        {...props}
      />
    )}
  />
)
