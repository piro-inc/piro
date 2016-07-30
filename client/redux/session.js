import { fromJS } from 'immutable'
import * as sessionActions from './sessionActions'

const initialState = fromJS({
  user: {},
  error: 1
})

/* reducer */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case sessionActions.GET_USER_SUCCESS:
      return state.set('user', fromJS(action.user))
    default:
      return state
  }
}

export default reducer
