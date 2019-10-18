import React from 'react'
import { Menu } from 'antd'
import './style.css'

function RightMenu(props) {
  return (
    <Menu mode='horizontal'>
      <Menu.Item>
        <a href='/stats'>Stats</a>
      </Menu.Item>
      <Menu.Item>
        <a href='/tasks'>Tasks</a>
      </Menu.Item>
      <Menu.Item>
        <a href='/store'>Store</a>
      </Menu.Item>
      <Menu.Item>
        <a href='/gameplay'>Gameplay</a>
      </Menu.Item>
      <Menu.Item>
        <a
          href='/logout'
          // onClick={() => sessionStorage.clear()}
        >
          Log Out
        </a>
      </Menu.Item>
    </Menu>
  )
}

export default RightMenu
