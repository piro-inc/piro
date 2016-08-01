import React from 'react'

class Preview extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    const game = this.props.game
    return (

      <div id='preview'>

        <div className='preview-header'>
          <h4 className='sport'>{game.sport}</h4>
          <h3 className='division'>Division</h3>
          <h4 className='location'>{game.location}</h4>
        </div>

        <div className='team-names'>
          <h3 className='team-one'>{game.team_a_name}</h3>
          <h3 className='team-two'>{game.team_b_name}</h3>
        </div>

        <div className='score-wrapper'>

          <a href='#'>
            <img src='#' className='team-logo' />
          </a>

          <h1 className='preview-score'>{game.team_a_score}</h1>

          <h1 className='period'></h1>

          <h1 className='preview-score'>{game.team_b_score}</h1>

          <a href='#'>
            <img src='#' className='team-logo' />
          </a>

        </div>

        <div className='comments'>
          {game.comment
            ? <p className='preview-comment'>{game.comment}</p>
            : <p className='preview-comment'>No game comment</p>
          }
        </div>

      </div>
    )
  }
}

export default Preview
