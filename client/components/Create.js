import React from 'react'
import Navbar from './Navbar'

class Create extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // state goes here
    }
  }

  render () {
    return (
      <div>
        <Navbar />
        <form id='create-form' action='#'>
        <h1>This the create form</h1>
          <input type='text' placeholder='Sport' id='sport' />
          <input type='text' placeholder='Team A' id='team-a' />
          <input type='text' placeholder='Team B' id='team-b' />
          <input type='text' placeholder='Location' id='location' />
          <input type='datetime' name='Date and time' id='game-date'/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default Create
