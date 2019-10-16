import React from 'react'

function Prompts (props) {
  return (
    <div>
      <p> {props.prompt} </p>
      <button onClick={function1}> {props.option1} </button>
      <button onClick={function2}> {props.option2} </button>
    </div>
  )
}

export default Prompts
