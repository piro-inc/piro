import React from 'react'
import Preview from './Preview'
import Navbar from './Navbar'

class Previews extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // state goes here
    }
  }

  render () {
    return (
      <div>
        <Navbar/>
        <Preview />
        <Preview />
        <Preview />
        <Preview />
      </div>
    )
  }
}

export default Previews
