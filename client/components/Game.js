import React from 'react'
import { connect } from 'react-redux'
import { fetchGameInfo } from '../redux/gamesActions'

import Navbar from './Navbar'

class Game extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // state goes here
    }
  }

  componentDidMount () {
    this.props.fetchGameInfo(this.props.params.id)
  }

  render () {
    const currentGame = this.props.game
    let date
    let time
    if (currentGame.game) {
      const newDate = new Date(currentGame.game.date_time)
      date = newDate.toDateString()
      time = newDate.toTimeString()
      date = date.replace(/GMT/, '')
      time = time.replace(/GMT/, '')
    }
    let orderedComments
    if (currentGame.comments) {
      orderedComments = currentGame.comments.slice().reverse()
    }
    return (
      <div id='game-wrapper'>

        <div id='navbar-wrapper'>
          <Navbar />
        </div>

        <div id='game-header'>
          <h2 className='sport-name'>{currentGame.game && currentGame.game.sport_name}</h2>
          <h3 className='division'>Division</h3>  {/*No division in database yet*/}
          <h3 className='date-time'>{date} | {time}</h3>
          <h3 className='match-location'>{currentGame.game && currentGame.game.location}</h3>
        </div>

        <div className='game-team-names'>
          <h2 className='team-one'>{currentGame.game && currentGame.game.team_a_name}</h2>
          <h2 className='team-two'>{currentGame.game && currentGame.game.team_b_name}</h2>
        </div>

        <div className='game-score-wrapper'>

          <img src='http://placehold.it/60x60' className='team-logo' />

          <h1 className='game-score'>{currentGame.game && currentGame.game.team_a_score}</h1>

          <h1 className='period'>v</h1>

          <h1 className='game-score'>{currentGame.game && currentGame.game.team_b_score}</h1>

          <img src='http://placehold.it/60x60' className='team-logo' />

        </div>

        <div id="console-link">
          <button>Go to game console</button>
        </div>

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
    fetchGameInfo: (id) => {
      dispatch(fetchGameInfo(id))
    }
  }
}

const GameContainer = connect(mapStateToProps, mapDispatchToProps)(Game)

export default GameContainer
