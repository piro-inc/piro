import React from 'react'
import { connect } from 'react-redux'
import { createGame } from '../redux/gamesActions'

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
          <input type='datetime' placeholder='Date and time' name='Date and time' id='game-date' />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = f => f

const mapDispatchToProps = (dispatch) => {
  return {
    create: (
      userId,
      date,
      location,
      teamA,
      teamB,
      isComplete,
      teamAScore,
      teamBScore,
      sportName
    ) => {
      dispatch(createGame(
        userId,
        date,
        location,
        teamA,
        teamB,
        isComplete,
        teamAScore,
        teamBScore,
        sportName
      ))
    }
  }
}

const CreateContainer = connect(mapStateToProps, mapDispatchToProps)(Create)

export default CreateContainer
