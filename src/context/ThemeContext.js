import React, { createContext } from 'react'
import PropTypes from 'prop-types'

const ThemeContext = createContext({
  changeTheme: () => {},
  theme: 'light',
})

export class ThemeProvider extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  }

  constructor(props) {
    super(props)
    const theme =
      typeof window !== 'undefined' && 'localStorage' in window
        ? window.localStorage.getItem('theme')
        : 'light'

    this.state = {
      changeTheme: this.changeTheme,
      theme: theme || 'light',
    }

    !theme && window.localStorage.setItem('theme', 'light')
  }

  changeTheme = () => {
    const theme = this.state.theme === 'light' ? 'dark' : 'light'
    window.localStorage.setItem('theme', theme)
    this.setState({
      theme,
    })
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export default ThemeContext
