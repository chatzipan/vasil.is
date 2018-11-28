import React from 'react'
import Observer from '@researchgate/react-intersection-observer'
import cx from 'classnames'

import Layout from '../components/layout'
import ProjectSection from '../components/molecules/projectSection'
import { withScrollPosition } from '../components/hoc/scrollPosition'

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
  const occupationClassNames = cx(styles.occupation, {
    [styles.scrolled]: !isOnTop,
  })
  const scrollIconClassNames = cx(styles.scrollIcon, {
    [styles.show]: isOnTop,
  })

  return (
    <div className={styles.page} id="page">
      <main className={cx(styles.row, styles.infoWrapper)}>
        <div className={styles.main}>
          <h2 className={nameClassNames}>
            <span className={firstNameClassNames}>Vasilis</span>
            <span className={lastNameClassNames}>Chatzipanagiotis</span>
          </h2>
          <p className={occupationClassNames}>Freelance Developer</p>
          <p className={worksClassNames}>Works 14-18</p>
          <span className={scrollIconClassNames}>↓</span>
        </div>
      </main>
      <Observer {...options}>
        <section className={styles.row}>
          <ProjectSection />
          <ProjectSection />
          <div style={{ height: '100vw' }} />
        </section>
      </Observer>
    </div>
  )
}

const Home = withScrollPosition(HomePage)

export default () => (
  <Layout>
    <Home />
  </Layout>
)
