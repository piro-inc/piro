import test from 'tape'
import configureStore from '../redux/store'
import * as gamesActions from '../redux/gamesActions'

test('Games reducer', (t) => {
  const store = configureStore()
  const game = { team_a: 'hello' }
  store.dispatch({
    game,
    type: gamesActions.SET_CURRENT_GAME
  })

  t.deepEqual(store.getState().games.get('currentGame').toJS(), game, 'SET_CURRENT_GAME updates store correctly')
  const games = [
    { team_a: 'hello', sport: 'soccer' },
    { team_a: 'hello', sport: 'hockey' }
  ]
//start a new test here.
  store.dispatch({
    games,
    type: gamesActions.GET_GAMES_SUCCESS
  })
  t.deepEqual(store.getState().games.get('games').toJS(), games, 'GET_GAMES_SUCCESS updates store correctly')

  store.dispatch({
    game: games[0],
    type: gamesActions.CREATE_GAME_SUCCESS
  })
  const newGames = [
    { team_a: 'hello', sport: 'soccer' },
    { team_a: 'hello', sport: 'hockey' },
    { team_a: 'hello', sport: 'soccer' }
  ]

  t.deepEqual(store.getState().games.get('games').toJS(), newGames, 'CREATE_GAME_SUCCESS updates store correctly')

  t.end()
})
