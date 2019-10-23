const router = require('express').Router()
const orm = require('../../orm')
const { isAuth } = require('../authentication/passport')

router
  .get('/user/tasks', isAuth, (req, res) => {
    orm
      .taskPages(Number(req.user.userId))
      .then(data => res.status(200).json(data))
      .catch(err => console.error(err))
  })
  .post('/user/tasks', isAuth, (req, res) => {
    orm
      .insertOne('taskList', {
        userId: Number(req.user.userId),
        task: req.body.task,
        taskCredit: req.body.taskCredit
      })
      .then(data => res.status(200).json(data))
      .catch(err => console.error(err))
  })
  .put('/user/tasks', isAuth, (req, res) => {
    orm
      .updateOne(
        'taskList',
        'task',
        req.body.task,
        'taskId',
        Number(req.body.taskId)
      )
      .then(data => res.status(200).json(data))
      .catch(err => console.error(err))
  })
  .put('/user/credits', isAuth, (req, res) => {
    orm
      .updateOne(
        'playerShip',
        { credits: req.body.credits },
        'userId',
        req.user.userId
      )
      .then(data => res.status(200).json(data))
      .catch(err => console.error(err))
  })
  .delete('/user/tasks/:taskId', isAuth, (req, res) => {
    orm
      .deleteOne('taskList', 'taskId', Number(req.params.taskId))
      .then(data => res.status(200).json(data))
      .catch(err => console.error(err))
  })

module.exports = router
