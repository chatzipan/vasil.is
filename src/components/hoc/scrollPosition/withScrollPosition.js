import React from 'react'
import { Context } from './scrollPosition'

const withScrollPosition = Component => {
  const WithScrollPositionContext = props => (
    <Context.Consumer>
      {({ isOnTop, handleScroll, loadedOnTop }) => (
        <Component {...{ isOnTop, handleScroll, loadedOnTop, ...props }} />
      )}
    </Context.Consumer>
  )

  return WithScrollPositionContext
}

export default withScrollPosition
