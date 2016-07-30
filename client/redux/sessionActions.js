import { browserHistory } from 'react-router'

export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const SESSION_ERROR = 'SESSION_ERROR'

// const fetch = fetch || (f => f)

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
    fetch('/api/login', options) // eslint-disable-line
      .then(res => {
        console.log(res)
        return res.json()
      })
      .then(user => {
        console.log(user)
        if (user.id) {
          browserHistory.push('/games')
          return dispatch({
            user,
            type: GET_USER_SUCCESS
          })
        } else {
          throw new Error(user.error)
        }
      })
      .catch(err => {
        console.log(err)
        return dispatch({
          err,
          type: SESSION_ERROR
        })
      })
  }
}

export const register = (username, email, password) => {
  const options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({ username, email, password }),
    credentials: 'same-origin'
  }

  return dispatch => {
    fetch('/api/users/', options) // eslint-disable-line
      .then(res => {
        return res.json()
      })
      .then(res => {
        console.log(res)
        if (res.id) {
          return dispatch(login(username, password))
        } else {
          throw new Error('Not registered correctly.')
        }
      })
      .catch(err => {
        console.log(err)
        return dispatch({
          err,
          type: SESSION_ERROR
        })
      })
  }
}
