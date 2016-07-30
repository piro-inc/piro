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
  t.end()
})
