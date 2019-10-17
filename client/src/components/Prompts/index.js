import React from 'react'

function Prompts (props) {
  return (
    <div>
      <p>{props.prompt}</p>
      <button onClick={() => props.getFunction(props.event1, props.param1)}> {props.option1} </button>
      <button onClick={() => props.getFunction(props.event2, props.param2)}> {props.option2} </button>
    </div>
  )
}

export default Prompts
