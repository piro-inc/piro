import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './App'
import Home from './Home'
import Previews from './Previews'
import Game from './Game'
import Create from './Create'
import Console from './Console'
import NotFound from './NotFound'
import Egg from './Egg'

export default (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/games' component={Previews} />
      <Route path='/games/new' component={Create} />
      <Route path='/games/:id' component={Game} />
      <Route path='/console/:id' component={Console} />
      <Route path='Dank' component={Egg} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
)
