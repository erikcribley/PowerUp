import React, { Component } from 'react'
import { Layout, Row, Col } from 'antd'
import TopNav from '../components/Header'
import Foot from '../components/Footer'
import PlayerImage from '../components/PlayerImage'
import StatsList from '../components/StatsList'
import API from '../utils/API'

const { Content } = Layout

class StatsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shipName: '',
      armor: 0,
      weapon: 0,
      shield: 0,
      thrust: 0,
      credits: 0,
      picture: ''
    }
  }

  componentDidMount() {
    this.getStats()
  }

  getStats = () => {
    API.getStats()
      .then(res => {
        this.setState({
          shipName: res.data[0].name,
          armor: res.data[0].maxHP,
          weapon: res.data[0].attack,
          shield: res.data[0].defense,
          thrust: res.data[0].speed,
          credits: res.data[0].credits,
          picture: res.data[0].picture
        })
      })
      .catch(err => console.error(err))
  }

  render() {
    return (
      <div>
        <TopNav />

        <Content>
          <div style={{ marginTop: '3em', minHeight: 280 }}>
            <Row type='flex' justify='center' gutter={32}>
              <Col xs={18} lg={6} style={{ textAlign: 'center' }}>
                <PlayerImage
                  src={this.state.picture}
                  alt={this.state.shipName}
                />
              </Col>
              <Col
                xs={18}
                lg={6}
                style={{ textAlign: 'center', color: 'white' }}>
                <Row id='shipName'>
                  {this.state.shipName}
                </Row>
                <StatsList
                  shipName={this.state.shipName}
                  armor={this.state.armor}
                  weapon={this.state.weapon}
                  shield={this.state.shield}
                  thrust={this.state.thrust}
                  credits={this.state.credits}
                />
              </Col>
            </Row>
          </div>
        </Content>

        <Foot />
      </div>
    )
  }
}

export default StatsPage
