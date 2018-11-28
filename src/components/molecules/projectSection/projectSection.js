import React from 'react'
import PropTypes from 'prop-types'

import withIntersectionObserver from '../../hoc/withIntersectionObserver'
import withParallax from '../../hoc/withParallax'

import XingLogo from '../../../assets/svgs/xing_logo.svg'
import XingDevices from '../../../assets/images/xing-all-devices_4x.png'

import styles from './projectSection.module.css'

const Logo = withParallax()(XingLogo)

const ProjectSection = ({ intersectionRatio }) => {
  return (
    <div className={styles.section} style={{ opacity: intersectionRatio }}>
      <div className={styles.screenshot}>
        <img src={XingDevices} alt="Xing devices screenshots" />
      </div>
      <div className={styles.info}>
        <Logo className={styles.logo} />
      </div>
    </div>
  )
}

ProjectSection.propTypes = {
  intersectionRatio: PropTypes.number,
  theme: PropTypes.oneOf(['dark', 'light']),
}

const threshold = Array.apply(null, Array(10)).map((_, i) => (i + 1) / 10)

export default withIntersectionObserver({
  rootMargin: '-10% 0% 0%',
  threshold,
})(ProjectSection)
