import React, { Component, PropTypes } from 'react'
import Comments from './Comments'
import Console from './Console'
import Create from './Create'
import Game from './Game'
import Home from './Home'
import Login from './Login'
import Nav from './Nav'
import Options from './Options'
import Preview from './Preview'
import Register from './Register'
import Score from './Score'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //state goes here
    }
  }

  render() {
    return (
      <div id="container">
        {this.props.children}
      </div>
    )
  }
}

export default App
