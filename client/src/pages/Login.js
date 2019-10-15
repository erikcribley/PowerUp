import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Row, Col, Form, Input, Button } from 'antd'
import Foot from '../components/Footer'
import API from '../utils/API'

class NormalLoginForm extends Component {
  state = {
    loggedIn: false
  }

  // handleInputChange = e => {
  //   this.setState({ [e.target.name]: e.target.value })
  // }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        API.login(values.email, values.password)
        .then(res => {
          if (res.data === true) {
            this.setState({ loggedIn: true })
            console.log(this.state.loggedIn)
          }
        })
        .catch(err => console.error(err))
      }
    })
  }

  render() {
    if (this.state.loggedIn) {
      return <Redirect to='/tasks' />
    }
    const { getFieldDecorator } = this.props.form
    return (
      <div>
        <Row
          style={{ minHeight: 500 }}
          type='flex'
          justify='space-around'
          align='middle'>
          <Col style={{ width: 300 }}>
            <h1 className='hStyle'>Log In</h1>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                {getFieldDecorator('email', {
                  rules: [
                    { type: 'email',
                      required: true,
                      message: 'Please enter a valid email address.' }
                  ]
                })(
                  <Input
                  placeholder='email'
                  name='userEmail'
                  // onChange={this.handleInputChange}
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [
                    { type: 'string',
                      required: true,
                      message: <div>Please enter your password.</div> }
                  ]
                })(
                  <Input.Password
                    type="password"
                    placeholder='password'
                    name='password'
                    // onChange={this.handleInputChange}
                  />
                )}
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className='primaryBtn'
                  block
                  // onClick={this.handleLoginSubmit}
                  >
                  Log In
                </Button>
              </Form.Item>
            </Form>
            <Button
              className='secondaryBtn'
              type='primary'
              block
              href='/auth/google'>
              Log In with Google
            </Button>
            <h1 className='hStyle'>New User?</h1>
            <Button
              className='primaryBtn'
              type='primary'
              block
              href= '/register'>
              Register
            </Button>
          </Col>
        </Row>
        <Foot />
      </div>
    )
  }
}

const LoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm)

export default LoginForm