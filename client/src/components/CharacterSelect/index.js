import React from 'react'
import { Row, Col, Carousel } from 'antd'
import './style.css'

function onChange(a, b, c) {
  console.log(a, b, c);
}

function CharacterSelect(){
  return (
    <Row style={{marginTop: 80}}>
      <Col>
          <Carousel afterChange={onChange}>
            <div align='middle'>
              <img style={{maxWidth: 320}} src='./images/cruiser-sm.svg' alt='Outpost Cruiser' />
              <h3>Outpost Cruiser</h3>
            </div>
            <div align='middle'>
              <img style={{maxWidth: 320}} src='./images/pod.svg' alt='Alien Pod' />
              <h3>Alien Pod</h3>
            </div>
            <div align='middle'>
              <img style={{maxWidth: 320}} src='./images/sphere.svg' alt='Android Sphere' />
              <h3>Android Sphere</h3>
            </div>
            <div align='middle'>
              <img style={{maxWidth: 320}} src='./images/' alt='Character Four' />
              <h3>Character Four</h3>
            </div>
          </Carousel>
      </Col>  
    </Row>  
  )
}

export default CharacterSelect