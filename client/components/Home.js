import React from 'react'
import Login from './Login'
import Register from './Register'
import { connect } from 'react-redux'
import { clearError } from '../redux/sessionActions'

/* THIS IS A VERY VERY DUMB COMPONENT*/

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // state goes here
      showing: false
    }
  }

  toggle = (showing) => {
    return () => {
      this.props.clearError()
      this.setState({ showing })
    }
  }

  render () {
    return (
      <div id='home-wrapper'>
        <div id='logo-wrapper'>
          <img id='logo' src='/images/logo-main.svg' />
        </div>
        <div id='home-content'>

          <div id='login'>
            {this.state.showing === 'login'
            ? <Login />
            : <button onClick={this.toggle('login')} className='button'>Login</button>}
          </div>

          <div id='register'>
            {this.state.showing === 'register'
            ? <Register />
            : <button onClick={this.toggle('register')} className='button'>Register to PIRO</button>}
          </div>

          <div className='enter-page'>
            <h3><a href='#'>ENTER AS A GUEST</a></h3>
          </div>
        </div>

      </div>
    )
  }
}

const mapStateToProps = f => f

const mapDispatchToProps = (dispatch) => {
  return {
    clearError: () => {
      dispatch(clearError())
    }
  }
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)

export default HomeContainer
