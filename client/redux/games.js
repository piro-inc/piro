import { fromJS } from 'immutable'
import * as gamesActions from './gamesActions'
// import * as socketActions from './socketActions'

const initialState = fromJS({
  games: [],
  currentGame: {},
  filter: ''
})

/* reducer */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case gamesActions.UPDATE_CURRENT_GAME:
      return state.set('currentGame', fromJS(action.game))
    case gamesActions.UPDATE_GAME_SUCCESS:
      const newGames = state.get('games').toJS()
      const gameToUpdate = newGames.findIndex(game => game.id === action.game.id)
      const withShow = { ...action.game, showing: true }
      newGames[gameToUpdate] = withShow
      return state.set('games', fromJS(newGames))
    case gamesActions.GET_GAMES_SUCCESS:
      const mapToShowing = action.games.map(game => {
        return game.showing === false ? game : {
          ...game,
          showing: true
        }
      })
      const newState = state.set('games', fromJS(mapToShowing))
      return newState
    case gamesActions.FILTER_MY_GAMES:
      const games = state.get('games').toJS()
      const myGames = games.map(game => {
        return game.user_id === action.userId ? { ...game, showing: true } : { ...game, showing: false }
      })
      return state
        .set('games', fromJS(myGames))
        .set('filter', 'myGames')
    case gamesActions.FILTER_FOLLOW_GAMES:
      const followingGames = state.get('games').toJS()
      const myFollowing = followingGames.map(game => {
        return game.following ? { ...game, showing: true } : { ...game, showing: false }
      })
      return state
        .set('games', fromJS(myFollowing))
        .set('filter', 'following')
    case gamesActions.SHOW_ALL_GAMES:
      const gamesToShow = state.get('games').toJS()
      const showAll = gamesToShow.map(game => {
        return {
          ...game,
          showing: true
        }
      })
      const newAll = state
        .set('games', fromJS(showAll))
        .set('filter', 'all')
      return newAll
    case gamesActions.CREATE_GAME_SUCCESS:
      return state
        .set('currentGame', fromJS(action.game))
        .set('games', state.get('games').push(fromJS(action.game)))
    case gamesActions.CLEAR_GAME:
      return state.set('currentGame', fromJS({}))
    case gamesActions.FOLLOW_GAME:
      let followGames = state.get('games').toJS()
      followGames.find((game) => { return game.id === action.gameId }).following = true
      return state.set('games', fromJS(followGames))
    case gamesActions.UNFOLLOW_GAME:
      let unfollowGames = state.get('games').toJS()
      unfollowGames.find((game) => { return game.id === action.gameId }).following = false
      return state.set('games', fromJS(unfollowGames))
    default:
      return state
  }
}

export default reducer
