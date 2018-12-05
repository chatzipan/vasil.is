import React from 'react'
import PropTypes from 'prop-types'

import XingDevices from '../../../assets/images/xing-all-devices_4x.png'

import styles from './projectSection.module.css'

const screenshots = {
  Xing: XingDevices,
  VW: XingDevices,
  AboutYou: XingDevices,
}

const ProjectScreenshot = ({ project }) => (
  <div className={styles.screenshot}>
    <img src={screenshots[project]} alt={`${project} devices screenshot`} />
  </div>
)

ProjectScreenshot.propTypes = {
  project: PropTypes.string.isRequired,
}

export default ProjectScreenshot
