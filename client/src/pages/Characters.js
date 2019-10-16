import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Row, Col, Input, Button } from 'antd'
import CharacterSelect from '../components/CharacterSelect'
import API from '../utils/API'

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
    this.checkCharacterExists()
  }

  loadCharacters = () => {
    API.getCharacters()
      .then(res => this.setState({ ships: res.data, currentShip: res.data[0] }))
      .catch(err => console.error(err))
  }

  checkCharacterExists = () => {
    API.getStats()
      .then(res => {
        if (res.data.length > 0) {
          return this.setState({ charCreated: true })
        }
        this.loadCharacters()
      })
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
          if (res.status === 200) {
            this.setState({ charCreated: true })
          }
        })
        .catch(err => console.error(err))
    }
  }

  render() {
    // if (
    //   !sessionStorage.getItem('loggedIn') ||
    //   sessionStorage.getItem('loggedIn') !== 'true'
    // ) {
    //   return <Redirect to='/' />
    // }
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
              className='marginBtm'
              placeholder='username'
              name='userName'
              onChange={this.handleInputChange}
            />
            <Button
              className='primaryBtn'
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
