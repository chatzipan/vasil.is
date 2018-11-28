import React from 'react'
import { Context } from './theme'

const withTheme = Component => {
  const WithThemeContext = props => (
    <Context.Consumer>
      {({ theme, changeTheme }) => (
        <Component {...{ ...props, theme, changeTheme }} />
      )}
    </Context.Consumer>
  )

  return WithThemeContext
}

export default withTheme
