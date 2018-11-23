import React from 'react'
import Observer from '@researchgate/react-intersection-observer'
import cx from 'classnames'

import Layout from '../components/layout'
import { withScrollPosition } from '../components/scrollPosition'
import XingLogo from '../assets/svgs/xing_logo.svg'
import Devices from '../assets/svgs/devices.svg'

import styles from './index.module.css'

const HomePage = ({ handleScroll, isOnTop }) => {
  const options = {
    onChange: handleScroll,
  }
  const nameClassNames = cx(styles.name, { [styles.scrolled]: !isOnTop })
  const firstNameClassNames = cx(styles.first, {
    [styles.scrolled]: !isOnTop,
  })
  const lastNameClassNames = cx(styles.last, { [styles.scrolled]: !isOnTop })
  const worksClassNames = cx(styles.works, { [styles.scrolled]: !isOnTop })
  const logoClassNames = cx(styles.logo, { [styles.visible]: !isOnTop })
  const occupationClassNames = cx(styles.occupation, {
    [styles.scrolled]: !isOnTop,
  })
  const scrollIconClassNames = cx(styles.scrollIcon, {
    [styles.show]: isOnTop,
  })

  return (
    <div className={styles.page}>
      <div className={styles.column}>
        <div className={styles.spacer} />
        <Observer {...options}>
          <Devices />
        </Observer>
      </div>
      <div className={styles.column}>
        <div className={styles.info}>
          <h2 className={nameClassNames}>
            <span className={firstNameClassNames}>Vasilis</span>
            <span className={lastNameClassNames}>Chatzipanagiotis</span>
          </h2>
          <p className={occupationClassNames}>Freelance Developer</p>
          <p className={worksClassNames}>Works 14-18</p>
          <span className={scrollIconClassNames}>↓</span>
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles.spacer} />
        <XingLogo className={logoClassNames} />
      </div>
    </div>
  )
}

const Home = withScrollPosition(HomePage)

export default () => (
  <Layout>
    <Home />
  </Layout>
)
