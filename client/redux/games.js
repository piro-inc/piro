import { fromJS } from 'immutable'
import {GET_GAME_SUCCESS, GET_GAMES_SUCCESS, CREATE_GAME_SUCCESS } from './gamesActions'
// import * as socketActions from './socketActions'

const initialState = fromJS({
  games: [],
  currentGame: {}
})

/* reducer */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GAME_SUCCESS:
      return state.set('currentGame', fromJS(action.game))//can you remove the fromjs here?
    case GET_GAMES_SUCCESS:
      return state.set('games', fromJS(action.games))
    case GAME_SUCCESS:
      return state.set('games', state.get('games').push(fromJS(action.game)))
    default:
      return state
  }
}

export default reducer
