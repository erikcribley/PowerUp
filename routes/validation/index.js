const { check, validationResult } = require('express-validator')

module.exports = {
  register: [
    check('username', 'Your email is not valid')
      .not()
      .isEmpty()
      .isEmail()
      .normalizeEmail()
      .trim(),

    check('password')
      .isLength({ min: 8 })
      .withMessage('Password must be at least 8 characters')
      .matches('[0-9]')
      .withMessage('Password must contain at least 1 number')
      .matches('[a-z]')
      .withMessage('Password must contain at least 1 lowercase letter')
      .matches('[A-Z]')
      .withMessage('Password must contain at least 1 uppercase letter')
  ],

  login: [
    check('username', 'Your email is not valid')
      .not()
      .isEmpty()
      .isEmail()
      .normalizeEmail()
      .trim()
  ],

  result: (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).jsonp(errors.array())
    } else {
      next()
    }
  }
}
