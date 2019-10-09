import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Row, Col, Input, Button } from 'antd'
import Foot from '../components/Footer'
import API from '../utils/API'

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

const secondaryBtn = {
  color: '#00803e',
  marginBottom: '.5em',
  backgroundColor: 'transparent',
  border: '1px solid #00803e'
}

class Login extends Component {
  // componentDidMount () {
  //   API.login('mitch', '1234').then(res => console.log(res.data))
  // }

  state = {
    userEmail: '',
    password: '',
    loggedIn: false
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleLoginSubmit = e => {
    e.preventDefault()
    if (this.state.userEmail && this.state.password) {
      API.login(this.state.userEmail, this.state.password)
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
      return <Redirect to='/tasks' />
    }
    return (
      <div>
        <Row
          style={{ minHeight: 500 }}
          type='flex'
          justify='space-around'
          align='middle'>
          <Col style={{ maxWidth: 300 }}>
            <h1 style={hStyle}>Log In</h1>
            <Input
              style={marginBtm}
              placeholder='email'
              name='userEmail'
              value={this.state.userEmail}
              onChange={this.handleInputChange}
            />
            <Input.Password
              style={marginBtm}
              placeholder='password'
              name='password'
              value={this.state.password}
              onChange={this.handleInputChange}
            />
            <Button
              style={primaryBtn}
              type='primary'
              block
              disabled={!this.state.userEmail && this.state.password}
              onClick={this.handleLoginSubmit}>
              Log In
            </Button>
            <Button
              style={secondaryBtn}
              type='primary'
              block
              href='/auth/google'>
              Log In with Google
            </Button>
            {/* <Button
              style={ secondaryBtn }
              type='primary'
              block>
              log in with Facebook
            </Button> */}
            <h1 style={hStyle}>New User?</h1>
            <Button style={primaryBtn} type='primary' block href='/register'>
              Register
            </Button>
          </Col>
        </Row>
        <Foot />
      </div>
    )
  }
}

export default Login
