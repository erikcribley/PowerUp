import React from 'react'

//make sure stats are from current user

function StatBlock (props) {
  return (
    <div className="stat-block">
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

export default StatBlock