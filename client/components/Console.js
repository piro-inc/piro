import React from 'react'
import Navbar from './Navbar'

class Console extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // state goes here
    }
  }

  render () {
    return (
      <div>
        <Navbar />
        <h1>this is the console</h1>
      </div>
    )
  }
}

export default Console
