import React from 'react'

function PromptBox (props) {
  createButtons = () => {
    for (i = 0; i < props.options.split(', ').length; i++) {
      <button className="option-btn" onClick={props.events.split(', ')[i]}> {props.options.split[i]}</button>
    }
  }
  return (
    <div className="prompt-box">
      <p> {props.prompt} </p>
      {this.createButtons()}
    </div>
  )
} 

export default PromptBox