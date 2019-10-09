import React from 'react'

function StatsList(props) {
  return (
    <div className="stats-list">
      <div>
        {props.shipName}
        Armor: {props.armor}
        Weapons: {props.weapons}
        Shield: {props.shield}
        Thrust: {props.thrust}
        HP: {props.hp} 
        Credits: {props.credits}

      </div>
    </div>
  )
}

export default StatsList
