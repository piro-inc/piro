import test from 'tape'
import configureStore from '../redux/store'
import * as gamesActions from '../redux/gamesActions'

test('games reducer', (t) => {
  const store = configureStore()
  const game = { team_a: 'hello' }
  store.dispatch({
    game,
    type: gamesActions.GET_GAME_SUCCESS
  })
  t.deepEqual(store.getState().games.get('currentGame').toJS(), game)
  const games = [
    { team_a: 'hello', sport: 'soccer' },
    { team_a: 'hello', sport: 'hockey' }
  ]
  store.dispatch({
    games,
    type: gamesActions.GET_GAMES_SUCCESS
  })
  t.deepEqual(store.getState().games.get('games').toJS(), games)
  t.end()
})
