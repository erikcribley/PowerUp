import React, { Component } from 'react'
import { Row, Col, Input, Button } from 'antd'
import Foot from '../components/Footer'
import API from '../utils/API'

const marginBtm = {
  marginBottom: '.5em',
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

class Register extends Component {
  state = {
    userName: '',
    userEmail: '',
    password: ''
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleLoginSubmit = e => {
    e.preventDefault()
    if (this.state.userName && this.state.userEmail && this.state.password) {
      API.login(this.state.userName, this.state.userEmail, this.state.password)
        .then(res => console.log(res))
        .catch(err => console.error(err))
    }
  }

  render() {
    return (
      <div>
        <Row
          style={{ minHeight: 500 }}
          type='flex'
          justify='space-around'
          align='middle'>
          <Col style={{ maxWidth: 300 }}>
            <h1 style={hStyle}>Register</h1>
            {/* <Input
              style={ marginBtm }
              placeholder='username'
              name='userName'
              value={this.state.userName}
              onChange={this.handleInputChange}
            /> */}
            <Input
              style={ marginBtm }
              placeholder='email'
              name='userEmail'
              value={this.state.userEmail}
              onChange={this.handleInputChange}
            />
            <Input.Password
              style={ marginBtm }
              placeholder='password'
              name='password'
              value={this.state.password}
              onChange={this.handleInputChange}
            />
            <Button
              style={ primaryBtn }
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