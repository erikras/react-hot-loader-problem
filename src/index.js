import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Page from './Page'

const dest = document.getElementById('content')

let render = () => {
  ReactDOM.render(
    <App>
      <Page/>
    </App>,
    dest
  )
}

if (module.hot) {
  // Support hot reloading of components
  // and display an overlay for runtime errors
  const renderApp = render
  const renderError = (error) => {
    const RedBox = require('redbox-react')
    ReactDOM.render(
      <RedBox error={error} className="redbox"/>,
      dest
    )
  }
  render = () => {
    try {
      renderApp()
    } catch (error) {
      renderError(error)
    }
  }
  const rerender = () => {
    console.log('This is never seen? Why?')
    setTimeout(render)
  }
  module.hot.accept('./App', rerender)
}

render()
