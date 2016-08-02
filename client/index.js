import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import io from 'socket.io-client'
import 'whatwg-fetch'
import 'react-mdl/extra/material.js'

import configureStore from './redux/store'
import routes from './components/routes'
import * as gamesActions from './redux/gamesActions'
import './scss/main.scss'

export const socket = io()
const store = configureStore()

socket.on('globalUpdate', (data) => {
  store.dispatch(gamesActions.updateGameScore(data.id))
})

const reactRoot = document.getElementById('app')

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  reactRoot
)
