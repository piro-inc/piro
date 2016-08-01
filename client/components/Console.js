import React from 'react'
import { connect } from 'react-redux'
import { changeTeamScore, stopGame, addComment } from '../redux/socketActions'
import { fetchGameInfo } from '../redux/gamesActions'
import { authenticateGame } from '../redux/sessionActions'
import { readCookie } from '../utils'
import Navbar from './Navbar'

class Console extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // state goes here
      comment: ''
    }
  }

  componentDidMount () {
    this.props.fetchGameInfo(this.props.params.id)
    this.props.authenticateGame(readCookie('user.id'), this.props.params.id)
  }

  incrementScore = (team) => {
    let newScore
    if (team === 'one') {
      newScore = this.props.game.game && this.props.game.game.team_a_score + 1
    } else if (team === 'two') {
      newScore = this.props.game.game && this.props.game.game.team_b_score + 1
    }

    return () => {
      this.props.changeTeamScore(team, newScore, this.props.params.id)
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
      this.props.changeTeamScore(team, newScore, this.props.params.id)
    }
  }

  addComment = () => {
    this.props.addComment(this.state.comment, this.props.params.id)
    this.setState({ comment: '' })
  }

  stopGame = () => {
    this.props.stopGame(this.props.params.id)
  }

  changeComment = (e) => {
    this.setState({ comment: e.target.value })
  }

  render () {
    const currentGame = this.props.game
    let orderedComments
    if (currentGame.comments) {
      orderedComments = currentGame.comments.slice().reverse()
    }
    return (
      <div id='console-wrapper'>
      {this.props.session.error &&
        <div>
          {this.props.session.error}
          <a href='/'> Home </a>
        </div>
      }

      {this.props.session.user.id &&
        <div>
          <div id='navbar-wrapper'>
            <Navbar />
          </div>

          <div id='content-wrapper'>

            <h4 className='console-title'>Game {} [Sport]</h4>

            <div className='console-timer-wrapper'>

              <div className='pause'>
                <button className='button' id='pause'>PAUSE</button>
              </div>

              <div className='start'>
                <button className='button' id='start'>START</button>
              </div>

              <div className='stop'>
                <button className='button' id='stop' onClick={this.stopGame}>STOP</button>
              </div>

            </div>

            <div className='console-scores-wrapper'>

              <div className='console-teamone'>

                <img src='http://placehold.it/50X50' className='team-logo' />
                <h3 className='team-one-name'>Team one</h3>
                <h1 className='console-score' id='team-one-score'>{this.props.game.game && this.props.game.game.team_a_score}</h1>

                <div className='scoring-buttons'>
                  <button className='button decrement' id='decrement-team-one' onClick={this.decrementScore('one')}>-</button>
                  <button className='button increment' id='increment-team-one' onClick={this.incrementScore('one')}>+</button>

                </div>

              </div>

              <div className='console-teamtwo'>

                <img src='http://placehold.it/50X50' className='team-logo' />
                <h3 className='team-two-name'>Team two</h3>
                <h1 className='console-score' id='team-two-score'>{this.props.game.game && this.props.game.game.team_b_score}</h1>

                <div className='scoring-buttons'>
                  <button className='button decrement' id='decrement-team-two' onClick={this.decrementScore('two')}>-</button>
                  <button className='button increment' id='increment-team-two' onClick={this.incrementScore('two')}>+</button>
                </div>

              </div>

            </div>

            <div className='add-comment-wrapper'>
              <h3 className='console-headers'>ADD COMMENT</h3>
              <input onChange={this.changeComment} value={this.state.comment} type='text' className='console-comment' id='add-comment' />
              <button className='submit button' id='submit-comment' onClick={this.addComment}>+ SUBMIT</button>
            </div>
            {orderedComments && orderedComments.map((obj, key) => {
              return (
                <p key={key} className='comment'>
                  {obj.comment}
                </p>
              )
            })}
          </div>
        </div>
      }
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
    authenticateGame: (id, gameId) => {
      dispatch(authenticateGame(id, gameId))
    },
    changeTeamScore: (team, newScore, gameId) => {
      dispatch(changeTeamScore(team, newScore, gameId))
    },
    stopGame: (gameId) => {
      dispatch(stopGame(gameId))
    },
    addComment: (comment, gameId) => {
      dispatch(addComment(comment, gameId))
    },
    fetchGameInfo: (id) => {
      dispatch(fetchGameInfo(id))
    }
  }
}

const ConsoleContainer = connect(mapStateToProps, mapDispatchToProps)(Console)

export default ConsoleContainer
