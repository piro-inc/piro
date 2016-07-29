import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './App'
import Home from './Home'
import Navbar from './Navbar'
import Preview from './Preview'


export default (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>
			<Route path="/games"/>
  			<Route component={Navbar} />
  			<Route component={Previews} />
      </Route>
		</Route>
	</Router>
)
