import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import cx from 'classnames'

import XingLogo from '../../../assets/svgs/xing_logo.svg'
import VWLogo from '../../../assets/svgs/volkswagen_logo.svg'
import AboutYouLogo from '../../../assets/svgs/aboutyou_logo.svg'

import styles from './project.module.css'

const logos = {
  // Xing: withParallax('LtoR')(XingLogo),
  // VW: withParallax('RtoL')(VWLogo),
  // AboutYou: withParallax('LtoR')(AboutYouLogo),
  Xing: XingLogo,
  Volkswagen: VWLogo,
  AboutYou: AboutYouLogo,
}

// const Project = ({ project: { name, period, short } }) => {
const Project = ({ isOpen, handleClose, name = 'Xing' }) => {
  const Logo = logos[name]

  const projectClass = cx(styles.project, { [styles.show]: isOpen })

  return (
    <section className={projectClass} tabIndex={isOpen ? 0 : -1}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <br />
      <br />
      <button
        onClick={handleClose}
        tabIndex={isOpen ? 0 : -1}
        style={{ cursor: 'pointer' }}
      >
        Project
      </button>
    </section>
  )
}

Project.propTypes = {
  isOpen: PropTypes.bool,
}

export default Project
