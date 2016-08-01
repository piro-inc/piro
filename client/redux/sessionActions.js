import { browserHistory } from 'react-router'

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
    fetch('/api/login', options) // eslint-disable-line
      .then(res => {
        return res.json()
      })
      .then(user => {
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
          err: err.message,
          type: SESSION_ERROR
        })
      })
  }
}

export const logout = () => {
  return dispatch => {
    fetch('/api/logout', { credentials: 'same-origin' })
      .then(() => {
        browserHistory.push('/')
        return dispatch({
          user: {},
          type: GET_USER_SUCCESS
        })
      })
      .catch(err => {
        console.log(err)
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
        if (res.id) {
          return dispatch(login(username, password))
        } else if (res.code === '23505') {
          throw new Error('Username already exists, sorry.')
        }
      })
      .catch(err => {
        console.log(err)
        return dispatch({
          err: err.message,
          type: SESSION_ERROR
        })
      })
  }
}

export const authenticateUser = (id) => {
  const options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin'
  }

  return dispatch => {
    fetch(`/api/users/${id}`, options) // eslint-disable-line
      .then(res => {
        if (res.status === 403) {
          throw new Error('Cannot authenticate user.')
        }
        return res.json()
      })
      .then(user => {
        if (user.id) {
          return dispatch({
            user,
            type: GET_USER_SUCCESS
          })
        } else {
          throw new Error('Could not get user.')
        }
      })
      .catch(err => {
        console.log(err)
        return dispatch({
          err: err.message,
          type: SESSION_ERROR
        })
      })
  }
}

export const authenticateGame = (id, gameId) => {
  const options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin'
  }

  return dispatch => {
    fetch(`/api/games/${gameId}`, options) // eslint-disable-line
      .then(res => {
        return res.json()
      })
      .then(obj => {
        if (obj && obj.game.user_id) {
          if (obj.game.user_id === parseInt(id)) {
            return dispatch(authenticateUser(id))
          } else {
            throw new Error('Game does not belong to the user.')
          }
        }
      })
      .catch(err => {
        console.log(err)
        return dispatch({
          err: err.message,
          type: SESSION_ERROR
        })
      })
  }
}

export const CLEAR_ERROR = 'CLEAR_ERROR'
export const clearError = () => {
  return {
    type: CLEAR_ERROR
  }
}
