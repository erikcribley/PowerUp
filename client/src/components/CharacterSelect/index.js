import React from 'react'
import { Row, Col, Carousel } from 'antd'
import './style.css'

function CharacterSelect(props) {
  function currentShip(index = 0) {
    props.updateState(index)
  }

  return (
    <Row style={{ marginTop: 40 }}>
      <Col>
        <Carousel afterChange={currentShip}>
          {props.ships.map(ship => (
            <div
              align='middle'
              key={ship.defaultShipId}
              id={ship.defaultShipId}>
              <img
                style={{ maxWidth: 320 }}
                src={ship.picture}
                alt={ship.name}
              />
              <h3>{ship.name}</h3>
            </div>
          ))}
        </Carousel>
      </Col>
    </Row>
  )
}

export default CharacterSelect
