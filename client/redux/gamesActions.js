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

export const CREATE_GAME_SUCCESS = 'CREATE_GAME_SUCCESS'

export const createGame = (userId, date, location, teamA, teamB, isComplete, teamAScore, teamBScore, sportName) => {
  const options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      date,
      location,
      team_a: teamA,
      team_b: teamB,
      is_complete: isComplete,
      team_a_score: teamAScore,
      team_b_score: teamBScore,
      sport_name: sportName
    }),
    credentials: 'same-origin'
  }

  return dispatch => {
    fetch(`/api/games/${userId}`, options)
      .then(res => {
        return res.json()
      })
      .then(game => {
        if (game.id) {
          return fetch(`/api/games/${game.id}`)
        } else {
          throw new Error('Game not created correctly.')
        }
      })
      .then(res => {
        return res.json()
      })
      .then(game => {
        console.log(game)
        if (game.id) {
          return dispatch({
            game,
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

export const START_GAME = 'START_GAME'

export const startGame () => {
  return {
    type: START_GAME
  }
}

export const INCREMENT_TEAM_A_SCORE = 'INCREMENT_TEAM_A_SCORE'

export const incrementTeamAScore () => {
  return {
    type: INCREMENT_TEAM_A_SCORE
  }
}

export const INCREMENT_TEAM_B_SCORE = 'INCREMENT_TEAM_B_SCORE'

export const incrementTeamBScore () => {
  return {
    type: INCREMENT_TEAM_B_SCORE
  }
}

export const DECREMENT_TEAM_A_SCORE = 'DECREMENT_TEAM_A_SCORE'

export const decrementTeamAScore () => {
  return {
    type: DECREMENT_TEAM_A_SCORE
  }
}

export const DECREMENT_TEAM_B_SCORE = 'DECREMENT_TEAM_B_SCORE'

export const decrementTeamBScore () => {
  return {
    type: DECREMENT_TEAM_B_SCORE
  }
}

export const STOP_GAME = 'STOP_GAME'

export const stopGame () => {
  return {
    type: STOP_GAME
  }
}