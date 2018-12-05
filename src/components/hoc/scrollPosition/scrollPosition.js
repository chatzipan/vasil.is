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
      isOnTop: null,
      loadedOnTop: null,
    }
  }

  handleScroll = ({ isIntersecting }) => {
    this.setState({
      isOnTop: !isIntersecting,
    })
  }

  componentDidUpdate(prevProps, prevState) {
    // Typical usage (don't forget to compare props):
    if (prevState.isOnTop === null) {
      this.setState({
        loadedOnTop: this.state.isOnTop,
      })
    }
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
