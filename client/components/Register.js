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
      <div>
      <form id='register-form' action='#'>
      <h1>This is the register form</h1>
        <input type='text' placeholder='Enter username' id='username' />
        <input type='text' placeholder='Enter password' className='password' />
        <input type='text' placeholder='Re-enter password' className='password' />
        <button type='submit'>Submit</button>
      </form>
      </div>
    )
  }
}

export default Register
