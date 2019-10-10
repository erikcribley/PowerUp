import React from 'react'
import { Row, Col, Carousel } from 'antd'
import './style.css'

function onChange(a, b, c) {
  console.log(a, b, c);
}

function CharacterSelect(){
  return (
    <Row style={{marginTop: 40}}>
      <Col>
          <Carousel afterChange={onChange}>
            <div align='middle'>
              <img style={{maxWidth: 320}} src='./images/cruiser-sm.svg' alt='Outpost Cruiser' id='1' />
              <h3>Outpost Cruiser</h3>
            </div>
            <div align='middle'>
              <img style={{maxWidth: 320}} src='./images/pod.svg' alt='Alien Pod' id='2' />
              <h3>Alien Pod</h3>
            </div>
            <div align='middle'>
              <img style={{maxWidth: 320}} src='./images/sphere.svg' alt='Android Sphere' id='3' />
              <h3>Android Sphere</h3>
            </div>
            <div align='middle'>
              <img style={{maxWidth: 320}} src='./images/craft.svg' alt='Cyborg Craft' id='4' />
              <h3>Cyborg Craft</h3>
            </div>
          </Carousel>
      </Col>  
    </Row>  
  )
}

export default CharacterSelect