import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './redux/store'
import routes from './components/routes'
import io from 'socket.io-client'
import * as gamesActions from './redux/gamesActions'
import { GET_SERVER_TIME } from './redux/sessionActions'
import './scss/main.scss'
import 'whatwg-fetch'
import 'react-mdl/extra/material.js'

export const socket = io()
const store = configureStore()

socket.on('globalUpdate', data => {
  store.dispatch(gamesActions.updateGame(data.id))
})

socket.on('serverTime', data => {
  store.dispatch({
    time: data.time,
    type: GET_SERVER_TIME
  })
})

const reactRoot = document.getElementById('app')

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  reactRoot
)
