import React, { Component } from 'react'

const getWindowHeight = () =>
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.getElementsByTagName('body')[0].clientHeight

export default style => BaseComponent => {
  const displayName =
    BaseComponent.displayName || BaseComponent.name || 'Component'

  class WithParallax extends Component {
    static displayName = `withParallax(${displayName})`

    animating = false
    el = null
    clientHeight = 0

    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll)
      this.clientHeight = getWindowHeight()
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
      const top = this.el.getBoundingClientRect().top
      if (top < -this.clientHeight || top > this.clientHeight) {
        return
      }

      const diff = this.clientHeight / 4 - top
      this[style](diff)
    }

    LtoR = diff => {
      this.el.style.transform = `translate3d(${-(diff * 1.5) /
        100}vw, 0px, 0px) rotate3d(0, 1, 0, ${-diff / 10}deg)`
    }

    RtoL = diff => {
      this.el.style.transform = `translate3d(${(diff * 1.5) /
        100}vw, 0px, 0px) rotate3d(0, 1, 0, ${diff / 10}deg)`
    }

    render() {
      return (
        <div
          ref={el => (this.el = el)}
          style={{
            textAlign: 'center',
            width: '100%',
            transition: 'all 0.1s ease-out',
          }}
        >
          <BaseComponent {...this.props} />
        </div>
      )
    }
  }

  return WithParallax
}
