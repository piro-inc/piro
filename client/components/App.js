import React from 'react'

export class App extends React.Component {
  render () {
    return (
      <div id='container'>
     {this.props.children}
      </div>
    )
  }
}

export default App
