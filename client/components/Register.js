import React from 'react'
import { connect } from 'react-redux'
import { register } from '../redux/sessionActions'

function errorExists(obj) {
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
    if(!errorExists(this.state)) {
      this.props.register(this.state.username, this.state.email, this.state.password)
    }
  }

  render () {
    return (
      <div id='register-form'>
        {this.props.error && <div>{this.props.error.message}</div>}
        {this.state.username.error && <div>{this.state.username.error}</div>}
        <input type='text' onChange={this.userChange} placeholder='Enter username' id='username' />
        {this.state.email.error && <div>{this.state.email.error}</div>}
        <input type='text' onChange={this.emailChange} placeholder='Email' id='username' className='email' />
        {this.state.password.error && <div>{this.state.password.error}</div>}
        <input type='password' onChange={this.pwChange} placeholder='Enter password' id='password' className='password' />
        {this.state.passwordConfirm.error && <div>{this.state.passwordConfirm.error}</div>}
        <input type='password' onChange={this.pwcChange} placeholder='Re-enter password' id='password' className='password' />
        <button onClick={this.register} className='submit button'>Register to PIRO</button>
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
