import React from 'react'
import { Link } from 'react-router'

class Preview extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    const game = this.props.game
    return (
      <Link to={`/games/${game.id}`} id='preview'>
        <div className='preview-header'>
          <h4 className='sport'>{game.sport_name}</h4>
          <h3 className='division'>Division</h3>
          <h4 className='location'>{game.location}</h4>
        </div>

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
      </Link>
    )
  }
}

export default Preview
