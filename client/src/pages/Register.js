import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Row, Col, Form, Input, Button } from 'antd'
import Foot from '../components/Footer'
import API from '../utils/API'

class NormalLoginForm extends Component {
  state = {
    loggedIn: false
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        API.register(values.email, values.password)
          .then(res => {
            if (res.status === 200) {
              this.setState({ loggedIn: true })
            }
          })
          .catch(err => console.error(err.response.data))
      }
    })
  }

  render() {
    if (this.state.loggedIn) {
      return <Redirect to='/characters' />
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
            <h1 className='hStyle'>Register</h1>
            <Form onSubmit={this.handleSubmit} className='login-form'>
              <Form.Item>
                {getFieldDecorator('email', {
                  rules: [
                    {
                      type: 'email',
                      required: true,
                      message: 'Please enter a valid email address.'
                    }
                  ]
                })(<Input placeholder='email' name='userEmail' />)}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [
                    {
                      type: 'string',
                      required: true,
                      message: <div>Please enter a password.</div>
                    },
                    {
                      pattern: '[0-9]',
                      message: (
                        <div>Password must contain at least one numeral.</div>
                      )
                    },
                    {
                      pattern: '[a-z]',
                      message: (
                        <div>
                          Password must contain at least one lowercase letter.
                        </div>
                      )
                    },
                    {
                      pattern: '[A-Z]',
                      message: (
                        <div>
                          Password must contain at least one capital letter.
                        </div>
                      )
                    },
                    {
                      min: 8,
                      message: (
                        <div>Password must contain at least 8 characters .</div>
                      )
                    }
                  ]
                })(
                  <Input.Password
                    type='password'
                    placeholder='password'
                    name='password'
                  />
                )}
              </Form.Item>
              <Form.Item>
                <Button
                  type='primary'
                  htmlType='submit'
                  className='primaryBtn'
                  block>
                  Register
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
        <Foot />
      </div>
    )
  }
}

const RegisterForm = Form.create({ name: 'normal_login' })(NormalLoginForm)

export default RegisterForm
