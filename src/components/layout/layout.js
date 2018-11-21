import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import cx from 'classnames'

import { ThemeContext, UiContext } from '../../utils'
import ThemeSideBar from '../themeSideBar'
import SocialSideBar from '../socialSideBar'
import Header from '../header'

import '../../styles/layout.css'
import '../../styles/fonts.css'
import '../../styles/typography.css'
import styles from './layout.module.css'

typeof window !== 'undefined' && require('intersection-observer')

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  meta = [
    {
      name: 'description',
      content: this.props.data.site.siteMetadata.description,
    },
    {
      name: 'keywords',
      content: this.props.data.site.siteMetadata.keywords,
    },
  ]

  constructor(props) {
    super(props)
    const theme =
      typeof window !== 'undefined' && localStorage in window
        ? localStorage.getItem('theme')
        : 'light'

    this.state = {
      changeTheme: this.changeTheme,
      handleScroll: this.handleScroll,
      isOnTop: true,
      theme: theme || 'light',
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

  handleScroll = ({ isIntersecting }) => {
    this.setState({
      isOnTop: !isIntersecting,
    })
  }

  render() {
    const {
      children,
      data: {
        site: {
          siteMetadata: { title },
        },
      },
    } = this.props
    const { theme } = this.state

    return (
      <>
        <Helmet title={title} meta={this.meta} />
        <UiContext.Provider value={this.state}>
          <ThemeContext.Provider value={this.state}>
            <div className={cx(styles.layout, styles[theme])}>
              <Header />
              <ThemeSideBar />
              <div>{children}</div>
              <SocialSideBar />
            </div>
          </ThemeContext.Provider>
        </UiContext.Provider>
      </>
    )
  }
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
