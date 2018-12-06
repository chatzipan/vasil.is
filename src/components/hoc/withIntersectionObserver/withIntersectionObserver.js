import React, { Component } from 'react'
import Observer from '@researchgate/react-intersection-observer'

export default options => BaseComponent => {
  const displayName =
    BaseComponent.displayName || BaseComponent.name || 'Component'

  class WithIntersectionObserver extends Component {
    static displayName = `withIntersectionObserver(${displayName})`

    state = {
      isIntersecting: false,
    }

    handleChange = ({ isIntersecting, intersectionRatio }) => {
      this.setState({
        isIntersecting:
          isIntersecting && intersectionRatio >= options.threshold,
        intersectionRatio,
      })
    }

    render() {
      return (
        <Observer {...{ onChange: this.handleChange, ...options }}>
          <div>
            <BaseComponent
              {...this.props}
              isVisible={this.state.isIntersecting}
              intersectionRatio={this.state.intersectionRatio}
            />
          </div>
        </Observer>
      )
    }
  }

  return WithIntersectionObserver
}
