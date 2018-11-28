import React, { Component } from 'react'
import PropTypes from 'prop-types'

export const Context = React.createContext('scrollPosition')

class ScrollPositionProvider extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

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
