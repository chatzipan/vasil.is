import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import AboutYouLogo from '../../../assets/svgs/aboutyou_logo.svg'
import XingLogo from '../../../assets/svgs/xing_logo.svg'
import VWLogo from '../../../assets/svgs/volkswagen_logo.svg'

import styles from './ProjectPreview.module.css'

const logos = {
  Xing: XingLogo,
  VW: VWLogo,
  AboutYou: AboutYouLogo,
}

const ProjectPreview = ({ focusedProject = 'Xing', isProjectMode }) => {
  const lineClass = cx(styles.backgroundLine, {
    [styles.show]: focusedProject || isProjectMode,
  })

  const wrapperClass = cx(styles.backgroundWrapper, {
    [styles.isProjectMode]: isProjectMode,
  })

  const backgroundClass = cx(styles.wrapper, {
    [styles.isProjectMode]: isProjectMode,
    [styles.show]: focusedProject || isProjectMode,
    [styles.hide]: focusedProject === '',
  })
  const Logo = logos[focusedProject] || XingLogo

  return (
    <div className={wrapperClass}>
      <div className={backgroundClass}>
        <Logo className={styles.logo} />
        <dl className={styles.list}>
          <dt className={styles.label}>Sector</dt>
          <dd className={styles.value}>Social Network</dd>
          <dt className={styles.label}>Position</dt>
          <dd className={styles.value}>Lead Frontend Developer</dd>
          <dt className={styles.label}>When</dt>
          <dd className={styles.value}>2018 - 2019</dd>
          <dt className={styles.label}>Stack</dt>
          <dd className={styles.value}>ReactJS, React Hooks, Redux, GraphQL</dd>
        </dl>
      </div>
      <hr className={lineClass} />
    </div>
  )
}

ProjectPreview.propTypes = {
  focusedProject: PropTypes.string,
  isProjectMode: PropTypes.isProjectMode,
}

export default ProjectPreview
