const router = require('express').Router()
const passport = require('../authentication/passport')
const orm = require('../../orm')

const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next()
  } else {
    res.redirect('/')
  }
}

router.get('/tasks', (req, res) => {
  // console.log(req.user.userId)
  console.log(req.session)
  orm
    .tableColumnWhere('task', 'taskList', 'userId', req.user.userId)
    .then(data => res.send(data))
})

module.exports = router
