const router = require('express').Router()
const { passport } = require('./passport')
const orm = require('../../orm')

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
          return res.status(200).redirect('/characters')
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
      googleId: req.user.googleId
    })
    .catch(err => console.error(err))
}

// adds google id to existing user
const existingUser = (userId, req, res) => {
  orm
    .updateOne('users', 'googleId', req.user.googleId, 'userId', userId)
    .catch(err => console.error(err))
}

router
  // .get(
  //   '/auth/google',
  //   passport.authenticate('google', { scope: ['profile', 'email'] })
  // )
  .get(
    '/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/', session: true }),
    (req, res) => {
      orm
        .tableWhere('users', 'userEmail', req.user.email)
        .then(user => {
          if (user.length > 0 && user[0].googleId === null) {
            return existingUser(user[0].userId, req, res)
          }
          if (user.length === 0) {
            return newUser(req, res)
          }
        })
        .then(results => login(req, res))
        .catch(err => console.error(err))
    }
  )

module.exports = router
