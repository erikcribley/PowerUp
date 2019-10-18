import React, { Component } from 'react'
import { Layout, Row, Col } from 'antd'
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
    option1: '',
    option2: '',
    event1: '',
    event2: '',
    param1: '',
    param2: ''
  }

  componentDidMount() {
    this.loadShip(2)
    this.loadPrompt(1)
  }

  loadShip = () => {
    API.getShip()
      .then(res =>
        this.setState({
          userID: res.data[0].userId,
          shipID: res.data[0].shipId,
          shipName: res.data[0].shipName,
          maxArmor: res.data[0].maxHP,
          armor: res.data[0].maxHP,
          weapon: res.data[0].attack,
          shield: res.data[0].defense,
          thrust: res.data[0].speed,
          credits: res.data[0].credits
        })
      )
      .catch(err => console.error(err))
  }

  loadPrompt = pid => {
    API.getPrompt(pid)
      .then(res =>
        this.setState({
          prompt: res.data[0].prompt,
          option1: res.data[0].option1,
          option2: res.data[0].option2,
          event1: res.data[0].event1,
          event2: res.data[0].event2,
          param1: res.data[0].param1,
          param2: res.data[0].param2
        })
      )
      .catch(err => console.error(err))
  }

  randomize = (num) => {
    return Math.floor((Math.random() * num) + 1);
  }

  enemyShip = {
    weapon: 10,
    shield: 5,
    thrust: 5,
    maxArmor: 15,
    armor: 15,
    credits: 4,
  }

  hit = (dmg) => {
    this.enemyShip.armor -= dmg
    if (this.enemyShip.armor > (this.enemyShip.maxArmor / 2)) {
      this.loadPrompt(6)
    } else if (this.enemyShip.armor <= 0) {
      this.loadPrompt(8)
    } else {
      this.loadPrompt(7)
    }
  }

  hurt = (dmg) => {
    this.setState({
      armor: this.state.armor - dmg
    })
    if (this.state.armor > (this.state.maxArmor / 2)) {
      this.loadPrompt(11)
    } else if (this.state.armor <= 0) {
      this.loadPrompt(13)
    } else {
      this.loadPrompt(12)
    }
  }

  attack = () => {
    this.setState({
      credits: this.state.credits - 1
    })
    const fire = this.randomize(10) + this.state.weapon
    const opp = this.randomize(10) + this.enemyShip.shield
    console.log(this.state.weapon, this.enemyShip.shield)
    console.log(fire, opp)
    if (fire >= opp) {
      this.hit(this.randomize(10)) 
    } else {
      this.loadPrompt(9)
    }
  }

  defend = (param) => {
    let defense = (param === '0') ? 0 : this.state.shield
    const block = this.randomize(10) + defense
    const opp = this.randomize(10) + this.enemyShip.weapon
    if (opp >= block) {
      this.hurt(this.randomize(10))
    } else {
      this.loadPrompt(10)
    }
  }

  getFunction = (fn, param) => {
    switch (fn) {
      case "loadPrompt":
        this.loadPrompt(param)
        break;
      case "attack":
        this.attack()
        break;
      case "defend":
        this.defend(param)
        break;
      default:
        console.log("uh oh, spaghettios")
    }
  }

  render() {
    return (
      <div>
        <TopNav />
        <Content>
          <Row type='flex' gutter={20} style={{ padding: 24, margin: '0 3em' }}>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={16}
              style={{ border: '1px solid white' }}>
              <div style={{ marginTop: 20 }}>
                <div id='gradient'>
                  <img src='./images/placeholder.jpg' alt='placeholder' />
                </div>
                
            <Prompts
              getFunction={this.getFunction}
              promptID={this.state.promptID}
              prompt={this.state.prompt}
              option1={this.state.option1}
              option2={this.state.option2}
              event1={this.state.event1}
              event2={this.state.event2}
              param1={this.state.param1}
              param2={this.state.param2}
            />


              </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={8}>
              <div style={{minHeight: 200, marginTop: 20}}>
                <StatsList 
                  shipName={this.state.shipName}
                  armor={this.state.armor}
                  weapon={this.state.weapon}
                  shield={this.state.shield}
                  thrust={this.state.thrust}
                  hp={this.state.hp}
                  credits={this.state.credits}
                />
              </div>
            </Col>
          </Row>
        </Content>
        <Foot />
      </div>
    )
  }
}

export default Gameplay
