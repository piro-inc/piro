import React from 'react'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // state goes here
    }
  }

  render () {
    return (
      <div id='container'>
        {this.props.children}
      </div>
    )
  }
}

export default App
