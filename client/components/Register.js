import React from 'react'
import { connect } from 'react-redux'
import { register } from '../redux/sessionActions'
import TextInput from './TextInput'

function errorExists (obj) {
  let res = false
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'object') {
      if (errorExists(obj[key])) {
        res = true
      }
    } else {
      if (key === 'error' && obj[key]) {
        res = true
      }
    }
  })
  return res
}

class Register extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: { value: '', error: '' },
      email: { value: '', error: '' },
      password: { value: '', error: '' },
      passwordConfirm: { value: '', error: '' }
    }
  }

  userChange = (e) => {
    const toUpdate = {
      value: e.target.value,
      error: ''
    }
    this.setState({ username: toUpdate })
    if (e.target.value.length < 4 || e.target.value.length > 20) {
      toUpdate.error = 'Username must be between 4 and 20 characters.'
      this.setState({ username: toUpdate })
    }
  }

  emailChange = (e) => {
    const toUpdate = {
      value: e.target.value,
      error: ''
    }
    this.setState({ email: toUpdate })
    if (!/.+@.+/.test(e.target.value)) {
      toUpdate.error = 'Email isn\'t valid.'
      this.setState({ email: toUpdate })
    }
  }

  pwChange = (e) => {
    const toUpdate = {
      value: e.target.value,
      error: ''
    }
    this.setState({ password: toUpdate })
    if (e.target.value.length < 5 || e.target.value.length > 30) {
      toUpdate.error = 'Password must be between 5 and 30 characters'
      this.setState({ password: toUpdate })
    }
  }

  pwcChange = (e) => {
    const toUpdate = {
      value: e.target.value,
      error: ''
    }
    this.setState({ passwordConfirm: toUpdate })
    if (this.state.password.value !== e.target.value) {
      toUpdate.error = 'Passwords don\'t match.'
      this.setState({ passwordConfirm: toUpdate })
    }
  }

  register = (e) => {
    if (!errorExists(this.state)) {
      this.props.register(this.state.username.value, this.state.email.value, this.state.password.value)
    }
  }

  render () {
    return (
      <div id='register-form'>
        <div className='error-container'> 
          {this.props.error && <div>{this.props.error}</div>}
          {this.state.username.error && <div>{this.state.username.error}</div>}
          {this.state.email.error && <div>{this.state.email.error}</div>}
          {this.state.password.error && <div>{this.state.password.error}</div>}
          {this.state.passwordConfirm.error && <div>{this.state.passwordConfirm.error}</div>}
        </div>
        <TextInput type='text' onBlur={this.userChange} placeholder='Enter username' error={this.state.username.error} />
        <TextInput type='email' onBlur={this.emailChange} placeholder='Email' error={this.state.email.error} />
        <TextInput type='password' onBlur={this.pwChange} placeholder='Enter password' error={this.state.password.error} />
        <TextInput type='password' onBlur={this.pwcChange} placeholder='Re-enter password' error={this.state.password.error} />
        <button onClick={this.register} className='submit button'>Register</button>
      </div>
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



