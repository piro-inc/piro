import React from 'react'
import { Link } from 'react-router'
import Login from './Login'
import Register from './Register'

class GuestView extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      // state goes here
      showing: false
    }
  }

  toggle = (showing) => {
    return () => {
      this.props.clearError()
      this.setState({ showing })
    }
  }

  render () {
    return (
      <div id='home-content'>
        <div id='input-wrapper'>
          <div id='login'>
            {this.state.showing === 'login'
            ? <Login />
            : <button onClick={this.toggle('login')} className='button'>Login</button>}
          </div>

          <div id='register'>
            {this.state.showing === 'register'
            ? <Register />
            : <button onClick={this.toggle('register')} className='button'>Register to PIRO</button>}
          </div>
        </div>
        <div className='enter-page'>
          <h3><Link to='/games'>ENTER AS A GUEST</Link></h3>
        </div>
      </div>
    )
  }
}

export default GuestView
