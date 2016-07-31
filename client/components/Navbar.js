import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class Navbar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // state goes here
    }
  }

  render () {
    const user = this.props.user
    console.log('user HERE', user)
    return (
      <div id='navbar'>
        <div id='logo-nav-wrapper'>
          <img id='logo-nav' src='/images/logo-nav.svg' />
        </div>

        {!user.username
          ? <Link to='/' className='nav-links'>
            <p className='nav-login-register'>login / register</p>
          </Link>
          : <div className='nav-links'>
            <p>{user.username}</p>
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

// const mapDispatchToProps = f => f

const NavbarContainer = connect(mapStateToProps)(Navbar)

export default NavbarContainer
