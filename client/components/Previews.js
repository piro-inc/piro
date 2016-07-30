import React from 'react'
import { connect } from 'react-redux'
import { fetchGamesInfo } from '../redux/gamesActions'

import Preview from './Preview'
import Navbar from './Navbar'

const Previews = (props) => {
  return (
    <div id='previews-wrapper'>
      <Navbar />
      <Preview />
      <Preview />
      <Preview />
      <Preview />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    games: state.get('games').toJS()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGamesInfo: () => {
      dispatch(fetchGamesInfo())
    }
  }
}

const PreviewsContainer = connect(mapStateToProps, mapDispatchToProps)(Previews)

export default PreviewsContainer
