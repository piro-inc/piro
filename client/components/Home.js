import React, { Component, PropTypes } from 'react';
import Login from './Login'
import Options from './Options'
import Register from './Register'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //state goes here
    }
  }

  render() {
    return (
      <div id="home-wrapper">
        <div id="brand">
          <img id="logo" src="#">
          <p>Piro is awesome</p> //Description goes here.
        </div>
        {this.props.children} //Options, Login or Register Components go here.
      </div>
    )
  }
}

export default Home
