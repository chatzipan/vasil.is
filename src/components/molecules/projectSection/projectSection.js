import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import ProjectInfo from './projectInfo'
import ProjectScreenshot from './projectScreenshot'
import withIntersectionObserver from '../../hoc/withIntersectionObserver'

import styles from './projectSection.module.css'

const threshold = Array.apply(null, Array(10)).map((_, i) => (i + 1) / 10)

const ProjectSection = ({ intersectionRatio, inverted, project }) => {
  const opacity = intersectionRatio && intersectionRatio * 1.5
  return (
    <div
      className={cx(styles.section, { [styles.inverted]: inverted })}
      style={{ opacity, transition: 'all 0.1s ease-out' }}
    >
      <ProjectScreenshot project={project.name} />
      <ProjectInfo project={project} />
    </div>
  )
}

ProjectSection.propTypes = {
  intersectionRatio: PropTypes.number,
  inverted: PropTypes.bool,
  project: PropTypes.shape({
    name: PropTypes.string,
    period: PropTypes.string,
    short: PropTypes.string,
  }).isRequired,
}

export default withIntersectionObserver({
  rootMargin: '-10% 0% 0%',
  threshold,
})(ProjectSection)
