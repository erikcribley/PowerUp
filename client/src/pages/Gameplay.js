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
    this.restart()
  }

  restart = () => {
    this.loadShip()
    this.loadPrompt(1)
    this.enemyShip.reset()
  }

  gameOver = async () => {
    this.setState({
      credits: this.state.credits - 1
    })
    await this.setState
    if (this.state.credits <= 0) {
      this.loadPrompt(14)
    }
  }

  exit = () => {
    window.location.href = '/tasks'
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
          param2: res.data[0].param2,
          image: res.data[0].image
        })
      )
      .catch(err => console.error(err))
  }

  randomize = num => {
    return Math.floor(Math.random() * num + 1)
  }

  enemyShip = {
    weapon: 10,
    shield: 5,
    thrust: 10,
    maxArmor: 15,
    armor: 15,
    credits: 4,
    reset: function() {
      this.weapon = 10
      this.shield = 5
      this.thrust = 10
      this.maxArmor = 10
      this.armor = 10
    }
  }

  hit = async dmg => {
    const registerDmg = this.enemyShip.armor -= dmg
    await registerDmg
    if (this.enemyShip.armor > this.enemyShip.maxArmor / 2) {
      this.loadPrompt(6)
    } else if (this.enemyShip.armor <= 0) {
      this.loadPrompt(8)
    } else {
      this.loadPrompt(7)
    }
  }

  hurt = async dmg => {
    this.setState({
      armor: this.state.armor - dmg
    })
    await this.setState
    if (this.state.armor > this.state.maxArmor / 2) {
      this.loadPrompt(11)
    } else if (this.state.armor <= 0) {
      this.loadPrompt(13)
    } else {
      this.loadPrompt(12)
    }
  }

  attack = () => {
    this.gameOver()
    const fire = this.randomize(20) + this.state.weapon
    const opp = this.randomize(20) + this.enemyShip.shield
    if (fire >= opp) {
      this.hit(this.randomize(10))
    } else {
      this.loadPrompt(9)
    }
  }

  defend = param => {
    let defense = param === '0' ? 0 : this.state.shield
    if (param !== '0') {
      this.gameOver()
    }
    const block = this.randomize(10) + defense
    const opp = this.randomize(10) + this.enemyShip.weapon
    if (opp >= block) {
      this.hurt(this.randomize(10))
    } else {
      this.loadPrompt(10)
    }
  }

  flee = param => {
    let flight = param === '0' ? 0 : this.state.thrust
    if (param !== '0') {
      this.gameOver()
    }
    let speed = this.randomize(10) + flight
    let opp = this.randomize(10) + this.enemyShip.thrust
    if (opp >= speed) {
      this.loadPrompt(15)
    } else {
      this.loadPrompt(16)
    }
  }

  pursue = param => {
    let flight = param === '0' ? 0 : this.state.thrust
    if (param !== '0') {
      this.gameOver()
    }
    let speed = this.randomize(10) + flight
    let opp = this.randomize(10) + this.enemyShip.thrust
    if (opp >= speed) {
      this.loadPrompt(18)
    } else {
      this.loadPrompt(19)
    }
  }

  upgrade = param => {
    switch (param) {
      case 'weapon':
        this.setState({
          weapon: this.state.weapon + 5
        })
        this.loadPrompt(21)
        break
      case 'thrust':
        this.setState({
          thrust: this.state.thrust + 5
        })
        this.loadPrompt(22)
        break
      default:
        console.log('uh oh, spaghettios')
    }
  }

  getFunction = (fn, param) => {
    switch (fn) {
      case 'loadPrompt':
        this.loadPrompt(param)
        break;
      case 'attack':
        this.attack()
        break;
      case 'defend':
        this.defend(param)
        break
      case 'flee':
        this.flee(param)
        break
      case 'pursue':
        this.pursue(param)
        break
      case 'restart':
        this.restart()
        break
      case 'upgrade':
        this.upgrade(param)
        break
      case 'exit':
        this.exit()
        break;
      case "repair":
        this.repair()
        break;
      default:
        console.log('uh oh, spaghettios')
    }
  }

  render() {
    return (
      <div>
        <TopNav />
        <Content>
          <Row type='flex' gutter={20} style={{ padding: 24, margin: '0 3em' }}>
            <Col xs={24} sm={24} md={24} lg={16}>
              <div style={{ marginTop: 20 }}>
                <div id='gradient'>
                  <img src={this.state.image} alt='space adventure' />
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

              <div style={{ padding: 24, minHeight: 280 }}>
                <StatsList
                  shipName={this.state.shipName}
                  armor={this.state.armor}
                  weapon={this.state.weapon}
                  shield={this.state.shield}
                  thrust={this.state.thrust}
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
