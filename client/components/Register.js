import React from 'react'
import { connect } from 'react-redux'
import { login } from '../redux/sessionActions'

const Register = (props) => {
  return (
    <form id='register-form' action='#'>
      <input type='text' placeholder='Enter username' id='username' />
      <input type='password' placeholder='Enter password' className='password' />
      <input type='password' placeholder='Re-enter password' className='password' />
      <input type='text' placeholder='Email' className='email' />
      <button type='submit' className='submit button'>Register to PIRO</button>
    </form>
  )
}

const mapStateToProps = f => f

const mapDispatchToProps = (dispatch) => {
  return {
    register: (username, email, password) => {
      dispatch(register(username, email, password))
    }
  }
}

const RegisterContainer = connect(mapStateToProps, mapDispatchToProps)(Register)

export default RegisterContainer
