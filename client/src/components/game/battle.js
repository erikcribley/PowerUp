import React from 'react'

class Battle extends React.Component {

  random = (num) => Math.floor(Math.random() * num + 1)

  toHit = (attackMod, defMod) => {
    const attack = random(20) + attackMod
    const defense = random(20) + defMod
    console.log(attack, defense)

    if (attack >= defense) {
      return random(10)
    } else {
      return 0
    }
  }
}

export default Battle