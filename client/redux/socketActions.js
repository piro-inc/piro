import { readCookie } from '../utils'
import { socket } from '../index'

export const changeTeamScore = (team, newScore, gameId) => {
  return () => {
    socket.emit('changeTeamScore', {
      newScore,
      team,
      gameId,
      id: readCookie('user.id')
    })
  }
}

export const stopGame = (gameId) => {
  return () => {
    socket.emit('stopGame', {
      gameId,
      id: readCookie('user.id')
    })
  }
}

export const addComment = (comment, gameId) => {
  return () => {
    socket.emit('addComment', {
      comment,
      gameId,
      id: readCookie('user.id')
    })
  }
}
