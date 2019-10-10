import React, { Component } from 'react'
import { Button } from 'antd'
import './style.css'

class TaskItem extends Component {
  // constructor (props) {
  //   super()

  //   this.state = {
  //     checked: false
  //   }

  //   this.handleClick = this.handleClick.bind(this)
  // }

  // handleClick (e) {
  //   this.setState({
  //     checked: !this.state.checked
  //   })
  // }

  render() {
    return (
      <div className='row'>
        <div className='col-md-12'>
          {this.props.message}
          <Button
            type='primary'
            size='small'
            onClick={() => this.props.delete(this.props.id)}>
            Completed
          </Button>
          <hr />
        </div>
      </div>
    )
  }
}

export default TaskItem
