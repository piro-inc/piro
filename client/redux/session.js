import { fromJS } from 'immutable'
import * as sessionActions from './sessionActions'

const initialState = fromJS({
  user: {},
  error: null
})

/* reducer */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case sessionActions.GET_USER_SUCCESS:
      return state.set('user', fromJS(action.user))
    case sessionActions.SESSION_ERROR:
      return state.set('error', fromJS(action.err))
    default:
      return state
  }
}

export default reducer
