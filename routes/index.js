const path = require('path')
const router = require('express').Router()
const apiRoutes = require('./api')
const googleAuth = require('./authentication/googleaAuth')
const formLogin = require('./authentication/login')

router
  .use(googleAuth)
  .use(formLogin)
  .use(apiRoutes)

router.use((_, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

module.exports = router
