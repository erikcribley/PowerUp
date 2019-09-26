import React, { Component } from 'react'
import API from '../../utils/API'

class Test extends Component {
  componentDidMount() {
    API.get().then(res => console.log(res.data))
  }

  login = () => API.googleLogin().then(res => console.log(res.data))

  render() {
    return (
      <a href={'/auth/google'}>
        <button type='button'>Log in with Google</button>
      </a>
    )
  }
}

export default Test
// onClick={this.login}
