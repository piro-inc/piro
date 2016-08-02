const updateGame = require('../database/games_utils').updateGame
const addComment = require('../database/comments_utils').addComment
const authenticateSocket = require('../auth').authenticateSocket

function socketServer (io) {
  io.on('connection', (socket) => {
    socket.on('changeTeamScore', (data) => {
      // { team: 'one', gameId: '1', id: null }
      authenticateSocket(data.id, data.gameId, socket, err => {
        if (!err) {
          const searchParams = { id: data.gameId }
          const updateInfo = {}

          updateInfo[data.team] = data.newScore

          updateGame(searchParams, updateInfo)
            .then(arr => {
              io.emit('globalUpdate', { id: arr[0] })
            })
            .catch(err => {
              console.log(err)
            })
        } else {
          console.log(err)
        }
      })
    })

    socket.on('stopGame', (data) => {
      // { gameId: '1', id: null }
      const searchParams = { id: data.gameId }
      const updateInfo = { is_complete: true }
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
