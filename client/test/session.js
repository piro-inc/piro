import test from 'tape'
import configureStore from '../redux/store'
import * as sessionActions from '../redux/sessionActions'

test('Session reducer', (t) => {
  const store = configureStore()
  const err = new Error('yo')
  store.dispatch({
    err,
    type: sessionActions.SESSION_ERROR
  })

  t.deepEqual(store.getState().session.get('error'), err)
  t.end()
})
