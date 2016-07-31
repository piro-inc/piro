import { readCookie } from '../utils'
import { socket } from '../index'

export const INCREMENT_TEAM_SCORE = 'INCREMENT_TEAM_SCORE'

export const incrementTeamScore = (team, gameId) => {
  return () => {
    socket.emit('increment', {
      team,
      gameId,
      id: readCookie('user.id')
    })
  }
}

export const DECREMENT_TEAM_SCORE = 'DECREMENT_TEAM_SCORE'

export const decrementTeamScore = (team, gameId) => {
  return () => {
    socket.emit('decrement', {
      team,
      gameId,
      id: readCookie('user.id')
    })
  }
}

export const STOP_GAME = 'STOP_GAME'

export const stopGame = (gameId) => {
  return () => {
    socket.emit('stopGame', {
      gameId,
      id: readCookie('user.id')
    })
  }
}

export const ADD_COMMENT = 'ADD_COMMENT'

export const addComment = (comment, gameId) => {
  return () => {
    socket.emit('addComment', {
      comment,
      gameId,
      id: readCookie('user.id')
    })
  }
}
