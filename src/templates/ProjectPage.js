import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { ProjectPreview } from '../components/molecules'

import xing_desktop from '../assets/images/xing_desktop.png'
import xing_mobile from '../assets/images/xing_mobile3.png'
import { useNavigation } from '../hooks'

import styles from './ProjectPage.module.css'

const screenshots = {
  Xing: {
    desktop: xing_desktop,
    mobile: xing_mobile,
  },
}

const ProjectPage = ({ project }) => {
  const { linkClicked } = useNavigation()
  const { desktop, mobile } = screenshots[project] || screenshots.Xing
  const screenshotClass = cx(styles.screenshot)
  const projectClass = cx(styles.project, {
    [styles.hide]: linkClicked,
  })

  return (
    <main className={styles.main}>
      <section className={projectClass}>
        <div className={styles.screenshot}>
          <img src={desktop} />
        </div>
        <div className={styles.screenshot}>
          <img src={mobile} />
        </div>
      </section>
      <ProjectPreview focusedProject={project} isProjectPage />
    </main>
  )
}

ProjectPage.propTypes = {
  project: PropTypes.string,
}

export default ProjectPage
