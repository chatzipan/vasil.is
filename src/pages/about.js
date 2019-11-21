import React, { Fragment, useCallback, useState, useRef } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import cx from 'classnames'

import { ProjectPreview } from '../components/molecules'
import { Logo } from '../components/atoms'
import CellularLogo from '../assets/images/cellular_logo.png'

import { useUI } from '../hooks'

import styles from './about.module.css'

const AboutPage = () => {
  const {
    theme: { theme },
  } = useUI()
  const textClasses = cx(styles.text, styles[theme])
  return (
    <main className={styles.logosArea}>
      <p className={textClasses}>
        I'm a multi-disciplined software engineer currently based in Zurich,🇨🇭,
        originally from Athens,🇬🇷.
      </p>
      <p className={textClasses}>
        I've been building products for a wide range of clients from small
        startups, to leading digital agencies, up to big enterprises.
      </p>
      <p className={textClasses}>
        My experiences range from Front-End Architecture and UI/UX Design to
        Back-End Development. I develop web applications that have an intuitive
        design, are accessible to users with disabilities, load fast and have a
        maintenable code basis.
      </p>
      <p className={textClasses}>
        My tasks include taking ownership for the products I participate,
        deciding for the right technological solution for any given projects, as
        well as coaching and transfering knowledge to fellow developers.
      </p>
      <p className={textClasses}>
        <a
          className={textClasses}
          href="mailto:vchatzipan@gmail.com?subject=I'd like to talk about a project&body=Hi Vasilis,"
          rel="noopener noreferrer"
          target="_blank"
        >
          Let’s start a cool project together!
        </a>
      </p>
    </main>
  )
}

export default AboutPage
