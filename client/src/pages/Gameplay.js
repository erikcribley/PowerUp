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

  loadPrompt = (pid) => {
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

  // random = (num) => {
  //   return Math.floor((Math.random() * num) + 1);
  // }

  // pirateShip = {
  //   weapon: 10,
  //   sheild: 5,
  //   thrust: 5,
  //   armor: 15,
  //   credits: 4,
  // }

  // attack = () => {
  //   const fire = random(10) + this.state.weapon
  //   const opp = random(10) + this.pirateShip.sheild
  //   if (fire >= opp) {
  //     this.pirateShip.armor =- fire
  //   } else {

  //   }
  //   return this.setState({
  //     credits: res.data
  //   })
  // }

  // defend = () => {
  //   const block = random(10) + this.state.sheild
  //   const opp = random(10) + this.pirateShip.weapon
  //     if (opp >= block) {
  //       this.state.hp =- opp
  //     }
  // }

  getFunction = (fn, param) => {
    switch (fn) {
      case "loadPrompt":
        this.loadPrompt(param)
        break;
      // case "attack":
      //   this.attack()
      //   break;
      // case "defend":
      //   this.defend()
      //   break;
      default:
        console.log("uh oh, spaghettios")
    }
  }

  render() {
    return (
      <div>
        <TopNav />

        <Content>
          <div style={{ padding: 24, minHeight: 280 }}>

            <StatsList 
              shipName={this.state.shipName}
              armor={this.state.armor}
              weapon={this.state.weapon}
              shield={this.state.shield}
              thrust={this.state.thrust}
              hp={this.state.hp} 
              credits={this.state.credits}
            /> 

            {/* <div>
              <p>{this.state.prompt}</p>
              <button onClick={() => this.getFunction(this.state.event1, this.state.param1)}> {this.state.option1} </button>
              <button onClick={() => this.getFunction(this.state.event2, this.state.param2)}> {this.state.option2} </button>
            </div> */}


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
        </Content>

        <Foot />
      </div>
    )
  }
}

export default Gameplay