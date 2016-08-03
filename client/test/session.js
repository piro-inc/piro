import test from 'tape'
import configureStore from '../redux/store'
import * as sessionActions from '../redux/sessionActions'

test('Session reducer', (t) => {
  const store = configureStore()

  const err = 'yo'
  store.dispatch({
    err,
    type: sessionActions.SESSION_ERROR
  })
  t.deepEqual(store.getState().session.get('error'), err, 'SESSION_ERROR updates store correctly')

  store.dispatch({
    type: sessionActions.CLEAR_ERROR
  })
  t.deepEqual(store.getState().session.get('error'), null, 'CLEAR_ERROR updates store correctly')

  const user = { id: 1, name: 'dank' }
  store.dispatch({
    user,
    type: sessionActions.GET_USER_SUCCESS
  })
  t.deepEqual(store.getState().session.get('user').toJS(), user, 'GET_USER_SUCCESS updates store correctly')
  t.end()
})

test('GET_SERVER_TIME', (t) => {
  const store = configureStore()
  const time = new Date(Date.now())
  store.dispatch({
    time,
    type: sessionActions.GET_SERVER_TIME
  })
  t.deepEqual(store.getState().session.get('serverTime'), time, 'GET_SERVER_TIME updates store correctly')
  t.end()
})
