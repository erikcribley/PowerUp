require('dotenv').config()
const express = require('express')
const routes = require('./routes')
const app = express()
const bodyParser = require('body-parser')
const passport = require('passport')
const session = require('express-session')
const PORT = process.env.PORT || 3001

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

// Express Session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: true
  })
)

// Passport init
app.use(passport.initialize())
app.use(passport.session())

app.use(routes)

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
})
