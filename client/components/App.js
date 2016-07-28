import React from 'react'
import { connect } from 'react-redux'
import { addData } from '../redux/reducer'

export class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // state goes here
    }
  }

  addData = () => {
    this.props.addData('dummy')
  }

  render () {
    return (
      <div id='container'>
        <button onClick={this.addData}>This are button</button>
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
