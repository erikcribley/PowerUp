import React from 'react'
import { Table } from 'antd'
import './style.css'

function StatsList (props) {
  const columns = [
    {
      title: 'Stat',
      dataIndex: 'stat',
      key: 'stat'
    },
    {
      title: 'Data',
      dataIndex: 'data',
      key: 'data'
    }
  ]

  const data = [
    {
      key: 'Attack',
      stat: 'Attack',
      data: props.stats.attack
    },
    {
      key: 'Defense',
      stat: 'Defense',
      data: props.stats.defense
    },
    {
      key: 'Speed',
      stat: 'Speed',
      data: props.stats.speed
    },
    {
      key: 'maxHP',
      stat: 'HP',
      data: props.stats.maxHP
    },
    {
      key: 'Credits',
      stat: 'Credits',
      data: props.stats.credits
    }
  ]
  return <Table columns={columns} dataSource={data} />
}

export default StatsList
