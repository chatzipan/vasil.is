import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

// import withParallax from '../../hoc/withParallax'

import XingLogo from '../../../assets/svgs/xing_logo.svg'
import VWLogo from '../../../assets/svgs/volkswagen_logo.svg'
import AboutYouLogo from '../../../assets/svgs/aboutyou_logo.svg'

import styles from './projectSection.module.css'

const logos = {
  // Xing: withParallax('LtoR')(XingLogo),
  // VW: withParallax('RtoL')(VWLogo),
  // AboutYou: withParallax('LtoR')(AboutYouLogo),
  Xing: XingLogo,
  VW: VWLogo,
  AboutYou: AboutYouLogo,
}

const ProjectInfo = ({ project: { name, period, short } }) => {
  const Logo = logos[name]
  return (
    <div className={styles.info}>
      <Logo className={styles.logo} />
      <p className={styles.text}>{short}</p>
      <p className={styles.text}>{period}</p>
      <Link className={styles.link} to={`/portfolio/${name.toLowerCase()}`}>
        view details
      </Link>
    </div>
  )
}

ProjectInfo.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    period: PropTypes.string,
    short: PropTypes.string,
  }).isRequired,
}

export default ProjectInfo
