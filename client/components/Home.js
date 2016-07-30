import React from 'react'
import Login from './Login'
import Register from './Register'

/* THIS IS A VERY VERY DUMB COMPONENT*/

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
        <div id='logo-wrapper'>
          <img id='logo' src='/images/logo-main.svg' />
        </div>
        <div id='home-content'>

          <div id='login'>
            <Login />
            <button className='button'>Register to PIRO</button>
          </div>

          {/* <div id='register'>
            <Register />
          </div> */}

          <a href='#' className='enter-page'>
            <h3>ENTER AS A GUEST</h3>
          </a>

        </div>

      </div>
    )
  }
}

export default Home
