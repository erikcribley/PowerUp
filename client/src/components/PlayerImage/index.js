import React from 'react'
import { Row } from 'antd'
import './style.css'

function PlayerImage() {
    return (
        <div >
            <Row>
                <img src='./images/cruiser-md.svg' alt='Player Name' />
            </Row>
        </div>
    )
}

export default PlayerImage