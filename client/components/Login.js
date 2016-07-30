import React from 'react'
import { connect } from 'react-redux'
import { login } from '../redux/sessionActions'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // state goes here
    }
  }

  render () {
    return (
      <form id='login-form' action='#'>
        <input type='text' placeholder='Enter username' id='username' />
        <input type='password' placeholder='Enter password' id='password' />
        <button type='submit' className='submit button'>Log In</button>
      </form>
    )
  }
}

const mapStateToProps = f => f

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => {
      dispatch(login(username, password))
    }
  }
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login)

export default LoginContainer
