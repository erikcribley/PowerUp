import React, { Component } from 'react'
import API from '../../utils/API'

class Test extends Component {
  componentDidMount() {
    API.get().then(res => console.log(res.data))
  }

  render() {
    return <div>Hello</div>
  }
}

export default Test
