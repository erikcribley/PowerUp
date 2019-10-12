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
      stats: {}
    }
  }

  componentDidMount() {
    this.getStats()
  }

  getStats = () => {
    API.getStats()
      .then(res => this.setState({ stats: res.data[0] }))
      .catch(err => console.error(err))
  }

  render() {
    return (
      <div>
        <TopNav />

        <Content>
          <div style={{ marginTop: '3em', minHeight: 280 }}>
            <Row type='flex' justify='center' gutter={32}>
              <Col xs={14} lg={6} style={{ textAlign: 'center' }}>
                <PlayerImage
                  src={this.state.stats.picture}
                  alt={this.state.stats.name}
                />
              </Col>
              <Col
                xs={14}
                lg={6}
                style={{ textAlign: 'center', color: 'white' }}>
                <Row style={{ letterSpacing: '3px', marginBottom: '2em' }}>
                  {this.state.stats.name}
                </Row>
                <StatsList stats={this.state.stats} />
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
