import React, { Component } from 'react'
import Observer from '@researchgate/react-intersection-observer'
import cx from 'classnames'

import Layout from '../components/layout'
import styles from './index.module.css'

class HomePage extends Component {
  state = {
    isOnTop: true,
  }

  handleIntersection = ({ isIntersecting }) => {
    this.setState({
      isOnTop: !isIntersecting,
    })
  }

  render() {
    const options = {
      onChange: this.handleIntersection,
    }
    const { isOnTop } = this.state
    const nameClassNames = cx(styles.name, { [styles.scrolled]: !isOnTop })
    const firstNameClassNames = cx(styles.first, {
      [styles.scrolled]: !isOnTop,
    })
    const lastNameClassNames = cx(styles.last, { [styles.scrolled]: !isOnTop })
    const scrollIconClassNames = cx(styles.scrollIcon, {
      [styles.show]: isOnTop,
    })

    return (
      <Layout>
        <div className={styles.page}>
          <div className={styles.column}>
            <div className={styles.spacer} />
            <Observer {...options}>
              <div className={styles.text}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </div>
            </Observer>
          </div>
          <div className={styles.column}>
            <div className={styles.info}>
              <h2 className={nameClassNames}>
                <span className={firstNameClassNames}>Vasilis</span>
                <span className={lastNameClassNames}>Chatzipanagiotis</span>
              </h2>
              <p className={styles.occupation}>Freelance Developer</p>
              <p className={styles.works}>Works 14-18</p>
              <span className={scrollIconClassNames}>↓</span>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.spacer} />
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like). It is a long established fact that a reader will be
            distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Many desktop
            publishing packages and web page editors now use Lorem Ipsum as
            their default model text, and a search for 'lorem ipsum' will
            uncover many web sites still in their infancy. Various versions have
            evolved over the years, sometimes by accident, sometimes on purpose
            (injected humour and the like). It is a long established fact that a
            reader will be distracted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsum is that it has
            a more-or-less normal distribution of letters, as opposed to using
            'Content here, content here', making it look like readable English.
            Many desktop publishing packages and web page editors now use Lorem
            Ipsum as their default model text, and a search for 'lorem ipsum'
            will uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident, sometimes on
            purpose (injected humour and the like). It is a long established
            fact that a reader will be distracted by the readable content of a
            page when looking at its layout. The point of using Lorem Ipsum is
            that it has a more-or-less normal distribution of letters, as
            opposed to using 'Content here, content here', making it look like
            readable English. Many desktop publishing packages and web page
            editors now use Lorem Ipsum as their default model text, and a
            search for 'lorem ipsum' will uncover many web sites still in their
            infancy. Various versions have evolved over the years, sometimes by
            accident, sometimes on purpose (injected humour and the like).
          </div>
        </div>
      </Layout>
    )
  }
}
export default HomePage
