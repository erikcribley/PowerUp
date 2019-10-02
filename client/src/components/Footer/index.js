import React from 'react'
import { Layout } from 'antd'
import './style.css'

const { Footer } = Layout

function Foot() {
    return (
        <Footer style={{ textAlign: 'center', bottom: 0 }}>PowerUp ©2019 Mitch, Erik and Matt</Footer>
    )
}

export default Foot