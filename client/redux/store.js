import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

const combined = combineReducers({
  reducer
})

export default function (initialState) {
  const createFinalStore = compose(
    // redux dev tools
    applyMiddleware(thunk),
    (typeof window !== 'undefined' && window.devToolsExtension)
    ? window.devToolsExtension()
    : f => f
  )(createStore)
  const store = createFinalStore(combined, initialState)
  return store
}
