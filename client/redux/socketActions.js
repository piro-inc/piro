import { readCookie } from '../utils'
import { socket } from '../index'

export const CHANGE_TEAM_SCORE = 'CHANGE_TEAM_SCORE'

export const changeTeamScore = (team, newScore, gameId) => {
  return () => {
    socket.emit('increment', {
      newScore,
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
