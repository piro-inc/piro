import React from 'react'
import { connect } from 'react-redux'
import { manageGame } from '../redux/gamesActions'

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

const mapStateToProps = (state) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    manageGame: () => {
      dispatch(manageGame())
    }
  }
}

const ConsoleContainer = connect(mapStateToProps, mapDispatchToProps)(Console)

export default ConsoleContainer
