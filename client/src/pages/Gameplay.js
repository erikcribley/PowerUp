import React, { Component } from 'react'
import { Layout } from 'antd'
import TopNav from '../components/Header'
import Foot from '../components/Footer'
import StatsList from '../components/StatsList'
import Prompts from '../components/Prompts'
import API from '../utils/API'
const { Content } = Layout

class Gameplay extends Component {
  state = {
    //ship
    userID: '',
    shipID: '',
    shipName: '',
    armor: 0,
    weapon: 0,
    shield: 0,
    thrust: 0,
    hp: 0,
    credits: 0,
    promptID: 0,
    //prompts
    prompt: '',
    options: '',
    event: '',
    test: []
  }

  componentDidMount() {
    // this.loadShip()
    this.loadPrompt()
    console.log(this.state.prompt)
  }

  // loadShip = () => {
  //   API.getShip(this.state.userID)
  //     .then(res => this.setState({ 
  //       userID: res.userId,
  //       shipID: res.shipId,
  //       shipName: res.name,
  //       armor: res.maxHP,
  //       weapon: res.attack,
  //       shield: res.defense,
  //       thrust: res.speed,
  //       hp: res.maxHP,
  //       credits: res.credits
  //     }))
  //     .catch(err => console.error(err))
  // }

  loadPrompt = () => {
    API.getPrompt(1)
      .then(res => 
        console.log(res.data[0].prompt)
        // this.setState({
        //   prompt: res.data[0].prompt,
        //   options: res.options,
        //   events: res.events
        // })
      )
      .catch(err => console.error(err))
  }

  render() {
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
