import React from 'react'
import { connect } from 'react-redux'
import { register } from '../redux/sessionActions'
import validator from 'email-validator'

class Register extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
      registerError: ''
    }
  }

  userChange = (e) => {
    this.setState({ username: e.target.value })
  }

  emailChange = (e) => {
    this.setState({ email: e.target.value })
  }

  pwChange = (e) => {
    this.setState({ password: e.target.value })
  }

  pwcChange = (e) => {
    this.setState({ passwordConfirm: e.target.value })
  }

  register = (e) => {
    if(this.state.password.length < 5 || this.state.password.length > 30) {
      this.setState({ registerError: 'Password must be between 5 and 30 characters, sorry.' })
    } else if(this.state.username.length < 5 || this.state.username.length > 20) {
      this.setState({ registerError: 'Username must be between 5 and 20 characters, sorry.' })
    } else if(!validator.validate(this.state.email)) {
      this.setState({ registerError: 'Email isn\'t valid, sorry.' })
    } else if(this.state.password !== this.state.passwordConfirm) {
      this.setState({ registerError: 'Passwords don\'t match, sorry.' })
    } else {
      this.props.register(this.state.username, this.state.email, this.state.password)
    }
  }

  render () {
    return (
      <form id='register-form' action='#'>
        {this.props.error && <div>{this.props.error.message}</div>}
        {this.state.registerError && <div>{this.state.registerError}</div>}
        <input type='text' onChange={this.userChange} placeholder='Enter username' id='username' />
        <input type='text' onChange={this.emailChange} placeholder='Email' id='username' className='email' />
        <input type='password' onChange={this.pwChange}  placeholder='Enter password' id='password' className='password' />
        <input type='password' onChange={this.pwcChange}  placeholder='Re-enter password' id='password' className='password' />
        <button onClick={this.register}  className='submit button'>Register to PIRO</button>
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
    register: (username, email, password) => {
      dispatch(register(username, email, password))
    }
  }
}

const RegisterContainer = connect(mapStateToProps, mapDispatchToProps)(Register)

export default RegisterContainer
