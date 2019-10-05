const router = require('express').Router()
const passport = require('../authentication/passport')
const orm = require('../../orm')

const isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    next()
  } else {
    res.status(403).redirect('/')
  }
}

router.get('/tasks', isAuth, (req, res) => {
  orm
    .tableColumnWhere('task', 'taskList', 'userId', req.user.userId)
    .then(data => res.send(data))
})

module.exports = router
