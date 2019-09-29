const path = require('path')
const router = require('express').Router()
const passport = require('passport')
const apiRoutes = require('./api')
const googleAuth = require('./authentication/googleaAuth')
const formLogin = require('./authentication/login')

passport.serializeUser((user, done) => {
  console.log(`Serialize ${user}`)
  done(null, user)
})

passport.deserializeUser((user, done) => {
  console.log(`Deserialize${user}`)
  done(null, user)
})

router
  .use(googleAuth)
  .use(formLogin)
  .use(apiRoutes)

router.use((_, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

module.exports = router
