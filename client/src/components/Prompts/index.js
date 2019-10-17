import React from 'react'
import { Row, Col, Button } from 'antd'

// function Prompts (props) {
//   return (
//     <div>
//       <p> {props.prompt} </p>
//       <button onClick={() => props.loadPrompt(props.event1)}> {props.option1} </button>
//       <button onClick={() => props.loadPrompt(props.event2)}> {props.option2} </button>
//     </div>
//   )
// }

function Prompts (props) {
  return (
    <div style={{minHeight: 200}}>
      <Row>
        <Col>
          <div id='promptText'>
          {/* <p> {props.prompt} </p> */}
          <p> Prompt text goes here... </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} style={{marginBottom: '1em'}}>
          <Button
            className='primaryBtn promptBtn'
            block
            onClick={() => props.loadPrompt(props.event1)}
            >
            {/* {props.option1} */}
            Option 1
          </Button>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} style={{marginBottom: '1em'}}>
          <Button
            className='primaryBtn promptBtn'
            block
            onClick={() => props.loadPrompt(props.event2)}
            >
            {/* {props.option2} */}
            Option 2
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default Prompts