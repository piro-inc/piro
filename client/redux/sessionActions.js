export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const SESSION_ERROR = 'SESSION_ERROR'

export const login = (username, password) => {
  const options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({ username, password }),
    credentials: 'same-origin'
  }

  return dispatch => {
    fetch('/login', options)
      .then(res => {
        return res.json()
      })
      .then(user => {
        console.log(user)
        if(user.id) {
          browserHistory.push('/games')
          return dispatch(getUserSuccess(user))
        } else {
          throw new Error('User not logged in correctly.')
        }
      })
      .catch(err => {
        console.log(err);
        return dispatch(sessionError(err))
      })
  }
}

export const getUserSuccess = (user) => {
  return {
    user,
    type: GET_USER_SUCCESS
  }
}

export const sessionError = (err) => {
  return {
    err,
    type: SESSION_ERROR
  }
}
