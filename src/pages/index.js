import React, { Fragment, useState } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import cx from 'classnames'

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
    const [focusedBtn, setFocusedBtn] = useState('')
    const [projectMode, setProjectMode] = useState(false)
    const projectClass = cx(styles.project, { [styles.show]: projectMode })
    const backgroundClass = cx(styles.background, {
      [styles.show]: focusedBtn,
    })
    const mainClass = cx(styles.row, {
      [styles.blur]: focusedBtn,
      [styles.hide]: projectMode,
    })
    const experienceClass = cx(styles.experience, {
      [styles.dark]: theme === 'dark',
    })

    return (
      <>
        <Project
          className={projectClass}
          handleClose={() => setProjectMode(false)}
          isOpen={projectMode}
        />
        <div
          className={backgroundClass}
          style={{
            backgroundImage:
              "url('../../../assets/images/xing-all-devices_4x.png')",
          }}
        ></div>
        <main className={mainClass}>
          <div className={styles.main}>
            <h2 className={styles.intro}>
              <span className={styles.hi}>Hi! my name is</span>
              <span
                className={cx(styles.name, { [styles.dark]: theme === 'dark' })}
              >
                Vasilis Chatzipanagiotis,
              </span>
            </h2>
            <h3 className={experienceClass}>
              Software Engineer / Architect + ReactJS expert based in&nbsp;
              <span aria-label="Switzerland" title="Switzerland">
                🇨🇭
              </span>
              .
            </h3>
            <h3
              className={cx(styles.clients, {
                [styles.dark]: theme === 'dark',
              })}
            >
              <span className={styles.clientText}>
                Over the last 5 years, I've been building stuff for the web, for
                clients such as&nbsp;
              </span>
              {mainClients.map(client => {
                const clientBtnClasses = cx(styles.clientBtn, {
                  [styles.focused]: client === focusedBtn,
                })

                return (
                  <Fragment key={client}>
                    <button
                      className={clientBtnClasses}
                      onClick={() => setProjectMode(!projectMode)}
                      onFocus={() => setFocusedBtn(client)}
                      onMouseOver={() => setFocusedBtn(client)}
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
