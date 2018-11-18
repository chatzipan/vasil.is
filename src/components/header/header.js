import React from 'react'
import { Link } from 'gatsby'

import styles from './header.module.css'

const Header = () => (
  <div className={styles.header}>
    <Link className={styles.item} to="/portfolio">
      portfolio
    </Link>
    <Link className={styles.item} to="/about">
      about
    </Link>
    <Link className={styles.item} to="/contact">
      contact
    </Link>
  </div>
)

export default Header
