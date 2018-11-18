import React from 'react'
import ThemeContext from './themeContext'

const withTheme = Component => {
  const WithThemeContext = props => (
    <ThemeContext.Consumer>
      {({ theme, changeTheme }) => (
        <Component {...{ ...props, theme, changeTheme }} />
      )}
    </ThemeContext.Consumer>
  )

  return WithThemeContext
}

export default withTheme
