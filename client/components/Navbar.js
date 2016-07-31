import React from 'react'

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

export default Navbar
