const bcrypt = require('bcrypt')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const GoogleStrategy = require('passport-google-oauth20').Strategy
const orm = require('../../orm')

passport.serializeUser((user, done) => {
  console.log(`Serialize ${user}`)
  done(null, user)
})

passport.deserializeUser((user, done) => {
  console.log(`Deserialize${user}`)
  done(null, user)
})

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
          const userData = { userId: user[0].userId, name: user[0].name }
          console.log('Strategy:' + userData)
          return done(null, userData)
        })
      })
      .catch(err => console.error(err))
  })
)

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
      scope: ['email']
    },

    (accessToken, refreshToken, profile, done) => {
      const userData = {
        googleId: profile.id,
        email: profile.emails[0].value,
        name: profile.displayName,
        token: accessToken
      }
      console.log('Google' + userData)
      return done(null, userData)
    }
  )
)

module.exports = passport
