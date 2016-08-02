import test from 'tape'
import configureStore from '../redux/store'
import * as gamesActions from '../redux/gamesActions'

test('Games reducer', (t) => {
  const store = configureStore()
  const game = { team_a: 'hello' }
  store.dispatch({
    game,
    type: gamesActions.UPDATE_CURRENT_GAME
  })

  t.deepEqual(store.getState().games.get('currentGame').toJS(), game, 'UPDATE_CURRENT_GAME updates store correctly')
  const games = [
    { team_a: 'hello', sport: 'soccer' },
    { team_a: 'hello', sport: 'hockey' }
  ]
  const expected = [
    { team_a: 'hello', sport: 'soccer', showing: true },
    { team_a: 'hello', sport: 'hockey', showing: true }
  ]

  store.dispatch({
    games,
    type: gamesActions.GET_GAMES_SUCCESS
  })
  t.deepEqual(store.getState().games.get('games').toJS(), expected, 'GET_GAMES_SUCCESS updates store correctly')

  store.dispatch({
    game: games[0],
    type: gamesActions.CREATE_GAME_SUCCESS
  })
  const newGames = [
    { team_a: 'hello', sport: 'soccer', showing: true },
    { team_a: 'hello', sport: 'hockey', showing: true },
    { team_a: 'hello', sport: 'soccer' }
  ]

  t.deepEqual(store.getState().games.get('games').toJS(), newGames, 'CREATE_GAME_SUCCESS updates store correctly')

  t.end()
})

test('UPDATE_GAME_SUCCESS', (t) => {
  const store = configureStore()
  const games = [
    { team_a: 'hello', sport: 'soccer', id: 1 },
    { team_a: 'hello', sport: 'hockey', id: 2 }
  ]
  store.dispatch({
    games,
    type: gamesActions.GET_GAMES_SUCCESS
  })

  const game = { team_a: 'yo', sport: 'new', id: 1 }

  store.dispatch({
    game,
    type: gamesActions.UPDATE_GAME_SUCCESS
  })

  t.deepEqual(store.getState().games.get('games').toJS()[0], game, 'UPDATE_GAME_SUCCESS updates store correctly')
  t.end()
})

test('FILTER_MY_GAMES', (t) => {
  const store = configureStore()
  const games = [
    { team_a: 'hello', sport: 'soccer', id: 1, user_id: 1 },
    { team_a: 'hello', sport: 'hockey', id: 2, user_id: 2 }
  ]
  const expected = { team_a: 'hello', sport: 'hockey', id: 2, user_id: 2, showing: false }
  store.dispatch({
    games,
    type: gamesActions.GET_GAMES_SUCCESS
  })
  store.dispatch({
    userId: 1,
    type: gamesActions.FILTER_MY_GAMES
  })
  t.deepEqual(store.getState().games.get('games').toJS()[1], expected, 'FILTER_MY_GAMES updates store correctly')
  t.end()
})

test('FILTER_FOLLOW_GAMES', (t) => {
  const store = configureStore()
  const games = [
    { team_a: 'hello', sport: 'soccer', following: true },
    { team_a: 'hello', sport: 'hockey', following: false }
  ]
  const expected = { team_a: 'hello', sport: 'hockey', following: false, showing: false }
  store.dispatch({
    games,
    type: gamesActions.GET_GAMES_SUCCESS
  })
  store.dispatch({
    type: gamesActions.FILTER_FOLLOW_GAMES
  })
  t.deepEqual(store.getState().games.get('games').toJS()[1], expected, 'FILTER_FOLLOW_GAMES updates store correctly')
  t.end()
})
