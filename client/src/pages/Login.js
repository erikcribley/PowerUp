import React, { Component } from 'react'
import { Row, Col, Input, Button } from 'antd'
import API from '../utils/API'

const pStyle = {
  marginTop: '1.5em',
  marginBottom: '.5em',
  textAlign: 'center'
}

class Login extends Component {
  // componentDidMount () {
  //   API.login('mitch', '1234').then(res => console.log(res.data))
  // }

  state = {
    userEmail: '',
    password: ''
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleLoginSubmit = e => {
    e.preventDefault()
    if (this.state.userEmail && this.state.password) {
      API.login(this.state.userEmail, this.state.password)
        .then(res => console.log(res))
        .catch(err => console.error(err))
    }
  }

  render() {
    return (
      <Row
        style={{ minHeight: 500 }}
        type='flex'
        justify='space-around'
        align='middle'>
        <Col style={{ maxWidth: 300 }}>
          <h1>Log In</h1>
          <Input
            style={{ marginBottom: '.5em' }}
            placeholder='Enter your email'
            name='userEmail'
            value={this.state.userEmail}
            onChange={this.handleInputChange}
          />
          <Input.Password
            style={{ marginBottom: '.5em' }}
            placeholder='input password'
            name='password'
            value={this.state.password}
            onChange={this.handleInputChange}
          />
          <Button
            type='primary'
            block
            disabled={!this.state.userEmail && this.state.password}
            onClick={this.handleLoginSubmit}>
            Log In
          </Button>
          <p style={pStyle}>log in with Google</p>
          <Button type='primary' block>
            Google
          </Button>
          <p style={pStyle}>log in with Facebook</p>
          <Button type='primary' block>
            Facebook
          </Button>
        </Col>
      </Row>
    )
  }
}

export default Login
