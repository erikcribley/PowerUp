const path = require('path')
const router = require('express').Router()
const apiRoutes = require('./api')
const authenticationRoutes = require('./authentication')

router.use(authenticationRoutes)

router.use(apiRoutes)

router.use((_, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

module.exports = router
