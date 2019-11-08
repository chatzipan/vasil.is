import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../../../i18n'

import { ThemeProvider } from '../../../context/ThemeContext'
import { LanguageContextProvider } from '../../../context/LanguageContext'

import { AppShell } from '../'

import '../../../styles/layout.css'
import '../../../styles/fonts.css'
import '../../../styles/typography.css'

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
    isProjectPage: PropTypes.bool,
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

  componentDidCatch(error, info) {
    console.log({ error, info })
  }

  render() {
    const {
      children,
      data: {
        site: {
          siteMetadata: { title, mainProjects: projects },
        },
      },
      isProjectPage,
    } = this.props

    return (
      <>
        <Helmet title={title} meta={this.meta} />
        <ThemeProvider>
          <LanguageContextProvider>
            <AppShell
              isProjectPage={isProjectPage}
              projects={projects.map(({ client }) => client.toLowerCase())}
            >
              {children}
            </AppShell>
          </LanguageContextProvider>
        </ThemeProvider>
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
            mainProjects {
              client
            }
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
)
