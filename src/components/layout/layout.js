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
    const theme = localStorage.getItem('theme')
    this.state = {
      theme: theme || 'light',
      changeTheme: this.changeTheme,
    }
    !theme && localStorage.setItem('theme', 'light')
  }

  changeTheme = () => {
    const theme = this.state.theme === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', theme)
    this.setState({
      theme,
    })
  }

  render() {
    const {
      children,
      data: {
        site: {
          siteMetadata: { title, description, keywords },
        },
      },
    } = this.props
    const { theme } = this.state
    const meta = [
      {
        name: 'description',
        content: description,
      },
      {
        name: 'keywords',
        content: keywords,
      },
    ]

    return (
      <>
        <Helmet title={title} meta={meta} />
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
            description
            keywords
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
)
