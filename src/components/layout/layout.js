import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import cx from 'classnames'

import { ThemeContext } from '../../utils/themeContext'
import ThemeSideBar from '../themeSideBar'
import Header from '../header'

import '../../styles/layout.css'
import '../../styles/fonts.css'
import '../../styles/typography.css'
import styles from './layout.module.css'

typeof window !== 'undefined' && require('intersection-observer')

class Layout extends Component {
  constructor(props) {
    super(props)

    this.state = {
      theme: 'light',
      changeTheme: this.changeTheme,
    }
  }

  changeTheme = () =>
    this.setState({
      theme: this.state.theme === 'light' ? 'dark' : 'light',
    })

  render() {
    const { children, data } = this.props
    const { theme } = this.state
    return (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'Freelance Developer based in Hamburg, Germany',
            },
            {
              name: 'keywords',
              content:
                'freelancer, web, software engineer, frontend, react.js, remote, hamburg, javascript',
            },
          ]}
        />
        <ThemeContext.Provider value={this.state}>
          <div className={cx(styles.layout, styles[theme])}>
            <Header />
            <ThemeSideBar />
            <div>{children}</div>
          </div>
        </ThemeContext.Provider>
      </>
    )
  }
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
)
