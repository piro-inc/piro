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

        <Navbar />

        <h4 className='console-title'>Game [id] [Sport]</h4>

        <h3 className='console-headers'>TIMER</h3>
        <div className='console-timer'>

          <div className='pause'>
            <button className='button'>PAUSE</button>
          </div>

          <div className='start'>
            <button className='button'>START</button>
          </div>

          <div className='stop'>
            <button className='button'>STOP</button>
          </div>

        </div>

        <h3 className='console-headers'>SCORE TEAMS</h3>
        <div className='console-scores'>

          <div className='console-teamone'>

            <img src='#' className='team-logo' />
            <h1 className='console-score'>0</h1>

            <div className='scoring-buttons'>
              <button className='button increment'>+</button>
              <button className='button decrement'>-</button>
            </div>

          </div>

          <div className='console-teamtwo'>

            <img src='#' className='team-logo' />
            <h1 className='console-score'>0</h1>

            <div className='scoring-buttons'>
              <button className='button increment'>+</button>
              <button className='button decrement'>-</button>
            </div>

          </div>

        </div>

        <h3 className='console-headers'>ADD COMMENT</h3>
        <div className='add-comment'>
          <input type='text' className='console-comment' />
          <button type='submit' className='submit button'>+ Submit</button>
        </div>

        <h3 className='console-headers'>ADD COMMENT</h3>
        <div className='edit-comment'>
          <input type='text' className='console-comment' />
          <button className='submit button'>Edit</button>
        </div>
      </div>
    )
  }
}

export default Console
