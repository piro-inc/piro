import React from 'react'
import { connect } from 'react-redux'
import { addData } from '../redux/session'

export class App extends React.Component {
  render () {
    return (
      <div id='container'>
     {this.props.children}
      </div>
    )
  }
}

function mapStateToProps (state) {
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

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

export default AppContainer
