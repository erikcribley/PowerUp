import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Row, Col, Input, Button } from 'antd'
import Foot from '../components/Footer'
import API from '../utils/API'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userEmail: '',
      password: '',
      loggedIn: false
    }
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleLoginSubmit = e => {
    e.preventDefault()
    if (this.state.userEmail && this.state.password) {
      API.register(this.state.userEmail, this.state.password)
        .then(res => {
          if (res.data === true) {
            this.setState({ loggedIn: true })
          }
        })
        .catch(err => console.error(err))
    }
  }

  render() {
    if (this.state.loggedIn) {
      return <Redirect to='/characters' />
    }
    return (
      <div>
        <Row
          style={{ minHeight: 500 }}
          type='flex'
          justify='space-around'
          align='middle'>
          <Col style={{ maxWidth: 300 }}>
            <h1 className='hStyle'>Register</h1>
            {/* <Input
              style={ marginBtm }
              placeholder='username'
              name='userName'
              value={this.state.userName}
              onChange={this.handleInputChange}
            /> */}
            <Input
              className='marginBtm'
              placeholder='email'
              name='userEmail'
              value={this.state.userEmail}
              onChange={this.handleInputChange}
            />
            <Input.Password
              className='marginBtm'
              placeholder='password'
              name='password'
              value={this.state.password}
              onChange={this.handleInputChange}
            />
            <Button
              className='primaryBtn'
              type='primary'
              block
              disabled={!this.state.userEmail && this.state.password}
              onClick={this.handleLoginSubmit}>
              Register
            </Button>
          </Col>
        </Row>
        <Foot />
      </div>
    )
  }
}

export default Register
