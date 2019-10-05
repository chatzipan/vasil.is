import React, { Fragment, useCallback, useState } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import cx from 'classnames'

import XingDevices from '../assets/images/xing-all-devices_4x.png'
import { ProjectPreview } from '../components/molecules'
import { Layout, Project } from '../components/organisms'
import { withTheme } from '../components/hoc/theme'

import styles from './index.module.css'

const mainClients = [
  'Volkswagen',
  'Zalando',
  'Xing',
  'OTTO',
  'AboutYou',
  'SinnerSchrader',
]

const HomePage = withTheme(
  ({
    data: {
      site: {
        siteMetadata: { projects },
      },
    },
    theme,
  }) => {
    const [lastFocusedBtn, setLastFocusedBtn] = useState('')
    const [focusedBtn, setFocusedBtn] = useState('Xing')
    const [projectMode, setProjectMode] = useState('')
    const backgroundStyle = { backgroundImage: `url('${XingDevices}')` }
    const lineClass = cx(styles.backgroundLine, { [styles.show]: focusedBtn })
    const nameClass = cx(styles.name, { [styles.dark]: theme === 'dark' })
    const clientsClass = cx(styles.clients, { [styles.dark]: theme === 'dark' })
    const backgroundClass = cx(styles.background, {
      [styles.show]: focusedBtn,
      [styles.hide]: focusedBtn === '',
    })
    const mainClass = cx(styles.row, {
      [styles.blur]: focusedBtn,
      [styles.unblur]: focusedBtn === '',
      [styles.hide]: projectMode,
      [styles.dark]: theme === 'dark',
    })
    const experienceClass = cx(styles.experience, {
      [styles.dark]: theme === 'dark',
    })

    const handleClientClick = useCallback(client => {
      setProjectMode(client)
      setFocusedBtn('')
    }, [])

    const handleClientHover = useCallback(client => {
      setFocusedBtn(client)
      setLastFocusedBtn(client)
    }, [])

    return (
      <>
        <Project
          handleClose={() => setProjectMode(false)}
          isOpen={projectMode}
        />
        <ProjectPreview
          focusedProject={focusedBtn}
          isProjectMode={projectMode}
        />
        <main className={mainClass}>
          <div className={styles.main}>
            <h2 className={styles.intro}>
              <span className={styles.hi}>Hi! my name is</span>
              <span className={nameClass}>Vasilis Chatzipanagiotis,</span>
            </h2>
            <h3 className={experienceClass}>
              Software Engineer / Architect + ReactJS expert based in&nbsp;
              <span aria-label="Switzerland" title="Switzerland">
                🇨🇭
              </span>
              &nbsp;&&nbsp;
              <span aria-label="Italy" title="Italy">
                🇮🇹.
              </span>
            </h3>
            <h3 className={clientsClass}>
              <span className={styles.clientText}>
                Over the last 5 years, I've been helping clients build stuff for
                the web. Some of these include:&nbsp;
              </span>
              {mainClients.map(client => {
                const clientBtnClasses = cx(styles.clientBtn, {
                  [styles.focused]: client === focusedBtn,
                  [styles.wasFocused]: client === lastFocusedBtn,
                })

                return (
                  <Fragment key={client}>
                    <button
                      className={clientBtnClasses}
                      onClick={() => handleClientClick(client)}
                      onFocus={() => handleClientHover(client)}
                      onMouseOver={() => handleClientHover(client)}
                      onMouseOut={() => setFocusedBtn('')}
                      tabIndex="0"
                    >
                      {client}
                    </button>
                    <span className={styles.clientText}>, </span>
                  </Fragment>
                )
              })}
              <span className={styles.clientText}>and more...</span>
            </h3>
          </div>
        </main>
      </>
    )
  }
)

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
        <HomePage data={data} {...props} />
      </Layout>
    )}
  />
)
