import React, { Fragment, useCallback, useState } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import cx from 'classnames'
import { Link } from 'gatsby'

import XingDevices from '../assets/images/xing-all-devices_4x.png'
import { ProjectPreview } from '../components/molecules'
import { Layout, Project } from '../components/organisms'
import { withTheme } from '../components/hoc/theme'

import styles from './index.module.css'

const HomePage = withTheme(({ projects, theme }) => {
  const [lastFocusedClient, setLastFocusedClient] = useState('')
  const [focusedClient, setFocusedClient] = useState(false)
  const backgroundStyle = { backgroundImage: `url('${XingDevices}')` }
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
    setFocusedClient(client)
    setLastFocusedClient(client)
  }, [])

  const handleMouseOut = useCallback(() => {
    setFocusedClient('')
  }, [])

  return (
    <>
      <ProjectPreview
        focusedProject={focusedClient}
        lastFocusedProject={lastFocusedClient}
      />
      <main className={mainClass}>
        <div className={styles.main}>
          <h2 className={styles.intro}>
            <span className={styles.hi}>Hi! my name is</span>
            <span className={nameClass}>Vasilis Chatzipanagiotis,</span>
          </h2>
          <h3 className={experienceClass}>
            Software Engineer / Architect + ReactJS expert based in Zurich
            <span aria-label="Switzerland" title="Switzerland">
              🇨🇭.
            </span>
          </h3>
          <h3 className={clientsClass}>
            <span className={styles.clientText}>
              Over the last 5 years, I've been helping out clients such as&nbsp;
            </span>
            {projects.map(({ client }, i) => {
              const clientBtnClasses = cx(styles.clientBtn, {
                [styles.focused]: client === focusedClient,
                [styles.wasFocused]: client === lastFocusedClient,
                [styles['style' + lastFocusedClient]]: lastFocusedClient,
              })

              return (
                <Fragment key={client}>
                  <Link
                    className={clientBtnClasses}
                    onBlur={handleMouseOut}
                    onFocus={() => handleClientHover(client)}
                    onMouseOver={() => handleClientHover(client)}
                    onMouseOut={handleMouseOut}
                    tabIndex="0"
                    to={`/projects/${client.toLowerCase()}`}
                  >
                    {client}
                  </Link>
                  <span className={styles.clientText}>
                    {i === projects.length - 1 ? ' ' : ', '}
                  </span>
                </Fragment>
              )
            })}
            <span className={styles.clientText}>
              and more, to build stuff for the web.
            </span>
          </h3>
        </div>
      </main>
    </>
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
    }) => (
      <Layout>
        <HomePage projects={projects} {...props} />
      </Layout>
    )}
  />
)
