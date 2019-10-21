import React from 'react'
import { Row } from 'antd'
import './style.css'

function PlayerImage (props) {
  return (
    <div>
      <Row>
        <img src={props.src} alt={props.alt} />
      </Row>
    </div>
  )
}

export default PlayerImage
