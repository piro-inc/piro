import React from 'react'
import { connect } from 'react-redux'
import { changeTeamScore, stopGame, addComment } from '../redux/socketActions'
import { fetchGameInfo } from '../redux/gamesActions'
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
  }

  stopGame = () => {
    this.props.stopGame(this.props.params.id)
  }

  changeComment = (e) => {
    this.setState({ comment: e.target.value })
  }

  render () {
    return (
      <div id='console-wrapper'>

        <div id='navbar-wrapper'>
          <Navbar />
        </div>

        <div id='content-wrapper'>

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
              <button className='button' id='stop' onClick={this.stopGame}>STOP</button>
            </div>

          </div>

          <h3 className='console-headers'>SCORE TEAMS</h3>

          <div className='console-scores-wrapper'>

            <div className='console-teamone'>
              <img src='#' className='team-logo' />
              <h1 className='console-score' id='team-one-score'>{this.props.game.game && this.props.game.game.team_a_score}</h1>

              <div className='scoring-buttons'>
                <button className='button increment' id='increment-team-one' onClick={this.incrementScore('one')}>+</button>
                <button className='button decrement' id='decrement-team-two' onClick={this.decrementScore('one')}>-</button>
              </div>

            </div>

            <div className='console-teamtwo'>

              <img src='#' className='team-logo' />
              <h1 className='console-score'>{this.props.game.game && this.props.game.game.team_b_score}</h1>

              <div className='scoring-buttons'>
                <button className='button increment' id='increment-team-two' onClick={this.incrementScore('two')}>+</button>
                <button className='button decrement' id='decrement-team-two' onClick={this.decrementScore('two')}>-</button>
              </div>

            </div>

          </div>

          <h3 className='console-headers'>ADD COMMENT</h3>

          <div className='add-comment-wrapper'>
            <input onChange={this.changeComment} type='text' className='console-comment' id='add-comment' />
            <button className='submit button' id='submit-comment' onClick={this.addComment}>+ Submit</button>
          </div>

          <h3 className='console-headers'>EDIT COMMENT</h3>
          
          <div className='edit-comment-wrapper'>
            <input type='text' className='console-comment' id='recent-comment' />
            <button className='edit button' id='edit-comment'>Edit</button>
            <button type='submit' className='submit button' id='submit-edit'>Change</button>
          </div>
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
