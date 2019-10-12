const router = require('express').Router()
const orm = require('../../orm')
const { isAuth } = require('../authentication/passport')

router
  .get('/gameplay', isAuth, (req, res) => {
    orm.
      tableWhere(playership, useriD, Number(req.user.userId))
      .then(data => res.status(200).json(data))
      .catch(err => console.error(err))
  })
  .get('/gameplay', isAuth, (req, res) => {
    orm.
      tableWhere(prompts, promptId, Number(req.params.promptId))
      .then(data => res.status(200).json(data))
  })

module.exports = router