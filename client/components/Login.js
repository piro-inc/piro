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
        <h1>This the the login form</h1>
        <input type='text' placeholder='Enter username' id='username' />
        <input type='text' placeholder='Enter password' id='password' />
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Login
