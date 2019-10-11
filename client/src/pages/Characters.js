import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Row, Col, Input, Button } from 'antd'
import CharacterSelect from '../components/CharacterSelect'
import API from '../utils/API'

const marginBtm = {
  marginBottom: '.5em'
}

const primaryBtn = {
  color: '#0f0f0c',
  marginBottom: '.5em',
  backgroundColor: '#00803e',
  border: '1px solid #00803e'
}

class Characters extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ships: [],
      userName: '',
      currentShip: {},
      charCreated: false
    }
  }

  componentDidMount() {
    this.loadCharacters()
  }

  loadCharacters = () => {
    API.getCharacters()
      .then(res => this.setState({ ships: res.data, currentShip: res.data[0] }))
      .catch(err => console.error(err))
  }

  updateState = (index = 0) => {
    this.setState({ currentShip: this.state.ships[index] })
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  saveCharacter = e => {
    e.preventDefault()
    if (this.state.userName) {
      API.saveCharacter(this.state.userName, this.state.currentShip)
        .then(res => {
          if (res.data === true) {
            this.setState({ charCreated: true })
          }
        })
        .catch(err => console.error(err))
    }
  }

  render() {
    if (this.state.charCreated) {
      return <Redirect to='/stats' />
    }
    return (
      <div>
        <CharacterSelect
          ships={this.state.ships}
          updateState={this.updateState}
        />
        <Row
          style={{ marginTop: '3em' }}
          type='flex'
          justify='space-around'
          align='middle'>
          <Col style={{ maxWidth: 300 }}>
            <Input
              style={marginBtm}
              placeholder='username'
              name='userName'
              onChange={this.handleInputChange}
            />
            <Button
              style={primaryBtn}
              type='primary'
              block
              disabled={!this.state.userName}
              onClick={this.saveCharacter}>
              Start
            </Button>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Characters
