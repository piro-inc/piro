import { browserHistory } from 'react-router'

export const UPDATE_CURRENT_GAME = 'UPDATE_CURRENT_GAME'
export const GAMES_ERROR = 'GAMES_ERROR'
export const CLEAR_GAME = 'CLEAR_GAME'
export const GET_GAMES_SUCCESS = 'GET_GAMES_SUCCESS'
export const CREATE_GAME_SUCCESS = 'CREATE_GAME_SUCCESS'
export const UPDATE_GAME_SUCCESS = 'UPDATE_GAME_SUCCESS'
export const FILTER_MY_GAMES = 'FILTER_MY_GAMES'
export const FILTER_FOLLOW_GAMES = 'FILTER_FOLLOW_GAMES'
export const FOLLOW_GAME = 'FOLLOW_GAME'
export const UNFOLLOW_GAME = 'UNFOLLOW_GAME'

export const fetchGameInfo = (id) => {
  const options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin'
  }

  return dispatch => {
    fetch(`/api/games/${id}`, options) // eslint-disable-line
      .then(res => {
        return res.json()
      })
      .then(game => {
        if (game) {
          return dispatch({
            game,
            type: UPDATE_CURRENT_GAME
          })
        } else {
          throw new Error('Game not fetched correctly.')
        }
      })
      .catch(err => {
        console.log(err)
        return dispatch({
          err,
          type: GAMES_ERROR
        })
      })
  }
}

export const fetchGamesInfo = () => {
  const options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin'
  }

  return dispatch => {
    fetch('/api/games', options) // eslint-disable-line
      .then(res => {
        return res.json()
      })
      .then(games => {
        if (games) {
          return dispatch({
            games,
            type: GET_GAMES_SUCCESS
          })
        } else {
          throw new Error('Games not fetched correctly.')
        }
      })
      .catch(err => {
        console.log(err)
        return dispatch({
          err,
          type: GAMES_ERROR
        })
      })
  }
}

export const createGame = (userId, date, location, teamA, teamB, isComplete, teamAScore, teamBScore, sportName) => {
  const options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      date_time: date,
      location,
      team_a_name: teamA,
      team_b_name: teamB,
      is_complete: isComplete,
      team_a_score: teamAScore,
      team_b_score: teamBScore,
      sport_name: sportName
    }),
    credentials: 'same-origin'
  }

  return dispatch => {
    fetch(`/api/games/${userId}`, options) // eslint-disable-line
      .then(res => {
        return res.json()
      })
      .then(game => {
        if (game.id) {
          return fetch(`/api/games/${game.id}`)  // eslint-disable-line
        } else {
          throw new Error('Game not created correctly.')
        }
      })
      .then(res => {
        return res.json()
      })
      .then(obj => {
        if (obj.game.id) {
          browserHistory.push(`/console/${obj.game.id}`)
          return dispatch({
            game: obj.game,
            type: CREATE_GAME_SUCCESS
          })
        } else {
          throw new Error('Game not created correctly.')
        }
      })
      .catch(err => {
        console.log(err)
        return dispatch({
          err,
          type: GAMES_ERROR
        })
      })
  }
}

export const updateGame = (id) => {
  return dispatch => {
    dispatch(updateGameInfo(id))
  }
}

export const updateGameInfo = (id) => {
  const options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin'
  }

  return (dispatch, getState) => {
    fetch(`/api/games/${id}`, options) // eslint-disable-line
      .then(res => {
        return res.json()
      })
      .then(obj => {
        if (obj) {
          const current = getState().games.toJS().currentGame.game
          if (current && (current.id === id)) {
            dispatch({
              game: obj,
              type: UPDATE_CURRENT_GAME
            })
          }

          return dispatch({
            game: obj.game,
            type: UPDATE_GAME_SUCCESS
          })
        } else {
          throw new Error('Game not fetched correctly.')
        }
      })
      .catch(err => {
        console.log(err)
        return dispatch({
          err,
          type: GAMES_ERROR
        })
      })
  }
}

export const clearGame = () => {
  return {
    type: CLEAR_GAME
  }
}

export const filterMyGames = (userId) => {
  return {
    userId,
    type: FILTER_MY_GAMES
  }
}

export const filterFollowGames = () => {
  return {
    type: FILTER_FOLLOW_GAMES
  }
}
