import React, { Component } from 'react'
import RightMenu from './right-menu'
import { Drawer, Button, Menu } from 'antd'
import './style.css'

class Navbar extends Component {
  state = {
    visible: false
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    })
  }

  onClose = () => {
      this.setState({
        visible: false,
      })
  }

  render() {
      return (
          <nav className="menuBar">
              <div className="logo">
                  <a href="/stats">
                    <img src='./images/Power-Up-logo.png' alt='Power Up logo' />
                  </a>
              </div>
              <div className="menuCon">
                  <div className="rightMenu">
                  <RightMenu />
                  </div>
                  <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
                  <span className="barsBtn"></span>
                  </Button>
                  <Drawer
                  // title="Basic Drawer"
                  placement="right"
                  closable={false}
                  onClose={this.onClose}
                  visible={this.state.visible}
                  >
                    <Menu mode="vertical">
                      <Menu.Item>
                        <a href="/stats">Stats</a>
                      </Menu.Item>
                      <Menu.Item>
                        <a href="/tasks">Tasks</a>
                      </Menu.Item>
                      <Menu.Item>
                        <a href="/store">Store</a>
                      </Menu.Item>
                      <Menu.Item>
                        <a href="/gameplay">Gameplay</a>
                      </Menu.Item>
                      <Menu.Item>
                        <a href="/logout">Log Out</a>
                      </Menu.Item>
                    </Menu>
                  </Drawer>
              </div>
          </nav>
      )
    }
}

export default Navbar