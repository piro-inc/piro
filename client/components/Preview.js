import React from 'react'

class Preview extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
  }
}

  render () {
    return (

      <div id='preview'>

        <div className='preview-header'>
          <h4 className='sport'>Sport name</h4>
          <h3 className='division'>Division</h3>
          <h4 className='location'>Location</h4>
        </div>

        <div className='team-names'>
          <h3 className='team-one'>Team one</h3>
          <h3 className='team-two'>Team two</h3>
        </div>

        <div className='score-wrapper'>

          <a href='#'>
            <img src='#' className='team-logo'/>
          </a>

          <h1 className='preview-score'>Team one score</h1>

          <h1 className='period'></h1>

          <h1 className='preview-score'>Team two score</h1>

          <a href='#'>
            <img src='#' className='team-logo'/>
          </a>

        </div>

        <div className='comments'>
          <p className='preview-comment'>Latest comment</p>
        </div>

      </div>
    )
  }
}

export default Preview
