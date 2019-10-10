import React, { Component } from 'react'
import { Layout, Row, Col, Input, Button } from 'antd'
import TopNav from '../components/Header'
import TaskItem from '../components/Tasks'
import Foot from '../components/Footer'
import API from '../utils/API'

const { Content } = Layout

let item2 = <TaskItem message="a new message" />
let item3 = <TaskItem message="another message" />
let item4 = <TaskItem message="one more task" />

let allTasks = [item2, item3, item4]

class TaskList extends Component {
  render (){
    let tasks = allTasks.map(thing => thing);
    return (
        <h4 className='taskItem'>{tasks}</h4>
    )
  }
}

class Tasks extends Component {
  componentDidMount() {
    API.get().then(res => console.log(res.data))
  }

  state = {
    task: ''
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleTaskSubmit = e => {
    e.preventDefault()
    if (this.state.task) {
      API.login(this.state.task)
        .then(res => console.log(res))
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
                <Col xs={12} lg={12} style={{textAlign: "center" }}>
                  <Row>
                    <h1 className='hStyle'>Add a Task</h1> 
                    <Input
                      className='marginBtm'
                      placeholder='e.g.: Spacewalk the dog'
                      name='task'
                      value={this.state.task}
                      onChange={this.handleInputChange}
                    />
                    <Button
                      className='primaryBtn'
                      type='primary'
                      block
                      // disabled={!this.state.task}
                      onClick={this.handleTaskSubmit}>
                      Add Task
                    </Button>
                    <h1 className='hStyle'>Current Tasks</h1> 
                    <TaskList />
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