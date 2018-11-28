import React, { Component } from 'react'
import PropTypes from 'prop-types'

export const Context = React.createContext({
  theme: 'light',
  changeTheme: () => {},
})

class ThemeProvider extends Component {
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
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default ThemeProvider
