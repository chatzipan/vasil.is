import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import cx from 'classnames'

import { ProjectPreview } from '../components/molecules'
import Xing from '../assets/images/xing-all-devices_4x.png'

import styles from './ProjectPage.module.css'

const screenshots = {
  Xing,
}

const ProjectPage = ({ isOpen, handleClose, project }) => {
  const projectClass = cx(styles.project, { [styles.show]: isOpen })
  const imgsrc = screenshots[project]
  return (
    <main>
      <section className={projectClass} tabIndex={isOpen ? 0 : -1}>
        <div className={styles.screenshot}>
          <img src={imgsrc} />
        </div>
        <Link className={styles.backBtn} tabIndex={isOpen ? 0 : -1} to="/">
          &#8592;
        </Link>
      </section>
      <aside>
        <ProjectPreview focusedProject={project} isProjectMode />
      </aside>
    </main>
  )
}

ProjectPage.propTypes = {
  isOpen: PropTypes.bool,
}

export default ProjectPage
