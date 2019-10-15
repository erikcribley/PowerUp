import React from 'react'

function Prompts (props) {
  return (
    <div>
      <p> {props.prompt} </p>
      <button onClick={() => props.loadPrompt(props.event1)}> {props.option1} </button>
      <button onClick={() => props.loadPrompt(props.event2)}> {props.option2} </button>
    </div>
  )
}

export default Prompts
