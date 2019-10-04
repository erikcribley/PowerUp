import React, { Component } from 'react'
import { Layout, Row, Col } from 'antd'
import TopNav from '../components/Header'
import Foot from '../components/Footer'
import PlayerImage from '../components/PlayerImage'
import StatsList from '../components/StatsList'

import API from '../utils/API'

const { Content } = Layout

class StatsPage extends Component {
  componentDidMount() {
    API.get().then(res => console.log(res.data))
  }

  render() {
    return (
      <div>

        <TopNav />

        <Content>
          <div style={{ marginTop: '3em', minHeight: 280 }}>

            <Row type='flex' justify='center' gutter={32}>
                <Col xs={14} lg={6} style={{ textAlign: "center" }}>
                  <PlayerImage />
                </Col>
                <Col xs={14} lg={6} style={{ textAlign: "center", color: 'white' }}>
                  <Row style={{letterSpacing: '3px', marginBottom: '2em'}}>
                    Outpost Cruiser Beta
                  </Row>
                  <StatsList />
                </Col>
            </Row>
          
          </div>
        </Content>

        <Foot />

      </div>
    );
  }
}

export default StatsPage