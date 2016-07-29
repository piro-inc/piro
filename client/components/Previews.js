import React from 'react'
import Preview from './Preview'

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
        <Preview />
        <Preview />
        <Preview />
        <Preview />
      </div>
    )
  }
}

export default Previews
