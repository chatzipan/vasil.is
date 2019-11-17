import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { StaticQuery, graphql } from 'gatsby'

import { ProjectPreview } from '../components/molecules'
import { useUI } from '../hooks'

import aboutyou_desktop from '../assets/images/aboutyou_desktop.png'
import aboutyou_mobile from '../assets/images/aboutyou_mobile.png'
import ergo_desktop from '../assets/images/ergo_desktop.png'
import otto_desktop from '../assets/images/otto_desktop.png'
import otto_mobile from '../assets/images/otto_mobile.png'
import xing_desktop from '../assets/images/xing_desktop.png'
import xing_mobile from '../assets/images/xing_mobile3.png'
import vw_desktop from '../assets/images/vw_desktop.png'
import vw_mobile from '../assets/images/vw_mobile.png'
import zalando_desktop from '../assets/images/zalando_desktop.png'
import zalando_mobile from '../assets/images/zalando_mobile.png'

import styles from './ProjectPage.module.css'

const screenshots = {
  AboutYou: {
    desktop: aboutyou_desktop,
    mobile: aboutyou_mobile,
  },
  OTTO: {
    desktop: otto_desktop,
    mobile: otto_mobile,
  },
  SinnerSchrader: {
    desktop: ergo_desktop,
    mobile: vw_desktop,
  },
  Xing: {
    desktop: xing_desktop,
    mobile: xing_mobile,
  },
  Volkswagen: {
    desktop: vw_desktop,
    mobile: vw_mobile,
  },
  Zalando: {
    desktop: zalando_desktop,
    mobile: zalando_mobile,
  },
}

const ProjectPage = ({ project, projects }) => {
  const {
    navigation: { linkClicked },
  } = useUI()
  const { desktop, mobile } = screenshots[project] || screenshots.Xing
  const projectClass = cx(styles.project, {
    [styles.hide]: linkClicked,
  })
  const { url } = projects.find(({ client }) => client === project)
  return (
    <main className={styles.main}>
      <section className={projectClass}>
        <div className={styles.screenshot}>
          <img className={styles.img} src={desktop} />
        </div>
        <div className={styles.screenshot}>
          <img className={styles.img} src={mobile} />
        </div>
        <a
          className={styles.link}
          href={url}
          rel="noopener noreferrer"
          target="_blank"
        >
          Visit Page
        </a>
      </section>
      <ProjectPreview focusedProject={project} isProjectPage />
    </main>
  )
}

ProjectPage.propTypes = {
  project: PropTypes.string,
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            mainProjects {
              client
              url
            }
            ownProjects {
              client
              url
            }
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { mainProjects, ownProjects },
      },
    }) => (
      <ProjectPage projects={[...mainProjects, ...ownProjects]} {...props} />
    )}
  />
)
