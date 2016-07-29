import React from 'react'
import Login from './Login'
import Register from './Register'

/*THIS IS A VERY VERY DUMB COMPONENT*/

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // state goes here
    }
  }

  render () {
    return (
      <div id='home-wrapper'>
        <div id='brand'>
          <img id='logo' src='#' />
          <p>Piro is awesome</p> {/* Description goes here.*/}
        </div>

        <div id='home-content'>
          <Login />
          <Register />
        </div>
      </div>
    )
  }
}

export default Home
