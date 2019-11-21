/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const React = require('react')
const Layout = require('./src/components/organisms/layout').default

exports.wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return (
    <Layout
      {...{
        ...props,
        isProjectPage: ['/project', '/about'].includes(props.location.pathname),
      }}
    >
      {element}
    </Layout>
  )
}
