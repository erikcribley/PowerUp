import React from 'react'
import { Table } from 'antd'
import './style.css'

const columns = [
  {
    title: 'Stat',
    dataIndex: 'stat',
    key: 'stat',
  },
  {
    title: 'Data',
    dataIndex: 'data',
    key: 'data',
  }
]

const data = [
  {
    key: '1',
    stat: 'XP',
    data: 15
  },
  {
    key: '1',
    stat: 'Attack',
    data: 30
  },
  {
    key: '1',
    stat: 'Defense',
    data: 60
  },
  {
    key: '1',
    stat: 'Speed',
    data: 50
  },
  {
    key: '1',
    stat: 'HP',
    data: 90
  },
  {
    key: '1',
    stat: 'Ore',
    data: 30
  }
]

function StatsList() {
    return (<Table columns={columns} dataSource={data} />)
}

export default StatsList