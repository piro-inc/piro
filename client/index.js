import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import configureStore from './redux/store'

const store = configureStore();

const reactRoot = document.querySelector('main')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  reactRoot
)
