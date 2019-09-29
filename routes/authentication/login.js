const bcrypt = require('bcrypt')
const saltRounds = 10
const router = require('express').Router()
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const orm = require('../../orm')

// Authorizes with passport, redirect to route we want to land on after login
const login = (req, res) => {
  orm
    .tableWhere('users', 'userEmail', req.body.username)
    .then(user => {
      req.login({ userId: user[0].userId, name: user[0].name }, err => {
        if (err) {
          return console.error(err)
        }
        return res.redirect('/user')
      })
    })
    .catch(err => console.error(err))
}

// hashes password provided and saves new user to database
const hash = (req, res) => {
  bcrypt.hash(req.body.password, saltRounds).then(hash => {
    return orm
      .insertOne('users', {
        userEmail: req.body.username,
        userPassword: hash,
        name: req.body.name
      })
      .then(result => login(req, res))
      .catch(err => console.error(err))
  })
}

// allows user to add a password if they already have a googleId that they used to log in
// should be able to be used to update password if we want that also
const updateHash = (password, user, req, res) => {
  bcrypt.hash(password, saltRounds).then(hash => {
    return orm
      .updateOne('users', 'userPassword', hash, 'userId', user[0].userId)
      .then(result => login(req, res))
      .catch(err => console.error(err))
  })
}

// checks to see if user is logged in, use on pages that should only be visible to logged in users
const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next()
  } else {
    res.redirect('/')
  }
}

passport.use(
  new LocalStrategy((userEmail, userPass, done) => {
    orm
      .tableWhere('users', 'userEmail', userEmail)
      .then(user => {
        if (user.length === 0) {
          return done(null, false, { message: 'Unknown User' })
        }
        bcrypt.compare(userPass, user[0].userPassword, (err, res) => {
          if (err) {
            return done(err)
          }
          if (!res) {
            return done(null, false, { message: 'Invalid Password' })
          }
          return done(null, user)
        })
      })
      .catch(err => console.error(err))
  })
)

router
  // Endpoint to create a new account
  .post('/register', (req, res) => {
    orm
      .tableWhere('users', 'userEmail', req.body.username)
      .then(user => {
        if (user.length > 0 && user[0].googleId === null) {
          return res
            .send('That email address is already registered to an account')
            .redirect('/')
        }
        if (user.length > 0 && user[0].userPassword === null) {
          return updateHash(req.body.password, user, req, res)
        }
        return hash(req, res)
      })
      .catch(err => console.error(err))
  })
  // Endpoint to login
  // must name the incoming fields username / password
  .post('/login', passport.authenticate('local'), (req, res) => {
    res.send(req.user)
  })

  // Endpoint to get current user
  .get('/user', isLoggedIn, (req, res) => {
    res.send(req.user)
  })

  // Endpoint to logout
  .get('/logout', (req, res) => {
    req.logout()
    res.send(null)
  })

module.exports = router
