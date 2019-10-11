import React, { Component } from 'react'
import { Layout, Row, Col } from 'antd'
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
            <Col xs={24} sm={24} md={8} lg={8}>
              <div style={{backgroundColor: 'gray', minHeight: 200, marginTop: 20}}>
                <div style={{backgroundColor: 'orange', height: 200, width: 200}}>IMG</div>
              </div>
            </Col>
            <Col xs={24} sm={24} md={16} lg={8}>
              <div style={{backgroundColor: 'gray', minHeight: 200, marginTop: 20}}>PROMPT</div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={8}>
              {/* <div style={{backgroundColor: 'gray', minHeight: 200, marginTop: 20}}></div> */}
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

          {/* <div style={{ padding: 24, minHeight: 280 }}>

            <StatsList 
              shipName={this.state.shipName}
              armor={this.state.armor}
              weapons={this.state.armor}
              shield={this.state.shield}
              thrust={this.state.thrust}
              hp={this.state.hp} 
              credits={this.state.credits}
            />

          </div> */}
        </Content>

        <Foot />
      </div>
    )
  }
}

export default Gameplay
