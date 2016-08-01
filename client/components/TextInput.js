import React from 'react'

class TextInput extends React.Component {
  render () {
    let classNames = this.props.className;
    if (this.props.error) {
      classNames += " error"
    }

    let type = 'text';
    if (this.props.type === 'password') {
      type = 'password'
    }

    return (
      <div>
        <input 
          title={this.props.error}
          type={type}
          className={classNames}
          value={this.props.value}
          disabled={this.props.disabled} 
          onBlur={this.props.onBlur}
          placeholder={this.props.placeholder}
        />
      </div>
    )
  }
}

export default TextInput