import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import InternalProvider from 'gatsby-plugin-transition-link/context/InternalProvider'

import logos from '../../../assets/images/logos.png'
import '../../../i18n'

import { UIProvider } from '../../../context/UIContext'
import { AppShell } from '../'

import '../../../styles/layout.css'
import '../../../styles/fonts.css'
import '../../../styles/typography.css'

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

  componentDidCatch(error, info) {
    console.log({ error, info })
  }

  render() {
    const {
      children,
      data: {
        site: {
          siteMetadata: {
            description,
            image,
            keywords,
            mainProjects,
            ownProjects,
            siteUrl: url,
            title,
            titleTemplate,
            twitterUsername,
          },
        },
      },
      location,
    } = this.props

    const isProjectPage =
      location.pathname.includes('/project') ||
      location.pathname.includes('/about')

    return (
      <>
        <Helmet title={title} titleTemplate={titleTemplate}>
          <meta name="description" content={description} />
          <meta name="og:description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta property="og:url" content={url} />
          <meta property="og:title" content={title} />
          <meta property="og:image" content={logos} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content={twitterUsername} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={logos} />
        </Helmet>
        <UIProvider location={location}>
          <AppShell
            isProjectPage={isProjectPage}
            location={location}
            projects={[...mainProjects, ...ownProjects].map(({ client }) =>
              client.toLowerCase()
            )}
          >
            {children}
          </AppShell>
        </UIProvider>
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
            description
            keywords
            mainProjects {
              client
            }
            ownProjects {
              client
            }
            siteUrl
            title
            titleTemplate
            twitterUsername
            image
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
)
