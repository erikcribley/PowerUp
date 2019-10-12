const router = require('express').Router()
const orm = require('../../orm')
const { isAuth } = require('../authentication/passport')

router.get('/stats', isAuth, (req, res) => {
  orm
    .userStats(Number(req.user.userId))
    .then(data => res.status(200).json(data))
    .catch(err => console.error(err))
})

module.exports = router
