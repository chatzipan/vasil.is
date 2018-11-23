import React, { Component } from 'react'

export const Context = React.createContext({
  theme: 'light',
  changeTheme: () => {},
})

class ThemeProvider extends Component {
  constructor(props) {
    super(props)
    const theme =
      typeof window !== 'undefined' && localStorage in window
        ? localStorage.getItem('theme')
        : 'light'

    this.state = {
      changeTheme: this.changeTheme,
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

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default ThemeProvider
