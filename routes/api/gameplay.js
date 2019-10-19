const router = require('express').Router()
const orm = require('../../orm')
const { isAuth } = require('../authentication/passport')

// Can replace req.user.userId with whatever userId number for testing
router
  .get('/user/gameplay', (req, res) => {
    orm
      .tableWhere('playerShip', 'userId', Number(1))
      .then(data => res.status(200).json(data))
      .catch(err => console.error(err))
  })
  .get('/user/gameplay/:promptId', (req, res) => {
    orm
      .tableWhere('prompts', 'promptId', Number(req.params.promptId))
      .then(data => res.status(200).json(data))
  })

module.exports = router