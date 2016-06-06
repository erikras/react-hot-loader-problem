import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { Router, browserHistory } from 'react-router'
import { IndexRoute, Route } from 'react-router'
import App from './App'
import Page from './Page'

const dest = document.getElementById('content')
const reducer = combineReducers({ form })
const store = createStore(reducer)

let render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Page}/>
        </Route>
      </Router>
    </Provider>,
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
