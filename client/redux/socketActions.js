import { readCookie } from '../utils'
import { socket } from '../index'

export const changeTeamScore = (elapsed, team, newScore, gameId) => {
  return () => {
    socket.emit('changeTeamScore', {
      elapsed,
      newScore,
      team,
      gameId,
      id: readCookie('user.id')
    })
  }
}

export const startGame = (gameId) => {
  return () => {
    socket.emit('startGame', {
      gameId,
      id: readCookie('user.id')
    })
  }
}

export const togglePause = (elapsed, bool, gameId) => {
  return () => {
    socket.emit('togglePause', {
      elapsed,
      gameId,
      is_running: bool,
      id: readCookie('user.id')
    })
  }
}

export const stopGame = (elapsed, gameId) => {
  return () => {
    socket.emit('stopGame', {
      elapsed,
      gameId,
      id: readCookie('user.id')
    })
  }
}

export const addComment = (elapsed, comment, gameId) => {
  return () => {
    socket.emit('addComment', {
      elapsed,
      comment,
      gameId,
      id: readCookie('user.id')
    })
  }
}

export const followGame = (gameId) => {
  return () => {
    socket.emit('followGame', {
      gameId,
      id: readCookie('user.id')
    })
  }
}

export const unfollowGame = (gameId) => {
  return () => {
    socket.emit('unfollowGame', {
      gameId,
      id: readCookie('user.id')
    })
  }
}

export const getTime = () => {
  return () => {
    socket.emit('getTime', {})
  }
}
