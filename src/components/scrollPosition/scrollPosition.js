import React, { Component } from 'react'

export const Context = React.createContext('scrollPosition')

class ScrollPositionProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      handleScroll: this.handleScroll,
      isOnTop: true,
    }
  }

  handleScroll = ({ isIntersecting }) => {
    this.setState({
      isOnTop: !isIntersecting,
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

export default ScrollPositionProvider
