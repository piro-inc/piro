import React from 'react'
import GuestView from './GuestView'
import { connect } from 'react-redux'
import { clearError, authenticateUser } from '../redux/sessionActions'
import { readCookie } from '../utils'

class Home extends React.Component {

  componentDidMount () {
    this.props.authenticateUser(readCookie('user.id'))
  }

  render () {
    return (
      <div id='home-wrapper'>
        <div id='logo-wrapper'>
          <img id='logo' src='/images/logo-main.svg' />
        </div>
        {this.props.user.id
        ? <div id='home-content'>
          <div id='input-wrapper'>
            <div id='welcome'>
              <a>
                Welcome, <strong>{this.props.user.username}</strong>!
              </a>
            </div>
            <div id='login'>
              <button className='loggedinButton'>
                <a href='/games'>Home</a>
              </button>
            </div>
          </div>
        </div>
        : <GuestView clearError={this.props.clearError} />
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.session.get('user').toJS()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearError: () => {
      dispatch(clearError())
    },
    authenticateUser: (id) => {
      dispatch(authenticateUser(id))
    }
  }
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)

export default HomeContainer
