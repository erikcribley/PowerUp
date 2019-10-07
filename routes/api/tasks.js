const router = require('express').Router()
const orm = require('../../orm')
const { isAuth } = require('../authentication/passport')

router
  .get('/tasks/:taskId/:numTasks', isAuth, (req, res) => {
    orm
      .taskPages(req.user.userId, req.params.taskId, req.params.numTasks)
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
  .put('/tasks', isAuth, (req, res) => {
    orm
      .updateOne('taskList', 'task', req.body.task, 'taskId', req.body.taskId)
      .then(data => res.status(200).json(data))
  })
  .delete('/tasks', isAuth, (req, res) => {
    orm
      .deleteOne('taskList', 'taskId', req.body.taskId)
      .then(data => res.status(200).json(data))
  })

module.exports = router
