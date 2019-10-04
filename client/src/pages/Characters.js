import React, { Component } from 'react'
import CharacterSelect from '../components/CharacterSelect'
import Foot from '../components/Footer'
import API from '../utils/API'

class Characters extends Component {
  componentDidMount() {
    API.get().then(res => console.log(res.data))
  }

  render() {
    return (<CharacterSelect />)
  }
}

export default Characters