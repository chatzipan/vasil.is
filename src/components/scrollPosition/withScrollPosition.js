import React from 'react'
import { Context } from './scrollPosition'

const withScrollPosition = Component => {
  const WithScrollPositionContext = props => (
    <Context.Consumer>
      {({ isOnTop, handleScroll }) => (
        <Component {...{ isOnTop, handleScroll, ...props }} />
      )}
    </Context.Consumer>
  )

  return WithScrollPositionContext
}

export default withScrollPosition
