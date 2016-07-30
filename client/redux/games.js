import { fromJS } from 'immutable'
import * as gamesActions from './gamesActions'

const initialState = fromJS({
  games: [],
  currentGame: {}
})

/* reducer */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case gamesActions.GET_GAME_SUCCESS:
      return state.set('currentGame', fromJS(action.game))
    case gamesActions.GET_GAMES_SUCCESS:
      return state.set('games', fromJS(action.games))
    default:
      return state
  }
}

export default reducer
