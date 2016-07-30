import React from 'react'

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

export default Login
