import React from 'react'
import { Menu } from 'antd'
import './style.css'

function RightMenu() {
    return (
    <Menu mode="horizontal">
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
      </Menu>
    )
}

export default RightMenu