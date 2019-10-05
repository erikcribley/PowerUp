import React, { Component } from 'react'
import { Layout, Row, Col, List } from 'antd'
import TopNav from '../components/Header'
import Foot from '../components/Footer'
import PlayerSnapshot from '../components/PlayerSnapshot'

import API from '../utils/API'

const { Content } = Layout

const data = [
  'XP:',
  'Ore:',
  'Health:',
  'Attack:',
  'Defense:',
  'Speed:',
  'Rank:',
  'Travel:'
]

class Stats extends Component {
  // componentDidMount() {
  //   API.get().then(res => console.log(res.data))
  // }

  render() {
    return (
      <div>
        <TopNav />

        <Content>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <Row type='flex' justify='center' gutter={32}>
              <Col
                xs={14}
                lg={6}
                style={{ textAlign: 'center', backgroundColor: 'gray' }}>
                <PlayerSnapshot />
              </Col>
              <Col
                xs={14}
                lg={6}
                style={{ textAlign: 'center', backgroundColor: 'orange' }}>
                <Row>Stats</Row>
                <Row style={{ textAlign: 'left' }}>
                  <List
                    size='small'
                    dataSource={data}
                    renderItem={item => <List.Item>{item}</List.Item>}
                  />
                </Row>
              </Col>
            </Row>
          </div>
        </Content>

        <Foot />
      </div>
    )
  }
}

export default Stats
