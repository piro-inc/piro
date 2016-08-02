import { fromJS } from 'immutable'
import * as gamesActions from './gamesActions'
// import * as socketActions from './socketActions'

const initialState = fromJS({
  active: [],
  games: [],
  currentGame: {}
})

/* reducer */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case gamesActions.GET_GAME_SUCCESS:
      return state.set('currentGame', fromJS(action.game))
    case gamesActions.GET_GAMES_SUCCESS:
      const newState = state.set('games', fromJS(action.games))
      return newState.set('active', fromJS(action.games))
    case gamesActions.FILTER_MY_GAMES:
      const games = state.get('games').toJS()
      const filtered = games.filter(game => game.user_id === action.userID)
      return state.set('active', fromJS(filtered))
    // case gamesActions.FILTER_GAMES:
    //   const games = state.get('games').toJS()
    //   const filtered = games.filter(game => game.user_id === action.userID)
    //   return state.set('active', fromJS(filtered))
    case gamesActions.CREATE_GAME_SUCCESS:
      return state
        .set('currentGame', fromJS(action.game))
        .set('games', state.get('games').push(fromJS(action.game)))
    case gamesActions.CLEAR_GAME:
      return state.set('currentGame', fromJS({}))
    default:
      return state
  }
}

export default reducer
