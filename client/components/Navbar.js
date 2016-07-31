import React from 'react'
import { connect } from 'react-redux'

class Navbar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // state goes here
    }
  }

  render () {
    return (
      <div id='navbar'>
        <div id='logo-nav-wrapper'>
          <img id='logo-nav' src='/images/logo-nav.svg' />
        </div>

        <div className='nav-links'>
          <a href='#' className='nav-login'>login</a>
          <p> | </p>
          <a href='#' className='nav-register'>register</a>
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

// const mapDispatchToProps = f => f

const NavbarContainer = connect(mapStateToProps)(Navbar)

export default NavbarContainer
