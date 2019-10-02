import React from 'react'
import { Layout, Menu } from 'antd'
import './style.css'

const { Header } = Layout

function TopNav() {
    return (
        <Header>
            <div className="logo">
            <img src="./images/logo.svg" />
            </div>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="1">Stats</Menu.Item>
                <Menu.Item key="2">Tasks</Menu.Item>
                <Menu.Item key="3">Store</Menu.Item>
                <Menu.Item key="4">Gameplay</Menu.Item>
            </Menu>
        </Header>
    )
}

export default TopNav