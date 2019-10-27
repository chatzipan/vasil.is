import React, { Fragment, useCallback, useState, useRef } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import cx from 'classnames'
import { Link } from 'gatsby'

import { ProjectPreview } from '../components/molecules'
import { Layout } from '../components/organisms'
import { withTheme } from '../components/hoc/theme'

import styles from './index.module.css'

const ProjectsOverviewPage = withTheme(({ projects, theme }) => {
  const [lastFocusedClient, setLastFocusedClient] = useState('')
  const [focusedClient, setFocusedClient] = useState(false)
  const timeOutRef = useRef()

  const [timeout] = useState(false)
  const lineClass = cx(styles.backgroundLine, { [styles.show]: focusedClient })
  const nameClass = cx(styles.name, { [styles.dark]: theme === 'dark' })
  const clientsClass = cx(styles.clients, { [styles.dark]: theme === 'dark' })
  const backgroundClass = cx(styles.background, {
    [styles.show]: focusedClient,
    [styles.hide]: focusedClient === '',
  })
  const mainClass = cx(styles.row, {
    [styles.blur]: focusedClient,
    [styles.unblur]: focusedClient === '',
    [styles.dark]: theme === 'dark',
  })
  const experienceClass = cx(styles.experience, {
    [styles.dark]: theme === 'dark',
  })

  const handleClientHover = useCallback(client => {
    timeOutRef.current = setTimeout(() => {
      setFocusedClient(client)
      setLastFocusedClient(client)
    }, 300)
  }, [])

  const handleMouseOut = useCallback(() => {
    clearTimeout(timeOutRef.current)
    setFocusedClient('')
  }, [])

  return (
    <Layout isProjectPage>
      <main className={mainClass}>hi from PRojects</main>
    </Layout>
  )
})

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            projects {
              client
            }
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { projects },
      },
    }) => <ProjectsOverviewPage projects={projects} {...props} />}
  />
)
