const router = require('express').Router()
const orm = require('../../orm')

router.route('/').get((_, res) => {
  orm.tableAll('taskList').then(data => res.json(data))
})

module.exports = router
