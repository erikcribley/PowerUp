import React, { Component } from 'react'
import { Layout, Row, Col, Input, Button } from 'antd'
import TopNav from '../components/Header'
import TaskItem from '../components/Tasks'
import Foot from '../components/Footer'
import API from '../utils/API'

const { Content } = Layout

const marginBtm = {
  marginBottom: '.5em'
}

const hStyle = {
  fontFamily: 'Orbitron, sans-serif',
  color: 'white',
  textAlign: 'center',
  marginTop: '1em'
}

const primaryBtn = {
  color: '#0f0f0c',
  marginBottom: '.5em',
  backgroundColor: '#00803e',
  border: '1px solid #00803e'
}

class Tasks extends Component {
  state = {
    tasks: [],
    newTask: '',
    updateTask: ''
  }

  componentDidMount() {
    this.loadTasks()
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  loadTasks = () => {
    API.getTasks()
      .then(res =>
        this.setState({ tasks: res.data, newTask: '', updateTask: '' })
      )
      .catch(err => console.error(err))
  }

  deleteTask = id => {
    API.deleteTasks(id)
      .then(res => this.loadTasks())
      .catch(err => console.error(err))
  }

  newTask = e => {
    e.preventDefault()
    if (this.state.newTask.length > 0) {
      API.addTasks(this.state.newTask)
        .then(res => this.loadTasks())
        .catch(err => console.error(err))
    }
  }

  // Just left this here in case we want to add the function later

  // updateTask = e => {
  //   e.preventDefault()
  //   if (this.state.updateTask.length > 0) {
  //     API.addTasks(e.target.taskId, this.state.updateTask)
  //       .then(res => this.loadTasks())
  //       .catch(err => console.error(err))
  //   }
  // }

  render() {
    return (
      <div>
        <TopNav />

        <Content>
          <div style={{ marginTop: '3em', minHeight: 280 }}>
            <Row type='flex' justify='center' gutter={32}>
              <Col xs={12} lg={12} style={{ textAlign: 'center' }}>
                <Row>
                  <h1 style={hStyle}>Add a Task</h1>
                  <Input
                    style={marginBtm}
                    placeholder='e.g.: Walk the dog'
                    name='newTask'
                    value={this.state.newTask}
                    onChange={this.handleInputChange}
                  />
                  <Button
                    style={primaryBtn}
                    type='primary'
                    block
                    disabled={
                      !this.state.task &&
                      this.state.description &&
                      this.state.stars
                    }
                    onClick={this.newTask}>
                    Add Task
                  </Button>
                  <h1 style={hStyle}>Current Tasks</h1>
                  <div>
                    {this.state.tasks.map(task => (
                      <TaskItem
                        key={task.taskId}
                        id={task.taskId}
                        message={task.task}
                        delete={this.deleteTask}
                      />
                    ))}
                  </div>
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

export default Tasks
