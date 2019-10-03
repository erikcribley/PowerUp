const router = require('express').Router()
const passport = require('./passport')
// const GoogleStrategy = require('passport-google-oauth20').Strategy
const orm = require('../../orm')

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackURL: process.env.GOOGLE_CALLBACK_URL,
//       scope: ['email']
//     },

//     (accessToken, refreshToken, profile, done) => {
//       const userData = {
//         googleId: profile.id,
//         email: profile.emails[0].value,
//         name: profile.displayName,
//         token: accessToken
//       }
//       return done(null, userData)
//     }
//   )
// )

// logs the user in after they have been authenticated by google
const login = (req, res) => {
  orm
    .tableWhere('users', 'userEmail', req.user.email)
    .then(user => {
      req.login(
        { userId: user[0].userId, name: user[0].name, token: req.user.token },
        err => {
          if (err) {
            return console.error(err)
          }
          return res.redirect('/tasks')
        }
      )
    })
    .catch(err => console.error(err))
}

// saves new user to db
const newUser = (req, res) => {
  orm
    .insertOne('users', {
      userEmail: req.user.email,
      googleId: req.user.googleId,
      name: req.user.name
    })
    .catch(err => console.error(err))
}

// adds google id to existing user
const existingUser = (req, res) => {
  orm
    .updateOne('users', 'googleId', req.user.id, 'userEmail', req.user.email)
    .catch(err => console.error(err))
}

router
  .get(
    '/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
  )
  .get(
    '/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/', session: true }),
    (req, res) => {
      orm
        .tableWhere('users', 'userEmail', req.user.email)
        .then(data => {
          if (data.length > 0 && data[0].googleId === null) {
            return existingUser(req, res)
          }
          if (data.length === 0) {
            return newUser(req, res)
          }
        })
        .then(results => login(req, res))
        .catch(err => console.error(err))
    }
  )

module.exports = router
