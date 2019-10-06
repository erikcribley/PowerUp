import React, { Component } from 'react'
import { Layout, Row, Col, List } from 'antd'
import TopNav from '../components/Header'
import Foot from '../components/Footer'
import PlayerSnapshot from '../components/PlayerSnapshot'

import API from '../utils/API'

const { Content } = Layout

class Tasks extends Component {
  componentDidMount () {
    API.getTasks().then(res => console.log(res.data))
  }

  render () {
    return (
      <div>
        <TopNav />

        <Content>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <Row type='flex' justify='center' gutter={32}>
              <Col
                xs={14}
                lg={6}
                style={{ textAlign: 'center', backgroundColor: 'gray' }}
              >
                <PlayerSnapshot />
              </Col>
              <Col
                xs={14}
                lg={6}
                style={{ textAlign: 'center', backgroundColor: 'orange' }}
              >
                <Row>Tasks go here.</Row>
              </Col>
            </Row>
          </div>
        </Content>

        <Foot />
      </div>
    )
  }
}

export default Tasks
