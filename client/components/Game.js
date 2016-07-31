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
    return (
      <div id='game-wrapper'>

        <div id='navbar-wrapper'>
          <Navbar />
        </div>

        <div id='game-header'>
          <h2 className='sport-name'>{currentGame.game && currentGame.game.sport_name}</h2>
          {/* <h3 className='division'>Division</h3>  No division in database yet*/}
          <h3 className='date-time'>{currentGame.game && currentGame.game.date_time}</h3>
          <h3 className='match-location'>{currentGame.game && currentGame.game.location}</h3>
        </div>

        <div className='score-wrapper'>
          {/* <a href='#'>
            <img src='#' className='team-logo' />
          </a>
          <a href='#'>
            <img src='#' className='team-logo' />
          </a> No logos in database yet*/}
          <h2 className='team-one'>{currentGame.game && currentGame.game.team_a_name}</h2>
          <h2 className='team-two'>{currentGame.game && currentGame.game.team_b_name}</h2>

          <h1 className='game-score'>{currentGame.game && currentGame.game.team_a_score}</h1>
          <h1 className='game-score'>{currentGame.game && currentGame.game.team_b_score}</h1>

        </div>

        <div className='comments'>
        {currentGame.comments && currentGame.comments.map(obj => {
          return <div className='comment-history'>{obj.comment}</div>
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
