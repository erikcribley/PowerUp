import React, { Component } from 'react'
import { Row, Col, Input, Button } from 'antd'
import CharacterSelect from '../components/CharacterSelect'
import API from '../utils/API'

class Characters extends Component {
  // componentDidMount() {
  //   API.get().then(res => console.log(res.data))
  // }

  state = {
    userName: ''
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleLoginSubmit = e => {
    e.preventDefault()
    if (this.state.userName) {
      API.login(this.state.userName)
        .then(res => console.log(res))
        .catch(err => console.error(err))
    }
  }

  render() {
    return (
      <div>
        <CharacterSelect />
        <Row
          style={{ marginTop: '3em' }}
          type='flex'
          justify='space-around'
          align='middle'>

          <Col style={{ maxWidth: 300 }}>

            <Input
            className='marginBtm'
            placeholder='username'
            name='username'
            />  
            <Button
              className='primaryBtn'
              type='primary'
              block
              onClick={this.handleLoginSubmit}
              >
              Start
            </Button>

          </Col>
        </Row>
      </div>
    )
  }
}

export default Characters
