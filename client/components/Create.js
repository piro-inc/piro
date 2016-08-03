import React from 'react'
import { connect } from 'react-redux'
import { createGame } from '../redux/gamesActions'
import Navbar from './Navbar'
import { DropdownList, DateTimePicker } from 'react-widgets'
import 'react-widgets/lib/scss/react-widgets.scss'
import Moment from 'moment'
import momentLocalizer from 'react-widgets/lib/localizers/moment'
import { readCookie, errorExists } from '../utils'

momentLocalizer(Moment)

const sports = [
  'Rugby',
  'Netball',
  'Football',
  'Basketball',
  'Hockey',
  'Rugby league'
]

class Create extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // state goes here
      sport: sports[0],
      date: new Date(),
      teamOne: { value: '', error: '' },
      teamTwo: { value: '', error: '' },
      location: { value: '', error: '' }
    }
  }

  changeSport = (sport) => {
    this.setState({ sport })
  }

  changeDate = (date) => {
    this.setState({ date })
  }

  changeTeamOne = (e) => {
    const updateTeamOne = {
      value: e.target.value,
      error: ''
    }
    this.setState({ teamOne: updateTeamOne })
    if (e.target.value.length < 4 || e.target.value.length > 20) {
      updateTeamOne.error = 'Team One name must be between 4 and 20 characters.'
      this.setState({ username: updateTeamOne })
    }
  }

  changeTeamTwo = (e) => {
    const updateTeamTwo = {
      value: e.target.value,
      error: ''
    }
    this.setState({ teamTwo: updateTeamTwo })
    if (e.target.value.length < 4 || e.target.value.length > 20) {
      updateTeamTwo.error = 'Team Two name must be between 4 and 20 characters.'
      this.setState({ username: updateTeamTwo })
    }
  }

  changeLocation = (e) => {
    const updateLocation = {
      value: e.target.value,
      error: ''
    }
    this.setState({ location: updateLocation })
    if (e.target.value.length < 4 || e.target.value.length > 20) {
      updateLocation.error = 'Location must be between 4 and 20 characters.'
      this.setState({ username: updateLocation })
    }
  }

  createGame = () => {
    if (!errorExists(this.state)) {
      const userId = readCookie('user.id')
      this.props.createGame(
        userId,
        this.state.date,
        this.state.location.value,
        this.state.teamOne.value,
        this.state.teamTwo.value,
        false,
        0,
        0,
        this.state.sport
      )
    }
  }

  render () {
    return (
      <div id='create-wrapper'>
        <Navbar />
        <div id='create-form'>
          <h2>CREATE GAME</h2>
          <p className='create-description'>Create a new game below</p>
          <div className='create-form-fields'>
            {this.state.teamOne.error && <div>{this.state.teamOne.error}</div>}
            {this.state.teamTwo.error && <div>{this.state.teamTwo.error}</div>}
            {this.state.location.error && <div>{this.state.location.error}</div>}
          </div>
          <DropdownList
            data={sports}
            value={this.state.sport}
            onChange={this.changeSport}
            className='dropdown' />
          <div>
            <input type='text' onBlur={this.changeTeamOne} placeholder='TEAM 1' id='team-one' className='team-name' error={this.state.teamOne.error} />
            <input type='text' onBlur={this.changeTeamTwo} placeholder='TEAM 2' id='team-two' className='team-name' error={this.state.teamTwo.error} />
            <input type='text' onBlur={this.changeLocation} placeholder='LOCATION' id='game-location' className='location' error={this.state.location.error} />
          </div>
          <DateTimePicker
            defaultValue={new Date()}
            onChange={this.changeDate}
            className='datePicker' />
          <div className='create-game-button'>
            <div className='create-game'>
              <button onClick={this.createGame} className='create-button'>CREATE</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = f => f

const mapDispatchToProps = (dispatch) => {
  return {
    createGame: (
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
