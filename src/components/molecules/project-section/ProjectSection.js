import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import ProjectInfo from './projectInfo'
import ProjectScreenshot from './projectScreenshot'

import styles from './projectSection.module.css'

const ProjectSection = ({ inverted, project }) => (
  <div className={cx(styles.section, { [styles.inverted]: inverted })}>
    <ProjectScreenshot project={project.name} />
    <ProjectInfo project={project} />
  </div>
)

ProjectSection.propTypes = {
  intersectionRatio: PropTypes.number,
  inverted: PropTypes.bool,
  project: PropTypes.shape({
    name: PropTypes.string,
    period: PropTypes.string,
    short: PropTypes.string,
  }).isRequired,
}

export default ProjectSection
