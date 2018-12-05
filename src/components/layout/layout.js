import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import { ScrollPositionProvider } from '../hoc/scrollPosition'
import { ThemeProvider } from '../hoc/theme'
import AppShell from '../organisms/appShell'

import '../../styles/layout.css'
import '../../styles/fonts.css'
import '../../styles/typography.css'

typeof window !== 'undefined' && require('intersection-observer')

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    data: PropTypes.shape({
      site: PropTypes.shape({
        siteMetadata: PropTypes.shape({
          description: PropTypes.string,
          keywords: PropTypes.string,
        }),
      }),
    }),
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

  render() {
    const {
      children,
      data: {
        site: {
          siteMetadata: { title },
        },
      },
    } = this.props

    return (
      <>
        <Helmet title={title} meta={this.meta} />
        <ScrollPositionProvider>
          <ThemeProvider>
            <AppShell>{children}</AppShell>
          </ThemeProvider>
        </ScrollPositionProvider>
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
