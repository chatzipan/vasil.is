import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { ProjectPreview } from '../components/molecules'
import { Layout } from '../components/organisms'

import Xing from '../assets/images/xing_desktop_ohne.png'
import XingDark from '../assets/images/xing_desktop_dark.png'

import styles from './ProjectPage.module.css'

const screenshots = {
  Xing,
}

const ProjectPage = ({ project }) => {
  const imgsrc = screenshots[project]
  const screenshotClass = cx(styles.screenshot)
  return (
    <Layout isProjectPage>
      <main className={styles.main}>
        <section className={styles.project}>
          <div className={styles.screenshot}>
            <img src={imgsrc} />
          </div>
          <div className={styles.screenshot}>
            <img src={imgsrc} />
          </div>
        </section>
        <ProjectPreview focusedProject={project} isProjectPage />
      </main>
    </Layout>
  )
}

ProjectPage.propTypes = {
  project: PropTypes.string,
}

export default ProjectPage
