const router = require('express').Router()
const orm = require('../../orm')
const { isAuth } = require('../authentication/passport')

router
  .get('/ship/:userId', isAuth, (req, res) => {
    orm.
      tableAll(playership)
      .then(data => res.status(200).json(data))
  })
  .get('/prompt/:promptId'), isAuth, (req, res) => {
    orm. 
      tableAll(prompts)
      .then(data => res.status(200).json(data))
  }

module.exports = router