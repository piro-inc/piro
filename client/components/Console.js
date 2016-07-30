import React from 'react'
import Navbar from './Navbar'

class Console extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // state goes here
    }
  }

  render () {
    return (
      <div id='console-wrapper'>

        <div id='navbar-wrapper'>
          <Navbar />
        </div>

        <h4 className='console-title'>Game [id] [Sport]</h4>

        <h3 className='console-headers'>TIMER</h3>
        <div className='console-timer'>

          <div className='pause'>
            <button className='button' id='pause'>PAUSE</button>
          </div>

          <div className='start'>
            <button className='button' id='start'>START</button>
          </div>

          <div className='stop'>
            <button className='button' id='stop'>STOP</button>
          </div>

        </div>

        <h3 className='console-headers'>SCORE TEAMS</h3>
        <div className='console-scores'>

          <div className='console-teamone'>

            <img src='#' className='team-logo' />
            <h1 className='console-score' id='team-one-score'>0</h1>

            <div className='scoring-buttons'>
              <button className='button increment' id='increment-team-one'>+</button>
              <button className='button decrement' id='decrement-team-two'>-</button>
            </div>

          </div>

          <div className='console-teamtwo'>

            <img src='#' className='team-logo' />
            <h1 className='console-score'>0</h1>

            <div className='scoring-buttons'>
              <button className='button increment' id='increment-team-two'>+</button>
              <button className='button decrement' id='decrement-team-two'>-</button>
            </div>

          </div>

        </div>

        <h3 className='console-headers'>ADD COMMENT</h3>
        <div className='add-comment'>
          <input type='text' className='console-comment' id='add-comment'/>
          <button type='submit' className='submit button' id='submit-comment'>+ Submit</button>
        </div>

        <h3 className='console-headers'>ADD COMMENT</h3>
        <div className='edit-comment'>
          <input type='text' className='console-comment' id='recent-comment' />
          <button className='submit button' id='edit-comment'>Edit</button>
        </div>
      </div>
    )
  }
}

export default Console
