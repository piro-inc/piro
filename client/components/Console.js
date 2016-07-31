import React from 'react'
import { connect } from 'react-redux'
import { incrementTeamScore } from '../redux/socketActions'
import { fetchGameInfo } from '../redux/gamesActions'
import Navbar from './Navbar'

class Console extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // state goes here
    }
  }

  componentDidMount () {
    this.props.fetchGameInfo(this.props.params.id)
  }

  incrementScore = (team) => {
    return () => {
      this.props.incrementTeamScore(team)
    }
  }

  render () {
    return (
      <div id='console-wrapper'>

        <div id='navbar-wrapper'>
          <Navbar />
        </div>

        <h4 className='console-title'>Game {} [Sport]</h4>

        <h3 className='console-headers'>TIMER</h3>
        <div className='console-timer-wrapper'>
          <div className='pause'>
            <button className='button' id='pause'>PAUSE</button>
          </div>

          <div className='start'>
            <button className='button' id='start'>START</button>
          </div>

          <div className='stop'>
            <button className='button' id='stop'>STOP</button>
          </div>
        </div>

        <h3 className='console-headers'>SCORE TEAMS</h3>
        <div className='console-scores-wrapper'>

          <div className='console-teamone'>
            <img src='#' className='team-logo' />
            <h1 className='console-score' id='team-one-score'>0</h1>

            <div className='scoring-buttons'>
              <button
                className='button increment'
                id='increment-team-one'
                onClick={this.incrementScore('one')}>
              +
              </button>
              <button className='button decrement' id='decrement-team-two'>-</button>
            </div>

          </div>

          <div className='console-teamtwo'>

            <img src='#' className='team-logo' />
            <h1 className='console-score'>0</h1>

            <div className='scoring-buttons'>
              <button className='button increment' id='increment-team-two'>+</button>
              <button className='button decrement' id='decrement-team-two'>-</button>
            </div>

          </div>
        </div>

        <h3 className='console-headers'>ADD COMMENT</h3>
        <div className='add-comment-wrapper'>
          <input type='text' className='console-comment' id='add-comment' />
          <button type='submit' className='submit button' id='submit-comment'>+ Submit</button>
        </div>

        <h3 className='console-headers'>EDIT COMMENT</h3>
        <div className='edit-comment-wrapper'>
          <input type='text' className='console-comment' id='recent-comment' />
          <button className='edit button' id='edit-comment'>Edit</button>
          <button type='submit' className='submit button' id='submit-edit'>Change</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    game: state.games.get('currentGame').toJS()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementTeamScore: (team) => {
      dispatch(incrementTeamScore(team))
    },
    fetchGameInfo: (id) => {
      dispatch(fetchGameInfo(id))
    }
  }
}

const ConsoleContainer = connect(mapStateToProps, mapDispatchToProps)(Console)

export default ConsoleContainer
