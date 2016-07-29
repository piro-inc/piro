import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './components/App'
import { Provider } from 'react-redux'
import configureStore from './redux/store'
import routes from './components/routes'

const store = configureStore()

const reactRoot = document.querySelector('main')

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  reactRoot
)
