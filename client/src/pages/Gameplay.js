import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'
import { Layout } from 'antd'
import TopNav from '../components/Header'
import Foot from '../components/Footer'
import StatsList from '../components/StatsList'
import Prompts from '../components/Prompts'
import API from '../utils/API'
const { Content } = Layout

class Gameplay extends Component {
  state = {
    userID: 0,
    shipID: 0,
    shipName: '',
    armor: 0,
    weapon: 0,
    shield: 0,
    thrust: 0,
    hp: 0,
    credits: 0,
    promptID: 0,
    prompt: '',
    options: '',
    event: '',
    test: []
  }

  componentDidMount() {
    this.loadShip()
    this.loadPrompt()
  }

  loadShip = () => {
    API.getShip(this.state.userID)
      .then(res =>
        this.setState({
          userID: res.data[0].userId,
          shipID: res.data[0].shipId,
          shipName: res.data[0].name,
          armor: res.data[0].maxHP,
          weapon: res.data[0].attack,
          shield: res.data[0].defense,
          thrust: res.data[0].speed,
          hp: res.data[0].maxHP,
          credits: res.data[0].credits
        })
      )
      .catch(err => console.error(err))
  }

  loadPrompt = () => {
    API.getPrompt(1)
      .then(res =>
        this.setState({
          prompt: res.data[0].prompt,
          options: res.data[0].options,
          events: res.data[0].events
        })
      )
      .catch(err => console.error(err))
  }

  render() {
    // if (
    //   !sessionStorage.getItem('loggedIn') ||
    //   sessionStorage.getItem('loggedIn') !== 'true'
    // ) {
    //   return <Redirect to='/' />
    // }
    return (
      <div>
        <TopNav />

        <Content>
          <div style={{ padding: 24, minHeight: 280 }}>
            <Prompts
              promptID={this.state.promptID}
              prompt={this.state.prompt}
              options={this.state.options}
              events={this.state.events}
            />
          </div>
        </Content>

        <Foot />
      </div>
    )
  }
}

export default Gameplay
