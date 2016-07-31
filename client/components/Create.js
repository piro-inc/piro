import React from 'react'
import { connect } from 'react-redux'
import { createGame } from '../redux/gamesActions'
import Navbar from './Navbar'
import { DropdownList, DateTimePicker } from 'react-widgets'
import 'react-widgets/lib/scss/react-widgets.scss'
import Moment from 'moment'
import momentLocalizer from 'react-widgets/lib/localizers/moment'

momentLocalizer(Moment)

const sports = [
  'rugby',
  'netball',
  'football'
]

class Create extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // state goes here
      sport: sports[0],
      date: new Date()
    }
  }

  createGame = () => {
    // this.props.createGame
  }

  changeSport = (sport) => {
    this.setState({ sport })
  }

  changeDate = (date) => {
    this.setState({ date })
  }

  render () {
    return (
      <div>
        <Navbar />
        <div id='create-form'>
          <DropdownList
            data={sports}
            value={this.state.sport}
            onChange={this.changeSport} />
          <input type='text' placeholder='TEAM 1' id='team-one' className='team-name' />
          <input type='text' placeholder='TEAM 2' id='team-two' className='team-name' />
          <input type='text' placeholder='LOCATION' id='game-location' className='location' />
          <DateTimePicker
            defaultValue={new Date()}
            onChange={this.changeDate} />
          <button onClick={this.createGame}>CREATE</button>
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
