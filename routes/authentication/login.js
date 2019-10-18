const bcrypt = require('bcrypt')
const saltRounds = 10
const router = require('express').Router()
const { passport, isAuth } = require('./passport')
const validate = require('../validation')
const orm = require('../../orm')

// Authorizes with passport
const login = (req, res) => {
  orm
    .tableWhere('users', 'userEmail', req.body.username)
    .then(user => {
      req.login({ userId: user[0].userId, name: user[0].name }, err => {
        if (err) {
          return console.error(err)
        }
        return res.status(200).send('Logging in!')
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
        userPassword: hash
      })
      .then(result => {
        orm.newUserTasks(result)
        return login(req, res)
      })
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

router
  // Endpoint to create a new account
  .post('/register', validate.register, validate.result, (req, res) => {
    orm
      .tableWhere('users', 'userEmail', req.body.username)
      .then(user => {
        if (user.length > 0 && user[0].googleId === null) {
          return res
            .status(401)
            .send('Email address already in use please login')
        }
        if (user.length > 0 && user[0].userPassword === null) {
          return updateHash(req.body.password, user, req, res)
        }
        if (user.length > 0 && user[0].userPassword) {
          return res
            .status(401)
            .send('Email address already in use please login')
        }
        return hash(req, res)
      })
      .catch(err => console.error(err))
  })
  // Endpoint to login
  // must name the incoming fields username / password
  .post('/login', validate.login, validate.result, (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
      if (err) {
        return res.status(500).send(err)
      }
      if (!user) {
        return res.status(401).send(info.message)
      }
      return req.login(user, err => {
        if (err) {
          return next(err)
        }
        return res.status(200).send(info.message)
      })
    })(req, res, next)
  })

  // Endpoint to get current user
  .get('/user', isAuth, (req, res) => {
    res.json(req.user)
  })

  // Endpoint to logout
  .get('/logout', isAuth, (req, res) => {
    req.logout()
    req.session.destroy()
    res.status(200).redirect('/unauthorized')
  })

module.exports = router
