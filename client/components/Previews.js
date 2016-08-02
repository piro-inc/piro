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
    const games = this.props.games
    const userID = this.props.user.id
    return (
      <div id='previews-wrapper'>
        <Navbar />
        <div id='preview-all-games'>
          {this.props.games.length &&
            games.map((game, key) => { return <Preview key={key} game={game} userID={userID} /> })
          }
        </div>
        <div id='footer'>
          <p>Click scoreboard heading for game detail</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    games: state.games.get('games').toJS(),
    user: state.session.get('user').toJS()
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
