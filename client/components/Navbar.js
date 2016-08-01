import React from 'react'
import { connect } from 'react-redux'
import { Link, browserHistory } from 'react-router'
import { readCookie } from '../utils'
import { authenticateUser, logout } from '../redux/sessionActions'
import { IconButton, Menu, MenuItem } from 'react-mdl'

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

  logout = () => {
    this.props.logout()
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
        <div style={{position: 'relative'}}>
          <IconButton name='+' id='demo-menu-lower-right' />
          <Menu target='demo-menu-lower-right' align='right'>
            <MenuItem onClick={() => browserHistory.push('/')}>Home</MenuItem>
            <MenuItem onClick={this.logout}>Logout</MenuItem>
          </Menu>
        </div>
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
    },
    logout: () => {
      dispatch(logout())
    }
  }
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)

export default NavbarContainer
