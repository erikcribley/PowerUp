import React, { Component } from 'react'
import { Layout, Row, Col, List } from 'antd'
import TopNav from '../components/Header'
import Foot from '../components/Footer'
import PlayerSnapshot from '../components/PlayerSnapshot'

import API from '../utils/API'

const { Content } = Layout

class Tasks extends Component {
  state = {
    tasks: [],
    newTask: '',
    updateTask: '',
    lastTaskId: 0,
    numOfTasksShown: 10
  }
  componentDidMount() {
    this.loadTasks()
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  loadTasks = () => {
    API.getTasks(this.state.lastTaskId, this.state.numOfTasksShown)
      .then(res => this.setState({ tasks: res.data, newTask: '' }))
      .catch(err => console.error(err))
  }

  deleteTask = id => {
    API.deleteTasks(id)
      .then(res => this.loadTasks())
      .catch(err => console.error(err))
  }

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
