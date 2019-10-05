require('dotenv').config()
const express = require('express')
const routes = require('./routes')
const app = express()
const bodyParser = require('body-parser')
const passport = require('./routes/authentication/passport')
const session = require('express-session')
const PORT = process.env.PORT || 3001
// just here for testing queries easily as I make them will delete later
const orm = require('./orm')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

// Express Session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: true,
    cookie: { httpOnly: true, secure: 'auto', maxAge: 900000, rolling: true }
  })
)

// Passport init
app.use(passport.initialize())
app.use(passport.session())

// passport.serializeUser((user, done) => {
//   console.log(`Serialize ${user}`)
//   done(null, user)
// })

// passport.deserializeUser((user, done) => {
//   console.log(`Deserialize${user}`)
//   done(null, user)
// })

app.use(routes)

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
})

// orm
//   .insertOne('playerShip', {
//     userId: 1,
//     attack: 10,
//     defense: 10,
//     speed: 50,
//     maxHP: 100,
//     credits: 100,
//     name: 'Player one ship'
//   })
//   .then(res => console.log(res))

// orm
//   .userJoin(['U.userEmail', 'S.shipId', 'S.attack', 'S.defense', 'T.task'], 1)
//   .then(res => console.log(res))
