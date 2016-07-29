import React from 'react'

/*THIS IS A VERY VERY DUMB COMPONENT*/

class Options extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // state goes here
    }
  }

  render () {
    return (
      <div id='options-wrapper'>
        <a href='#'></a> {/* Link to the Game view/summary page - button? form?*/}
        <a href='#'></a> {/* Link to the Login/Register page -button? form?*/}
      </div>
    )
  }
}

export default Options
