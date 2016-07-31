function socketServer (io) {
  io.on('connection', (socket) => {
    socket.emit('message', { data: 'yo', type: 'one' })

    socket.on('message', (data) => {
      console.log(data)
    })

    socket.on('increment', (data) => {
      console.log(data)
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
