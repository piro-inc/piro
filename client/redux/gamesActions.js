export const GET_GAME_SUCCESS = 'GET_GAME_SUCCESS'
export const GAMES_ERROR = 'GAMES_ERROR'

const fetch = fetch || (f => f)

export const fetchGameInfo = (id) => {
  const options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin'
  }

  return dispatch => {
    fetch(`/api/games/${id}`, options)
      .then(res => {
        return res.json()
      })
      .then(game => {
        console.log(game)
        if (game) {
          return dispatch({
            game,
            type: GET_GAME_SUCCESS
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

export const GET_GAMES_SUCCESS = 'GET_GAMES_SUCCESS'

export const fetchGamesInfo = (id) => {
  const options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin'
  }

  return dispatch => {
    fetch('/api/games', options)
      .then(res => {
        return res.json()
      })
      .then(games => {
        console.log(games)
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
