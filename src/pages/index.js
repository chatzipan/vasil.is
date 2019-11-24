import React, {
  Fragment,
  useCallback,
  useEffect,
  useState,
  useRef,
} from 'react'
import { StaticQuery, graphql } from 'gatsby'
import cx from 'classnames'
import { Link } from 'gatsby'
import TransitionLink from 'gatsby-plugin-transition-link'
import { useTranslation } from 'react-i18next'
import Helmet from 'react-helmet'

import { ProjectPreview } from '../components/molecules'
import { useUI } from '../hooks'

import styles from './index.module.css'

const HomePage = ({ projects, titleTemplate }) => {
  const {
    homepage: { setProjectPreviewOpen },
    theme: { theme },
  } = useUI()
  const [lastFocusedClient, setLastFocusedClient] = useState('')
  const [focusedClient, setFocusedClient] = useState(false)
  const timeOutRef = useRef()
  const { t } = useTranslation()
  const [timeout] = useState(false)
  const [linkClicked, setLinkClicked] = useState(false)
  const lineClass = cx(styles.backgroundLine, { [styles.show]: focusedClient })
  const nameClass = cx(styles.name, { [styles.dark]: theme === 'dark' })
  const clientsClass = cx(styles.clients, { [styles.dark]: theme === 'dark' })
  const yearsExperience = new Date().getFullYear() - 2014
  const mainClass = cx(styles.row, {
    [styles.blur]: focusedClient,
    [styles.hide]: linkClicked,
    [styles.unblur]: focusedClient === '' && !linkClicked,
    [styles.dark]: theme === 'dark',
  })
  const experienceClass = cx(styles.experience, {
    [styles.dark]: theme === 'dark',
  })

  const handleClientHover = useCallback(client => {
    timeOutRef.current = setTimeout(() => {
      setFocusedClient(client)
      setProjectPreviewOpen(true)
      setLastFocusedClient(client)
    }, 300)
  }, [])

  useEffect(() => {
    if (linkClicked) {
      clearTimeout(timeOutRef.current)
    }
  }, [linkClicked])

  const handleMouseOut = useCallback(() => {
    clearTimeout(timeOutRef.current)
    setFocusedClient('')
    setProjectPreviewOpen(false)
  }, [])

  const handleOnClick = useCallback(() => {
    setFocusedClient('')
    setProjectPreviewOpen(false)
    setLinkClicked(true)
  }, [])

  const handleOnMoreClick = useCallback(() => {
    setLinkClicked(true)
  }, [])

  return (
    <>
      <Helmet title={titleTemplate.replace('%s', 'Home')} />
      <ProjectPreview
        focusedProject={focusedClient}
        lastFocusedProject={lastFocusedClient}
      />
      <main className={mainClass}>
        <div className={styles.main}>
          <h2 className={styles.intro}>
            <span className={styles.hi}>{t('HOME_HALLO')}</span>
            <span className={nameClass}>{t('HOME_ΝΑΜΕ')},</span>
          </h2>
          <h3 className={experienceClass}>
            {t('HOME_OCCUPATION')}, {t('HOME_LOCATION')}
            <span aria-label={t('SWITZERLAND')} title="SWITZERLAND">
              🇨🇭.
            </span>
          </h3>
          <h3 className={clientsClass}>
            <span className={styles.clientText}>
              {t('HOME_CLIENTS_INTRO', { yearsExperience })}&nbsp;
            </span>
            {projects.map(({ client }, i) => {
              const clientBtnClasses = cx(styles.clientBtn, {
                [styles.focused]: client === focusedClient,
                [styles.wasFocused]: client === lastFocusedClient,
                [styles['style' + lastFocusedClient]]: lastFocusedClient,
              })

              return (
                <Fragment key={client}>
                  <TransitionLink
                    className={clientBtnClasses}
                    exit={{ delay: 0.5 }}
                    onBlur={handleMouseOut}
                    onClick={handleOnClick}
                    onFocus={() => handleClientHover(client)}
                    onMouseOver={() => handleClientHover(client)}
                    onMouseOut={handleMouseOut}
                    tabIndex="0"
                    to={`/projects/${client.toLowerCase()}`}
                  >
                    {client}
                  </TransitionLink>
                  <span className={styles.clientText}>
                    {i === projects.length - 1 ? ' ' : ', '}
                  </span>
                </Fragment>
              )
            })}
            <span className={styles.clientText}>
              {t('AND')}&nbsp;
              <TransitionLink
                className={styles.clientBtn}
                exit={{ delay: 0.5 }}
                onClick={handleOnMoreClick}
                to="/projects"
              >
                {t('MORE')}
              </TransitionLink>
              ,&nbsp;{t('HOME_CLIENTS_SUBJECT')}
            </span>
          </h3>
          <h3 className={clientsClass}>
            <span className={styles.clientText}>
              {t('HOME_READ_MORE')}&nbsp;
              <TransitionLink
                className={styles.clientBtn}
                exit={{ delay: 0.5 }}
                onClick={handleOnMoreClick}
                to="/about"
              >
                {t('HOME_ABOUT_ME')}
              </TransitionLink>
              &nbsp;{t('OR')}&nbsp;
              <a
                className={styles.clientBtn}
                href={`mailto:vchatzipan@gmail.com?${t('HOME_EMAIL_SUBJECT')}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                {t('HOME_GET_IT_TOUCH')}.
              </a>
            </span>
          </h3>
        </div>
      </main>
    </>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            titleTemplate
            mainProjects {
              client
            }
            ownProjects {
              client
            }
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { mainProjects, titleTemplate },
      },
    }) => (
      <HomePage
        projects={mainProjects}
        titleTemplate={titleTemplate}
        {...props}
      />
    )}
  />
)
