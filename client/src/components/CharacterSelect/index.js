import React from 'react'
import { Row, Col, Carousel } from 'antd'
import './style.css'

function CharacterSelect (props) {
  function currentShip (index = 0) {
    console.log('worked')
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
              id={ship.defaultShipId}
            >
              <img
                style={{ maxWidth: 320 }}
                src={ship.picture}
                alt={ship.name}
              />
              <h3>{ship.name}</h3>
            </div>
          ))}
          {/* <div align='middle'>
            <img
              style={{ maxWidth: 320 }}
              src='./images/cruiser-sm.svg'
              alt='Outpost Cruiser'
            />
            <h3>Outpost Cruiser</h3>
          </div> */}
          {/* <div align='middle'>
            <img
              style={{ maxWidth: 320 }}
              src='./images/pod.svg'
              alt='Alien Pod'
            />
            <h3>Alien Pod</h3>
          </div> */}
          {/* <div align='middle'>
            <img
              style={{ maxWidth: 320 }}
              src='./images/sphere.svg'
              alt='Android Sphere'
            />
            <h3>Android Sphere</h3>
          </div> */}
          {/* <div align='middle'>
            <img
              style={{ maxWidth: 320 }}
              src='./images/'
              alt='Character Four'
            />
            <h3>Character Four</h3>
          </div> */}
        </Carousel>
      </Col>
    </Row>
  )
}

export default CharacterSelect
