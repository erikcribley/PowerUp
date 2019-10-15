const router = require('express').Router()
const orm = require('../../orm')
const { isAuth } = require('../authentication/passport')

router
  .get('/characters', isAuth, (_, res) => {
    orm
      .tableAll('defaultShip')
      .then(data => res.status(200).json(data))
      .catch(err => console.error(err))
  })
  .post('/characters', isAuth, (req, res) => {
    orm
      .insertOne('playerShip', {
        userId: req.user.userId,
        attack: req.body.ship.attack,
        defense: req.body.ship.defense,
        speed: req.body.ship.speed,
        maxHP: req.body.ship.maxHP,
        credits: 100,
        name: req.body.name,
        picture: req.body.ship.picture
      })
      .then(data => res.status(200).send(true))
      .catch(err => console.error(err))
  })

module.exports = router
