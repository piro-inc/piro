import React from 'react'
import { connect } from 'react-redux'
import { login } from '../redux/sessionActions'

class Login extends React.Component {
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
    console.log(this.props.error)
    return (
      <form id='login-form' action='#'>
        {this.props.error && <div>{this.props.error.message}</div>}
        <input type='text' onChange={this.userChange} placeholder='Enter username' id='username' />
        <input type='password' onChange={this.pwChange} placeholder='Enter password' id='password' />
        <button type='submit' onClick={this.login} className='submit button'>Log In</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.session.get('error')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => {
      dispatch(login(username, password))
    }
  }
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login)

export default LoginContainer
