import React from 'react'
import { Row, List } from 'antd'
import './style.css'

const data = [
    'XP:',
    'Ore:',
    'Health:',
    'Attack:',
    'Defense:',
    'Speed:',
    'Rank:',
    'Travel:',
]   

function StatsList() {
    return (
        <div >
            <Row style={{textAlign: "left"}}>
                <List
                size="small"
                dataSource={data}
                renderItem={item => <List.Item>{item}</List.Item>}
                />
            </Row>
        </div>
    )
}

export default StatsList