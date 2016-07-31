const updateGame = require('../database/games_utils').updateGame
const authenticateSocket = require('../auth').authenticateSocket

function socketServer (io) {
  io.on('connection', (socket) => {
    socket.emit('message', { data: 'yo', type: 'one' })

    socket.on('message', (data) => {
      console.log(data)
    })

    socket.on('changeTeamScore', (data) => {
      // { team: 'one', gameId: '1', id: null }
      authenticateSocket(data.id, data.gameId, socket, err => {
        if (!err) {
          const searchParams = { id: data.gameId }
          const updateInfo = {}
          if (data.team === 'one') {
            updateInfo.team_a_score = data.newScore
          } else if (data.team === 'two') {
            updateInfo.team_b_score = data.newScore
          }
          updateGame(searchParams, updateInfo)
            .then(arr => {
              socket.emit('consoleUpdate', { id: arr[0] })
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
      console.log(data)
    })

    socket.on('addComment', (data) => {
      console.log(data)
    })
  })

  return io
}

module.exports = socketServer
