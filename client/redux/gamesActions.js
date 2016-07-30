export const GET_GAME_SUCCESS = 'GET_GAME_SUCCESS'
export const GAMES_ERROR = 'GAMES_ERROR'

export const fetchGameInfo = (id) => {
  const options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin'
  }

  return dispatch => {
    fetch(`/games/${id}`, options)
      .then(res => {
        return res.json()
      })
      .then(game => {
        console.log(game)
        if (user.id) {
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
          type: GAME_ERROR
        })
      })
  }
}
