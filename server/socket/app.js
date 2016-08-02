const updateGame = require('../database/games_utils').updateGame
const addComment = require('../database/comments_utils').addComment

// elapsed: '00:00:00' with every socket
function socketServer (io) {
  io.on('connection', (socket) => {
    socket.on('changeTeamScore', (data) => {
      // { team: 'one', gameId: '1', id: null }
      const searchParams = { id: data.gameId }
      const updateInfo = { time_elapsed: data.elapsed }
      if (data.team === 'one') {
        updateInfo.team_a_score = data.newScore
      } else if (data.team === 'two') {
        updateInfo.team_b_score = data.newScore
      }
      updateGame(searchParams, updateInfo)
        .then(arr => {
          io.emit('globalUpdate', { id: arr[0] })
        })
        .catch(err => {
          console.log(err)
        })
    })

    socket.on('startGame', (data) => {
      // { gameId: '1', id: null }
      const searchParams = { id: data.gameId }
      console.log(data)
      const updateInfo = { is_running: true, is_started: true, time_elapsed: 0 }
      updateGame(searchParams, updateInfo)
        .then(arr => {
          io.emit('globalUpdate', { id: arr[0] })
        })
        .catch(err => {
          console.log(err)
        })
    })

    socket.on('togglePause', (data) => {
      // { gameId: '1', id: null, is_running: false }
      const searchParams = { id: data.gameId }
      const updateInfo = { is_running: data.is_running, time_elapsed: data.elapsed }
      updateGame(searchParams, updateInfo)
        .then(arr => {
          io.emit('globalUpdate', { id: arr[0] })
        })
        .catch(err => {
          console.log(err)
        })
    })

    socket.on('stopGame', (data) => {
      // { gameId: '1', id: null }
      const searchParams = { id: data.gameId }
      const updateInfo = { is_complete: true, is_running: false, time_elapsed: data.elapsed }
      updateGame(searchParams, updateInfo)
        .then(arr => {
          io.emit('globalUpdate', { id: arr[0] })
        })
        .catch(err => {
          console.log(err)
        })
    })

    socket.on('addComment', (data) => {
      // { comment: 'dsfsasd', gameId: '1', id: '1' }
      const newData = {
        game_id: data.gameId,
        comment: data.comment
      }

      addComment(newData)
        .then(obj => {
          io.emit('globalUpdate', { id: parseInt(data.gameId) })
        })
        .catch(err => {
          console.log(err)
        })
    })
  })

  return io
}

module.exports = socketServer
