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
    /*} */
    /*<button onClick={this.toggle('register')} className='button'>Register to PIRO</button> */
    return (
      <div id='home-content'>
        <div id='input-wrapper'>
          <div id='login'>
            {this.state.showing === 'login'
            ? <Login />
            : '' 
            }
          </div>

          <div id='register'>
            {this.state.showing === 'register'
            ? <Register />
            : ''   
          }
          </div>
          {this.state.showing === 'login' 
          ? <a onClick={this.toggle('register')} >Register</a>
          : this.state.showing === 'register' 
            ? <a onClick={this.toggle('login')}>Login</a> 
            : (<div className='button-wrapper'><button onClick={this.toggle('login')} className='button'>Login</button>
            <button onClick={this.toggle('register')} className='button'>Register</button></div>)
          }
        </div>
        <div className='enter-page'>
          <h3><Link to='/games'>ENTER AS A GUEST</Link></h3>
        </div>
      </div>
    )
  }
}

export default GuestView
