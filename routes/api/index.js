const router = require('express').Router()
const character = require('./character')
const gameplay = require('./gameplay')
const stats = require('./stats')
const store = require('./store')
const tasks = require('./tasks')

router
  .use(character)
  .use(gameplay)
  .use(stats)
  .use(store)
  .use(tasks)

module.exports = router
