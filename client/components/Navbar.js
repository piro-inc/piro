import React from 'react'
import { connect } from 'react-redux'
import { Link, browserHistory } from 'react-router'
import { readCookie } from '../utils'
import { authenticateUser, logout } from '../redux/sessionActions'
import { filterMyGames, filterFollowGames } from '../redux/gamesActions'
import { IconButton, Menu, MenuItem } from 'react-mdl'
import SkyLight from 'react-skylight'


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

  handleMyGamesClick = () => {
    this.props.filterMyGames(this.props.user.id)
  }

  handleFollowingClick = () => {
    this.props.filterFollowGames()
  }

  logout = () => {
    this.props.logout()
  }

  render () {
    const user = this.props.user
    return (
      <div className='navbar-wrapper'>
        <div id='navbar'>
          <Link to='/games' id='logo-nav-wrapper'>
            <img id='logo-nav' src='/images/logo-nav.svg' />
          </Link>

          <div className='global-about'>
            <button className='about-icon' onClick={() => this.refs.simpleDialog.show()}>
              <i className='material-icons about'>&#xE8FD;</i>
            </button>
          </div>

          {!user.username
            ? <Link to='/' className='nav-links'>
              <p className='nav-login-register'>login</p>
              <p className='nav-login-register'>register</p>
            </Link>
            : <div className='nav-links'>

              <p className='nav-login-register'>{user.username}</p>

              <div className='menu-button'>
                <IconButton name='more_vert' id='demo-menu-lower-right' />
              </div>

              <div className='menu-dropdown'>
                <Menu target='demo-menu-lower-right' align='right'>
                  <MenuItem onClick={() => browserHistory.push('/')}>Home</MenuItem>
                  <MenuItem onClick={() => browserHistory.push('/games/new')}>Create Game</MenuItem>
                  <MenuItem onClick={this.handleMyGamesClick}>My Games</MenuItem>
                  <MenuItem onClick={this.handleFollowingClick}>Following</MenuItem>
                  <MenuItem onClick={this.logout}>Logout</MenuItem>
                </Menu>
              </div>
              <SkyLight hideOnOverlayClicked ref='simpleDialog' title='Welcome to PIRO'>
                Follow live games.....
              </SkyLight>
            </div>
          }
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
    filterMyGames: (userID) => {
      dispatch(filterMyGames(userID))
    },
    filterFollowGames: () => {
      dispatch(filterFollowGames())
    },
    logout: () => {
      dispatch(logout())
    }
  }
}

const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)

export default NavbarContainer
