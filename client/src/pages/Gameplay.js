import React, { Component } from 'react'
import { Layout, Row, Col, Button } from 'antd'
import TopNav from '../components/Header'
import Foot from '../components/Footer'
import StatsList from '../components/StatsList'
import API from '../utils/API'
const { Content } = Layout

class Gameplay extends Component {
  state = {
    userID: '',
    shipID: '',
    shipName: '',
    armor: 0,
    weapon: 0,
    shield: 0,
    thrust: 0,
    hp: 0,
    credits: 0,
  }

  componentDidMount() {
    this.loadShip()
  }

  loadShip = () => {
    API.getShip(this.state.userID)
      .then(res => this.setState({ 
        userID: res.userId,
        shipID: res.shipId,
        shipName: res.name,
        armor: res.maxHP,
        weapon: res.attack,
        shield: res.defense,
        thrust: res.speed,
        hp: res.maxHP,
        credits: res.credits
      }))
      .catch(err => console.error(err))
  }

  render() {
    return (
      <div>
        <TopNav />
        <Content>
          <Row type='flex' gutter={20} style={{padding: 24, margin: '0 3em'}}>
            <Col xs={24} sm={24} md={24} lg={16} style={{border: '1px solid white'}}>
              <div style={{marginTop: 20}}>
                <div id='gradient'>
                  <img src='./images/placeholder.jpg' alt='placeholder'/>
                </div>
                <div style={{minHeight: 200}}>
                  <Row>
                    <Col>
                      <div id='promptText'>
                      Prompt text goes here...
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={24} sm={24} md={12} lg={12}>
                      <Button
                        className='primaryBtn promptBtn'
                        block
                        >
                        Choice 1
                      </Button>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12}>
                      <Button
                        className='primaryBtn promptBtn'
                        block
                        >
                        Choice 2
                      </Button>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} style={{border: '1px solid white'}}>
              <div style={{minHeight: 200, marginTop: 20}}>
                <StatsList 
                  shipName={this.state.shipName}
                  armor={this.state.armor}
                  weapons={this.state.armor}
                  shield={this.state.shield}
                  thrust={this.state.thrust}
                  hp={this.state.hp} 
                  credits={this.state.credits}
                />
              </div>
            </Col>
          </Row>
        </Content>
        <Foot />
      </div>
    )
  }
}

export default Gameplay
