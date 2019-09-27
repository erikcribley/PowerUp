import React, { Component } from 'react'
import { Row, Col, Carousel } from 'antd'
import API from '../../utils/API'

function onChange(a, b, c) {
  console.log(a, b, c);
}

class Characters extends Component {
  componentDidMount() {
    API.get().then(res => console.log(res.data))
  }

  render() {
    return (
      <Row style={{marginTop: 150}}>
        <Col>
            <Carousel afterChange={onChange}>
              <div align='middle'>
                <img style={{maxWidth: 300}} src='./images/test-01.svg' alt='Character One'/>
                <h3>Character One</h3>
              </div>
              <div align='middle'>
                <img style={{maxWidth: 300}} src='./images/test-02.svg' alt='Character Two'/>
                <h3>Character Two</h3>
              </div>
              <div align='middle'>
                <img style={{maxWidth: 300}} src='./images/test-03.svg' alt='Character Three'/>
                <h3>Character Three</h3>
              </div>
              <div align='middle'>
                <img style={{maxWidth: 300}} src='./images/test-04.svg' alt='Character Four'/>
                <h3>Character Four</h3>
              </div>
            </Carousel>
        </Col>  
      </Row>  
    )
  }
}

export default Characters