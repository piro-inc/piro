import { fromJS } from 'immutable'
import * as gamesActions from './gamesActions'
// import * as socketActions from './socketActions'

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
    case gamesActions.CREATE_GAME_SUCCESS:
      return state.set('games', state.get('games').push(fromJS(action.game)))
    default:
      return state
  }
}

export default reducer
