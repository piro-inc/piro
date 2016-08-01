import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { readCookie } from '../utils'
import { authenticateUser } from '../redux/sessionActions'

class Navbar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // state goes here
    }
  }

  componentDidMount () {
    this.props.authenticateUser(readCookie('user.id'))
  }

  render () {
    const user = this.props.user
    return (
      <div id='navbar'>
        <Link to='/games' id='logo-nav-wrapper'>
          <img id='logo-nav' src='/images/logo-nav.svg' />
        </Link>

        {!user.username
          ? <Link to='/' className='nav-links'>
            <p className='nav-login-register'>login</p>
            <p className='nav-login-register'>register</p>
          </Link>
          : <div className='nav-links'>
            <p className='nav-login-register'>{user.username}</p>
            <Link to='/games/new' id='nav-menu' className='drop-down-menu'>+</Link>
          </div>
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
    authenticateUser: (id) => {
      dispatch(authenticateUser(id))
    }
  }
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)

export default NavbarContainer
