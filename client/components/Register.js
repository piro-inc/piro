import React from 'react'

class Register extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // state goes here
    }
  }

  render () {
    return (
      <form id='register-form' action='#'>
        <input type='text' placeholder='Enter username' id='username' />
        <input type='text' placeholder='Enter password' className='password' />
        <input type='text' placeholder='Re-enter password' className='password' />
        <input type='text' placeholder='Email' className='email' />
        <button type='submit' className='submit button'>Register to PIRO</button>
      </form>
    )
  }
}

export default Register
