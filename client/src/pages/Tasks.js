import React, { Component } from 'react'
import { Layout, Row, Col, Input, Button, Radio } from 'antd'
import TopNav from '../components/Header'
import TaskItem from '../components/Tasks'
import Foot from '../components/Footer'
import API from '../utils/API'

const { Content } = Layout
const { TextArea } = Input

class Tasks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
      newTask: '',
      newTaskPower: 0,
      updateTask: '',
      power: 0
    }
  }

  componentDidMount() {
    this.loadTasks()
    this.getStats()
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  getStats = () => {
    API.getStats()
      .then(res => this.setState({ power: res.data[0].credits }))
      .catch(err => console.error(err))
  }

  updateCredits = () => {
    API.updateCredits(this.state.power)
      .then(res => res.data)
      .catch(err => console.error(err))
  }

  loadTasks = () => {
    API.getTasks()
      .then(res => {
        this.setState({ tasks: res.data, newTask: '', updateTask: '' })
      })
      .catch(err => console.error(err))
  }

  deleteTask = (id, taskPower) => {
    API.deleteTasks(id)
      .then(res => {
        this.setState({ power: this.state.power + taskPower })
        this.loadTasks()
      })
      .then(res => this.updateCredits())
      .catch(err => console.error(err))
  }

  newTask = e => {
    e.preventDefault()
    if (this.state.newTask.length > 0) {
      API.addTasks(this.state.newTask, this.state.newTaskPower)
        .then(res => this.loadTasks())
        .catch(err => console.error(err))
    }
  }

  render() {
    return (
      <div>
        <TopNav />
        <Content>
          <div style={{ marginTop: '3em', minHeight: 280 }}>
            <Row type='flex' justify='center' gutter={32}>
              <Col xs={18} lg={12} style={{ textAlign: 'center' }}>
                <Row>
                  <h1 id='power'>POWER: {this.state.power}</h1>
                </Row>
                <Row>
                  <h1 className='hStyle'>Enter a Task</h1>
                  <TextArea
                    className='marginBtm'
                    placeholder='e.g.: Walk the dog'
                    name='newTask'
                    value={this.state.newTask}
                    onChange={this.handleInputChange}
                    autosize
                  />
                  <h1 className='hStyle'>Assign Task Value</h1>
                  <div style={{ marginBottom: '3em' }}>
                    <Radio.Group
                      defaultValue={1}
                      buttonStyle='solid'
                      name='newTaskPower'
                      onChange={this.handleInputChange}>
                      <Radio.Button className='valueBtn' value={1}>
                        1
                      </Radio.Button>
                      <Radio.Button className='valueBtn' value={2}>
                        2
                      </Radio.Button>
                      <Radio.Button className='valueBtn' value={3}>
                        3
                      </Radio.Button>
                    </Radio.Group>
                  </div>
                  <Button
                    className='primaryBtn'
                    type='primary'
                    block
                    disabled={!this.state.newTask}
                    onClick={this.newTask}>
                    Add Task
                  </Button>
                  <h1 className='hStyle'>Current Tasks</h1>
                  <div>
                    {this.state.tasks.map(task => (
                      <TaskItem
                        key={task.taskId}
                        id={task.taskId}
                        message={task.task}
                        power={task.taskCredit}
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
