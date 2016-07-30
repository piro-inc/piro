import React from 'react'
import { connect } from 'react-redux'
import { login } from '../redux/sessionActions'

class Login extends React.component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  userChange = (e) => {
    this.setState({ username: e.target.value })
  }

  pwChange = (e) => {
    this.setState({ password: e.target.value })
  }

  login = () => {
    this.props.login(this.state.username, this.state.password)
  }

  render () {
    return (
      <form id='login-form' action='#'>
        <input type='text' onChange={userChange} placeholder='Enter username' id='username' />
        <input type='password' onChange={pwChange} placeholder='Enter password' id='password' />
        <button type='submit' onClick={this.login} className='submit button'>Log In</button>
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
