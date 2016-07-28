import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addData } from '../redux/reducer'
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

  addData = () => {
    this.props.addData('dummy');
  }

  render() {
    console.log("AAA", this.props.reducer.data)
    return (
      <div id="container">
        <button onClick={this.addData}>This are button</button>
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ...state
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addData: (data) => {
      dispatch(addData(data))
    }
  }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer
