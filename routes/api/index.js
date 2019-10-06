const router = require('express').Router()
const orm = require('../../orm')
const { isAuth } = require('../authentication/passport')

router
  .get('/tasks', isAuth, (req, res) => {
    orm
      .tableColumnWhere('task', 'taskList', 'userId', req.user.userId)
      .then(data => res.status(200).json(data))
  })
  .post('/tasks', isAuth, (req, res) => {
    orm
      .insertOne('taskList', {
        userId: req.user.userId,
        task: req.body.task
      })
      .then(data => res.status(200).json(data))
  })

module.exports = router
