import React from 'react'
import { connect } from 'react-redux'
import { fetchGameInfo } from '../redux/gamesActions'

import Navbar from './Navbar'

const Game = (props) => {
  return (
    <div id='game-wrapper'>

      <div id='navbar-wrapper'>
        <Navbar />
      </div>

      <div id='game-header'>
        <h2 className='sport-region'>Sport region</h2>
        <h3 className='division'>Division</h3>
        <h3 className='game-date'>Date</h3>
        <h3 className='start-time'>Time</h3>
        <h3 className='match-location'>Match Location</h3>
      </div>

      <div className='score-wrapper'>

        <a href='#'>
          <img src='#' className='team-logo' />
        </a>
        <a href='#'>
          <img src='#' className='team-logo' />
        </a>
        <h2 className='team-one'>Team one</h2>
        <h2 className='team-two'>Team two</h2>

        <h1 className='game-score'>Team one score</h1>
        <h1 className='game-score'>Team two score</h1>

      </div>

      <div className='comments'>
        <p className='game-comment'>Latest comment</p>
        <p className='comment-history'>Comment history</p>
        <p className='comment-history'>Comment history</p>
        <p className='comment-history'>Comment history</p>
        <p className='comment-history'>Comment history</p>
        <p className='comment-history'>Comment history</p>
        <p className='comment-history'>Comment history</p>
        <p className='comment-history'>Comment history</p>
        <p className='comment-history'>Comment history</p>
        <p className='comment-history'>Comment history</p>
        <p className='comment-history'>Comment history</p>
        <p className='comment-history'>Comment history</p>
      q</div>
    </div>
  )
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
