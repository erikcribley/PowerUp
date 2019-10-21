import React, { Component } from 'react'
import { Row, Col, Button, Icon } from 'antd'
import './style.css'

class TaskItem extends Component {
  render () {
    return (
      <div>
        <Row type='flex' align='middle'>
          <Col xs={20} sm={20} md={20} lg={20}>
            <div className='taskText'>{this.props.message}</div>
          </Col>
          <Col xs={4} sm={4} md={4} lg={4} style={{ textAlign: 'right' }}>
            <Button
              className='secondaryBtn compBtn'
              size='small'
              onClick={() =>
                this.props.delete(this.props.id, this.props.power)}
            >
              <Icon type='check' />
            </Button>
          </Col>
        </Row>
        <Row>
          <hr />
        </Row>
      </div>
    )
    // return (
    //   <div className='row'>
    //     <div className='col-md-6'>
    //       {this.props.message}
    //     </div>
    //     <div className='col-md-6'>
    //       <Button
    //         className='secondaryBtn'
    //         size='small'
    //         onClick={() => this.props.delete(this.props.id)}>
    //         Completed
    //       </Button>
    //     </div>
    //     <hr />
    //   </div>
    // )
  }
}

export default TaskItem
