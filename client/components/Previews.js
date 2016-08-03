import React from 'react'
import { connect } from 'react-redux'
import { fetchGamesInfo } from '../redux/gamesActions'
import { followGame, unfollowGame } from '../redux/socketActions'

import Preview from './Preview'
import Navbar from './Navbar'

function sortByMostRecent (games) {
  const compareGames = (a, b) => {
    return new Date(a.date_time) - new Date(b.date_time)
  }
  return games.sort(compareGames)
}

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
    const games = sortByMostRecent(this.props.games) || []
    const userId = this.props.user.id
    return (
      <div id='previews-wrapper'>
        <Navbar />
        <div id='preview-all-games'>
          <h2>ALL GAMES</h2>
          {(games &&
          games.length &&
          games.filter(game => game.showing).length)
          ? games.map((game, key) => {
            return (game.showing &&
              <Preview
                key={key}
                game={game}
                userID={userId}
                followGame={this.props.followGame}
                unfollowGame={this.props.unfollowGame} />)
          })
          : 'No games to display.'
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
    user: state.session.get('user').toJS(),
    games: state.games.get('games').toJS()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGamesInfo: () => {
      dispatch(fetchGamesInfo())
    },
    followGame: (gameId) => {
      dispatch(followGame(gameId))
    },
    unfollowGame: (gameId) => {
      dispatch(unfollowGame(gameId))
    }
  }
}

const PreviewsContainer = connect(mapStateToProps, mapDispatchToProps)(Previews)

export default PreviewsContainer
