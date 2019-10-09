const orm = require('../../orm')
const router = require('express').Router()

router
  .get('/loaddefaultship', (req, res) => {
    orm
      .tableAll(defaultship)
    res.send(req.defaultship)
    console.log(defaultship)
  })

module.exports = router
