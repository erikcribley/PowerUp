import React from 'react'
import StatBlock from './statblock'
import PromptBox from './prompt'

//placeholder objects for database values
let ship = {
  id: 1,
  name:  "Public Domain Millenium Falcon",
  attack:  10,
  defense:  10,
  speed:  50,
  maxHP: 100,
  currentHP: 100,
  credits: 100 
}

let prizzompts = {
  id:  1,
  prompt:  "You recieve a distress signal from a disabled ship. Do you respond?",
  options:  "Yep, Nope",
  events:  "console.log('doodoo'), console.log('doubledoodoo)"
}

let enemy = {
  hp: 100,
  currentHP: 100,
  attack: 5,
  defense: 10
}

//randomizer function
const random = (num) => Math.floor(Math.random() * num + 1)

//attack function
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

class Game extends React.Component {

  // initialize with user id, load correct ship

  //present prompts and choices

  //render on screen elements

  //on screen stat boxes?

  render() {
    return (
      <div className="wrapper">
        <StatBlock
          shipName={ship.name}
          armor={ship.maxHP}
          weapons={ship.attack}
          shield={ship.defense}
          thrust={ship.speed}
          hp={ship.currentHP} 
          credits={ship.credits}

        />
        <PromptBox
          prompt={prizzompts.prompt}
          options={prizzompts.options}
          events={prizzompts.events}
        />
      </div>
    )
  }
}
