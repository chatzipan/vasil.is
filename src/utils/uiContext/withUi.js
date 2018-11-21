import React from 'react'
import UiContext from './uiContext'

const withUi = Component => {
  const WithUiContext = props => (
    <UiContext.Consumer>
      {({ isOnTop, handleScroll }) => (
        <Component {...{ isOnTop, handleScroll, ...props }} />
      )}
    </UiContext.Consumer>
  )

  return WithUiContext
}

export default withUi
