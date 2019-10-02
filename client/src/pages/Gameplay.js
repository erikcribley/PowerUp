import React, { Component } from 'react'
import { Layout } from 'antd'
import TopNav from '../components/Header'
import Foot from '../components/Footer'

import API from '../utils/API'

const { Content } = Layout


class Gameplay extends Component {
  componentDidMount() {
    API.get().then(res => console.log(res.data))
  }

  render() {
    return (
      <div>

        <TopNav />

        <Content>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>

            <h1>Under Construction.</h1>
          
          </div>
        </Content>

        <Foot />

      </div>
    );
  }
}

export default Gameplay