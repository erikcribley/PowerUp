import React from 'react'
import { Table } from 'antd'
import './style.css'

function StatsList(props) {
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
      key: 'Weapon',
      stat: 'Weapon',
      data: props.weapon
    },
    {
      key: 'Shield',
      stat: 'Shield',
      data: props.shield
    },
    {
      key: 'Armor',
      stat: 'Armor',
      data: props.armor
    },
    {
      key: 'Thrust',
      stat: 'Thrust',
      data: props.thrust
    },
    {
      key: 'Power',
      stat: 'Power',
      data: props.credits
    }
  ]
  return <Table columns={columns} dataSource={data} />
}

export default StatsList
