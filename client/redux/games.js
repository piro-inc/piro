import { fromJS, toJS } from 'immutable'
import * as gamesActions from './gamesActions'
// import * as socketActions from './socketActions'

const initialState = fromJS({
  active: [],
  games: [],
  currentGame: {}
})

/* reducer */
const reducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case gamesActions.GET_GAME_SUCCESS:
      return state.set('currentGame', fromJS(action.game))
    case gamesActions.GET_GAMES_SUCCESS:
      const newState = state.set('games', fromJS(action.games))
      return newState.set('active', fromJS(action.games))
    case gamesActions.FILTER_GAMES:
      console.log("Reducer Action User ID", action.userID)
      const games = toJS(state.get('games'))
      const filtered = games.filter(game => game.userID === action.userID)
      return state.set('active', filtered)
    case gamesActions.CREATE_GAME_SUCCESS:
      return state.set('games', state.get('games').push(fromJS(action.game)))
    default:
      return state
  }
}

export default reducer
