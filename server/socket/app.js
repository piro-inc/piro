const updateGame = require('../database/games_utils').updateGame

function socketServer (io) {
  io.on('connection', (socket) => {
    socket.emit('message', { data: 'yo', type: 'one' })

    socket.on('message', (data) => {
      console.log(data)
    })

    socket.on('increment', (data) => {
      // { team: 'one', gameId: '1', id: null }
      console.log(data)
      const searchParams = { id: data.gameId }
      const updateInfo = {}
      if (data.team === 'one') {
        updateInfo.team_a_score = data.newScore
      } else if (data.team === 'two') {
        updateInfo.team_b_score = data.newScore
      }
      updateGame(searchParams, updateInfo)
        .then(id => {
          socket.emit('consoleUpdate', { id })
          io.emit('globalUpdate', { id })
        })
        .catch(err => {
          console.log(err)
        })
    })

    socket.on('decrement', (data) => {
      console.log(data)
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
