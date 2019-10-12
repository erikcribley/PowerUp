const router = require('express').Router()
const orm = require('../../orm')
const { isAuth } = require('../authentication/passport')

// Can replace req.user.userId with whatever userId number for testing
router
  .get('/gameplay', (req, res) => {
    orm
      .tableWhere('playership', 'userId', Number(req.user.userId))
      .then(data => res.status(200).json(data))
      .catch(err => console.error(err))
  })
  .get('/gameplay/:promptId', (req, res) => {
    orm
      .tableWhere('prompts', 'promptId', Number(req.params.promptId))
      .then(data => res.status(200).json(data))
  })

module.exports = router
