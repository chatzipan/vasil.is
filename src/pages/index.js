import React from 'react'
import Observer from '@researchgate/react-intersection-observer'
import cx from 'classnames'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import ProjectSection from '../components/molecules/projectSection'
import { withScrollPosition } from '../components/hoc/scrollPosition'
import Arrow from '../assets/svgs/arrow-down.svg'

import styles from './index.module.css'

const HomePage = ({
  data: {
    site: {
      siteMetadata: { projects },
    },
  },
  handleScroll,
  isOnTop,
  loadedOnTop,
}) => {
  const options = {
    onChange: handleScroll,
    threshold: 0.05,
  }
  const optionalStyles = {
    [styles.scrolled]: !isOnTop,
    [styles.loadedOnTop]: loadedOnTop,
    [styles.loadedOnBottom]: !loadedOnTop,
  }

  const scrollIconClassNames = cx(styles.scrollIcon, {
    [styles.show]: isOnTop,
  })

  return (
    <div className={styles.page} id="page">
      <main className={cx(styles.row, styles.infoWrapper)}>
        <div className={styles.main}>
          <h2 className={cx(styles.name, { [styles.scrolled]: !isOnTop })}>
            <span className={cx(styles.first, optionalStyles)}>Vasilis</span>
            <span className={cx(styles.last, optionalStyles)}>
              Chatzipanagiotis
            </span>
          </h2>
          <p className={cx(styles.occupation, optionalStyles)}>
            Freelance Developer
          </p>
          <p className={cx(styles.works, optionalStyles)}>Works 14-18</p>
          <span className={scrollIconClassNames}>
            <Arrow />
          </span>
        </div>
      </main>
      <Observer {...options}>
        <section className={styles.row} style={{ paddingTop: '10vw' }}>
          {projects.map((project, i) => (
            <ProjectSection key={i} inverted={i % 2 !== 0} project={project} />
          ))}
          <div style={{ height: '100vw' }} />
        </section>
      </Observer>
    </div>
  )
}

const Home = withScrollPosition(HomePage)

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            projects {
              name
              period
              short
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <Home data={data} {...props} />
      </Layout>
    )}
  />
)
