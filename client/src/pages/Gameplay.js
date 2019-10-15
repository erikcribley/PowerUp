import React, { Component } from 'react'
import { Layout, Row, Col, Button } from 'antd'
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
  }

  componentDidMount() {
    this.loadShip()
    this.loadPrompt(1)
  }

  loadShip = () => {
    API.getShip(2)
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
          event2: res.data[0].event2
        })
      )
      .catch(err => console.error(err))
  }

  render() {
    return (
      <div>
        <TopNav />
        <Content>
          <Row type='flex' gutter={20} style={{padding: 24, margin: '0 3em'}}>
            <Col xs={24} sm={24} md={24} lg={16} style={{border: '1px solid white'}}>
              <div style={{marginTop: 20}}>
                <div id='gradient'>
                  <img src='./images/placeholder.jpg' alt='placeholder'/>
                </div>
                <div style={{minHeight: 200}}>
                  <Row>
                    <Col>
                      <div id='promptText'>
                      Prompt text goes here...
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={24} sm={24} md={12} lg={12}>
                      <Button
                        className='primaryBtn promptBtn'
                        block
                        >
                        Choice 1
                      </Button>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12}>
                      <Button
                        className='primaryBtn promptBtn'
                        block
                        >
                        Choice 2
                      </Button>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} style={{border: '1px solid white'}}>
              <div style={{minHeight: 200, marginTop: 20}}>
                <StatsList 
                  shipName={this.state.shipName}
                  armor={this.state.armor}
                  weapons={this.state.armor}
                  shield={this.state.shield}
                  thrust={this.state.thrust}
                  hp={this.state.hp} 
                  credits={this.state.credits}
                />
              </div>
            </Col>
          </Row>
          <div style={{ padding: 24, minHeight: 280 }}>
            <Prompts
              loadPrompt={this.loadPrompt}
              promptID={this.state.promptID}
              prompt={this.state.prompt}
              option1={this.state.option1}
              option2={this.state.option2}
              event1={this.state.event1}
              event2={this.state.event2}
            />
          </div>
        </Content>
        <Foot />
      </div>
    )
  }
}

export default Gameplay