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
          <input type='text' placeholder='CHOOSE SPORT' id='sport' classname='sport' />
          <input type='text' placeholder='TEAM 1' id='team-one' classname='team-name' />
          <input type='text' placeholder='TEAM 2' id='team-two'classname='team-name' />
          <input type='text' placeholder='LOCATION' id='game-location'classname='location' />
          <input type='datetime' placeholder='DATE & START TIME' name='Date and time' id='game-date' classname='game-date' />
          <button type='submit'>CREATE</button>
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
