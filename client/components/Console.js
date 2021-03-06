import React from 'react'
import { connect } from 'react-redux'
import ReactTimeout from 'react-timeout'

import { changeTeamScore, startGame, stopGame, addComment, togglePause } from '../redux/socketActions'
import { clearGame, fetchGameInfo } from '../redux/gamesActions'
import { authenticateGame } from '../redux/sessionActions'
import { readCookie, errorExists } from '../utils'
import Navbar from './Navbar'

class Console extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // state goes here
      comment: { value: '', error: '' },
      timer: 0,
      syncTime: false
    }
  }

  componentWillMount () {
    this.props.clearGame()
  }

  componentDidMount () {
    this.props.fetchGameInfo(this.props.params.id)
    this.props.authenticateGame(readCookie('user.id'), this.props.params.id)
    this.props.setInterval(() => {
      if (this.props.game.game &&
        this.props.game.game.is_running &&
        this.props.game.game.is_started &&
        !this.props.game.game.is_complete) {
        this.setState({ timer: this.state.timer + 1 })
      }
    }, 1000)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.game.game && nextProps.game.game.is_started && !this.state.syncTime) {
      if (!nextProps.game.game.is_running) {
        this.setState({ syncTime: true, timer: nextProps.game.game.time_elapsed })
      } else {
        const startDate = new Date(nextProps.game.game.updated_at)
        const diff = Date.now() - startDate
        const secs = Math.floor(diff / 1000) + nextProps.game.game.time_elapsed
        this.setState({ syncTime: true, timer: secs })
      }
    }
  }

  incrementScore = (team) => {
    let newScore
    if (team === 'one') {
      newScore = this.props.game.game && this.props.game.game.team_a_score + 1
    } else if (team === 'two') {
      newScore = this.props.game.game && this.props.game.game.team_b_score + 1
    }

    return () => {
      this.props.changeTeamScore(this.state.timer, team, newScore, this.props.params.id)
    }
  }

  decrementScore = (team) => {
    let newScore
    if (team === 'one') {
      newScore = this.props.game.game && this.props.game.game.team_a_score - 1
    } else if (team === 'two') {
      newScore = this.props.game.game && this.props.game.game.team_b_score - 1
    }
    return () => {
      this.props.changeTeamScore(this.state.timer, team, newScore, this.props.params.id)
    }
  }

  addComment = (e) => {
    e.preventDefault()
    if (!errorExists(this.state)) {
      this.props.addComment(this.state.timer, this.state.comment.value, this.props.params.id)
      this.setState({ comment: { ...this.state.comment, value: '' } })
    }
  }

  startGame = () => {
    this.props.startGame(this.props.params.id)
    this.setState({ syncTime: true })
  }

  stopGame = () => {
    this.props.stopGame(this.state.timer, this.props.params.id)
  }

  togglePause = () => {
    if (this.props.game.game) {
      this.props.togglePause(this.state.timer, !this.props.game.game.is_running, this.props.params.id)
    }
  }

  changeComment = (e) => {
    const updateComment = {
      value: e.target.value,
      error: ''
    }
    this.setState({ comment: updateComment })
    if (e.target.value.length === 0) {
      updateComment.error = 'Please add a comment.'
      this.setState({ comment: updateComment })
    }
  }

  format = (time) => {
    let hours = Math.floor(time / 3600)
    let minutes = Math.floor((time - (hours * 3600)) / 60)
    let seconds = time - (hours * 3600) - (minutes * 60)

    if (hours < 10) { hours = '0' + hours }
    if (minutes < 10) { minutes = '0' + minutes }
    if (seconds < 10) { seconds = '0' + seconds }
    return hours + ':' + minutes + ':' + seconds
  }

  render () {
    const currentGame = this.props.game
    let orderedComments
    if (currentGame.comments) {
      orderedComments = currentGame.comments.slice().reverse()
    }
    const timerDisplay = this.state.timer > 0 ? this.format(this.state.timer.toString()) : '00:00:00'
    return (
      <div id='console-wrapper'>
        {this.props.session.error &&
          <div className='session-error'>
            {this.props.session.error} - Go <a href='/'>Home.</a>
          </div>
        }

        {this.props.session.user.id &&
          <div id='user-console-wrapper'>

            <div id='content-wrapper'>
              <div id='navbar-wrapper'>
                <Navbar />
              </div>
              <div className='console-title-header'>
                <h2 className='console-heading'>Scoring Console: <em>{this.props.game.game && this.props.game.game.sport_name}</em></h2>
              </div>

              {/* BUTTONS */}
              {this.props.game.game && !this.props.game.game.is_complete
               ? <div className='console-timer-wrapper'>
                 <div className='pause'>
                   <button className='button' id='pause' onClick={this.togglePause}>
                  {this.props.game.game && this.props.game.game.is_running ? 'PAUSE' : 'RESUME'}
                   </button>
                 </div>
                 <div className='start'>
                  {this.state.timer === 0
                  ? <button className='button' id='start' onClick={this.startGame}>START</button>
                  : <button className='button' id='start' onClick={this.startGame}>{timerDisplay}</button>
                  }
                 </div>
                 <div className='stop'>
                   <button className='button' id='stop' onClick={this.stopGame}>STOP</button>
                 </div>
               </div>
            : <h4 className='console-complete'>GAME IS COMPLETE. {timerDisplay}</h4>}

              <div className='console-scores-wrapper'>
                <div className='console-teamone'>
                  <img src='http://placehold.it/25x25' className='team-logo' />
                  <h3 className='team-one-name'>{this.props.game.game && this.props.game.game.team_a_name}</h3>
                  <div className='scoring-buttons'>
                    <h1 className='console-score' id='team-one-score'>{this.props.game.game && this.props.game.game.team_a_score}</h1>
                    <button className='button decrement' id='decrement-team-one' onClick={this.decrementScore('one')}>-</button>
                    <button className='button increment' id='increment-team-one' onClick={this.incrementScore('one')}>+</button>
                  </div>
                </div>

                <div className='console-teamtwo'>
                  <img src='http://placehold.it/25x25' className='team-logo' />
                  <h3 className='team-two-name'>{this.props.game.game && this.props.game.game.team_b_name}</h3>
                  <div className='scoring-buttons'>
                    <h1 className='console-score' id='team-two-score'>{this.props.game.game && this.props.game.game.team_b_score}</h1>
                    <button className='button decrement' id='decrement-team-two' onClick={this.decrementScore('two')}>-</button>
                    <button className='button increment' id='increment-team-two' onClick={this.incrementScore('two')}>+</button>
                  </div>
                </div>
              </div>

              <form className='add-comment-wrapper'>
                {this.state.comment.error && <div>{this.state.comment.error}</div>}
                <input onChange={this.changeComment} placeholder='post comments to the game here' value={this.state.comment.value} type='text' className='console-comment' id='add-comment' />
                <button className='submit button' id='submit-comment' onClick={this.addComment}>POST</button>
              </form>

              <div className='comment-history'>
                {orderedComments && orderedComments.map((obj, key) => {
                  return (
                    <p key={key} className='comment'>
                      {obj.comment}
                    </p>
                  )
                })}
              </div>
            </div>
          </div>
        }
        {this.props.game.game && !this.props.game.game.id && <div>No console found.</div>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    game: state.games.get('currentGame').toJS(),
    session: state.session.toJS()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearGame: () => {
      dispatch(clearGame())
    },
    authenticateGame: (id, gameId) => {
      dispatch(authenticateGame(id, gameId))
    },
    changeTeamScore: (elapsed, team, newScore, gameId) => {
      dispatch(changeTeamScore(elapsed, team, newScore, gameId))
    },
    startGame: (gameId) => {
      dispatch(startGame(gameId))
    },
    togglePause: (elapsed, bool, gameId) => {
      dispatch(togglePause(elapsed, bool, gameId))
    },
    stopGame: (elapsed, gameId) => {
      dispatch(stopGame(elapsed, gameId))
    },
    addComment: (elapsed, comment, gameId) => {
      dispatch(addComment(elapsed, comment, gameId))
    },
    fetchGameInfo: (id) => {
      dispatch(fetchGameInfo(id))
    }
  }
}

const ConsoleContainer = connect(mapStateToProps, mapDispatchToProps)(Console)

export default ReactTimeout(ConsoleContainer)
