import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader';
import App from './App'

const dest = document.getElementById('content')

ReactDOM.render(
  <AppContainer>
    <App/>
  </AppContainer>,
  dest
)

if (module.hot) {
  module.hot.accept('./App', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./App').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      dest
    );
  });
}
