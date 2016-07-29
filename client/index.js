import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import io from 'socket.io-client'

const socket = io()

const reactRoot = document.getElementById('app')

socket.on('message', (data) => {
  switch (data.type) {
    case 'one':
      console.log(data)
      socket.emit('message', data)
      break
    default:
      console.warn('Invalid type: ', data.type)
  }

  ReactDOM.render(
    <App socket={socket} />,
    reactRoot
  )
})
