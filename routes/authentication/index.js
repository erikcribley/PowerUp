const router = require('express').Router()
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((user, done) => {
  done(null, user)
})

passport.use(
  new GoogleStrategy(
    {
      clientID:
        '9011043381-i0ff2niqqfqho5osvjbf0tcieui56cco.apps.googleusercontent.com',
      clientSecret: 'dfwLKn4Der9yG1h2thdMcNVP',
      callbackURL: 'http://localhost:3001/auth/google/callback',
      scope: ['email']
    },

    (accessToken, refreshToken, profile, cb) => {
      const userData = {
        email: profile.emails[0].value,
        name: profile.displayName,
        token: accessToken
      }
      console.log('Authenticated1:', userData)
      return cb(null, userData)
    }
  )
)

router
  .get(
    '/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
  )
  .get(
    '/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/', session: false }),
    (req, res) => {
      // const token = req.user.token
      console.log('Authenticated2:', req.user)
      res.json(req.user)
    }
  )

module.exports = router
