import React from 'react'
import { connect } from 'react-redux'
import { addData } from '../redux/session'

const App = (props) => (
  <div id='container'>
   {props.children}
  </div>
)

export default App
