const router = require('express').Router()
const orm = require('../../orm')

router
  .get('/user/gameplay', (req, res) => {
    orm
      .tableWhere('playerShip', 'userId', Number(req.user.userId))
      .then(data => res.status(200).json(data))
      .catch(err => console.error(err))
  })
  .get('/user/gameplay/:promptId', (req, res) => {
    orm
      .tableWhere('prompts', 'promptId', Number(req.params.promptId))
      .then(data => res.status(200).json(data))
      .catch(err => console.error(err))
  })
  .put('/user/gameplay', (req, res) => {
    orm
      .updateOne(
        'playerShip',
        {
          attack: req.body.attack,
          defense: req.body.defense,
          speed: req.body.speed,
          maxHP: req.body.maxHP,
          credits: req.body.credits
        },
        'userId',
        req.user.userId
      )
      .then(data => res.status(200).json(data))
      .catch(err => console.error(err))
  })

module.exports = router
