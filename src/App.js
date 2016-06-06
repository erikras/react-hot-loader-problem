import React, { Component, PropTypes } from 'react'

class App extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired
  }
  
  render() {
    const { children } = this.props
    return (
      <div>
        {children}
      </div>
    )
  }
}

export default App
