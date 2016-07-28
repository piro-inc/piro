import React, { Component, PropTypes } from 'react';


class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //state goes here
    }
  }

  render() {
    return (
      <form id="login-form" action="#">
        <input type="text" placeholder="Enter username" id="username">
        <input type="text" placeholder="Enter password" id="password"/>
        <button type="submit">Submit</button>
      </div>
    )
  }
}

export default Login
