import React from 'react'
import { Link } from 'react-router'
import { IconButton } from 'react-mdl'

class Preview extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  followGame = () => {
    this.props.followGame(this.props.game.id)
  }

  unfollowGame = () => {
    this.props.unfollowGame(this.props.game.id)
  }

  render () {
    const game = this.props.game
    const userID = this.props.userID
    return (
      <div id='preview'>
        <div className='manage-follow-header'>
          <div className='manage-link'>
            {(userID === game.user_id)
            ? <Link to={`/console/${game.id}`} className='console-link'>
              <IconButton name='mode_edit' id='icon-manage' onClick={this.followGame} />
            </Link>
            : null}
          </div>
          <div className='follow-link'>
          {!this.props.game.following
          ? <IconButton name='star' id='icon-follow' onClick={this.followGame} />
          : <IconButton name='star_outline' id='icon-unfollow' onClick={this.unfollowGame} />}
          </div>

        </div>
        <Link to={`/games/${game.id}`} className='preview-header'>
          <h4 className='sport'>{game.sport_name}</h4>
          <h4 className='location'>{game.location}</h4>
        </Link>

        <div className='team-names'>
          <h3 className='team-one'>{game.team_a_name}</h3>
          <h3 className='team-two'>{game.team_b_name}</h3>
        </div>

        <div className='score-wrapper'>
          <img src='#' className='team-logo' />
          <h1 className='preview-score'>{game.team_a_score}</h1>
          <h1 className='period'>v</h1>
          <h1 className='preview-score'>{game.team_b_score}</h1>
          <img src='#' className='team-logo' />
        </div>

        <div className='comments'>
          {game.latestComment && game.latestComment.comment
            ? <p className='preview-comment'>{game.latestComment.comment}</p>
            : <p className='preview-comment'>No game comment</p>
          }
        </div>
      </div>
    )
  }
}

export default Preview
