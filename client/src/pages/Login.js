import React, { Component } from 'react'
import { Row, Col, Input, Button } from 'antd'
import API from '../utils/API'

const pStyle = {
  marginTop: "1.5em",
  marginBottom: ".5em",
  textAlign: "center"
}

class Login extends Component {
  componentDidMount() {
    API.get().then(res => console.log(res.data))
  }

  render() {
    return (
      <Row style={{minHeight: 500}} type="flex" justify="space-around" align="middle">
        <Col style={{maxWidth: 300}}>
            <h1>Log In</h1>
            <Input style={{marginBottom: ".5em"}} placeholder="Enter your email" />
            <Input.Password style={{marginBottom: ".5em"}} placeholder="input password" />
            <Button type="primary" block>
              Log In
            </Button>
            <p style={pStyle}>log in with Google</p>
            <Button type="primary" block>
              Google
            </Button>
            <p style={pStyle}>log in with Facebook</p>
            <Button type="primary" block>
              Facebook
            </Button>
        </Col>
      </Row>
    )
  }
}

export default Login