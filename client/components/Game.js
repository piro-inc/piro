import React from 'react'
import { connect } from 'react-redux'
import { toJS } from 'immutable'

import { fetchGameInfo } from '../redux/gameActions'

const Game = (props) => {
  return (
    <div>
      <p>wtf is going on here?</p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    game: state.get(game).toJS()
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
