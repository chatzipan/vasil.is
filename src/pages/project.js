import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import cx from 'classnames'

import Xing from '../assets/images/xing-all-devices_4x.png'

import styles from './project.module.css'

const screenshots = {
  Xing,
}

const ProjectPage = ({ isOpen, handleClose, project }) => {
  const projectClass = cx(styles.project, { [styles.show]: isOpen })
  const imgsrc = screenshots[project]
  return (
    <section className={projectClass} tabIndex={isOpen ? 0 : -1}>
      <div className={styles.screenshot}>
        <img src={imgsrc} />
      </div>
      <button
        className={styles.backBtn}
        onClick={handleClose}
        tabIndex={isOpen ? 0 : -1}
      >
        &#8592;
      </button>
    </section>
  )
}

ProjectPage.propTypes = {
  isOpen: PropTypes.bool,
}

export default ProjectPage
