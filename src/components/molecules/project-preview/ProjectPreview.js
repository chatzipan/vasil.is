import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { StaticQuery, graphql } from 'gatsby'

import { Logo } from '../../atoms'
import styles from './ProjectPreview.module.css'
import { useUI } from '../../../hooks'

const ProjectPreview = ({
  focusedProject,
  isProjectPage,
  lastFocusedProject,
  projects,
}) => {
  const {
    navigation: { linkClicked },
  } = useUI()
  const logoStyle = isProjectPage ? focusedProject : lastFocusedProject
  const { agency, period, position, sector, stack } =
    projects.find(({ client }) =>
      [focusedProject, lastFocusedProject].includes(client)
    ) || {}
  const lineClass = cx(styles.backgroundLine, {
    [styles.show]: focusedProject && !isProjectPage,
    [styles[`style${lastFocusedProject || focusedProject}`]]:
      lastFocusedProject || isProjectPage,
    [styles.isProjectPage]: isProjectPage,
    [styles.hide]: linkClicked,
  })
  const logoClass = cx(styles.logo, {
    [styles['style' + logoStyle]]: logoStyle,
  })
  const wrapperClass = cx(styles.backgroundWrapper, {
    [styles.isProjectPage]: isProjectPage,
    [styles.focused]: focusedProject,
  })
  const labelClass = cx(styles.label, {
    [styles['style' + focusedProject]]: focusedProject,
  })
  const backgroundClass = cx(styles.wrapper, {
    [styles.show]: (focusedProject || isProjectPage) && !linkClicked,
    [styles.hide]: focusedProject === '' || linkClicked,
    [styles['style' + focusedProject]]: focusedProject,
  })

  return (
    <aside className={wrapperClass}>
      <div className={backgroundClass}>
        <Logo
          className={logoClass}
          name={focusedProject || lastFocusedProject}
        />
        <dl className={styles.list}>
          <dt className={labelClass}>{agency ? 'Agency' : 'Branch'}</dt>
          <dd className={styles.value}>{agency ? agency : sector}</dd>
          <dt className={labelClass}>Position</dt>
          <dd className={styles.value}>{position}</dd>
          <dt className={labelClass}>When</dt>
          <dd className={styles.value}>{period}</dd>
          <dt className={labelClass}>Stack</dt>
          <dd className={styles.value}>{stack}</dd>
        </dl>
      </div>
      <hr className={lineClass} />
    </aside>
  )
}

ProjectPreview.propTypes = {
  focusedProject: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  lastFocusedProject: PropTypes.string,
  isProjectPage: PropTypes.bool,
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            mainProjects {
              agency
              client
              period
              sector
              position
              stack
            }
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { mainProjects },
      },
    }) => <ProjectPreview projects={mainProjects} {...props} />}
  />
)
