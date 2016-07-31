import React from 'react'
import { connect } from 'react-redux'
import { fetchGamesInfo } from '../redux/gamesActions'

import Preview from './Preview'
import Navbar from './Navbar'

class Previews extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // state goes here
    }
  }

  componentDidMount () {
    this.props.fetchGamesInfo()
  }
 
  render () {
    return (
      <div id='previews-wrapper'>
        <Navbar />
        {this.props.games.length ?
          <h3>{this.props.games.length}</h3>
          {this.props.games.map((game) => {
            return <Preview />
          })}
          :<h3>Has no games</h3>
        }
        <Preview />
        <Preview />
        <div id='footer'>
          <p>click anywhere on scoreboard for more detail</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    games: state.games.get('games').toJS()
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
