const initialState = {
  data: []
}

export const ADD_DATA = 'ADD_DATA'
export const addData = (data) => {
  return {
    data,
    type: ADD_DATA
  }
}

/* reducer */
const reducer = (state = initialState, action) => {
  let newData = state.data
  switch (action.type) {
    case ADD_DATA:
      newData.push(action.data)
      return {
        ...state,
        data: newData
      }
    default:
      return state
  }
}

export default reducer
