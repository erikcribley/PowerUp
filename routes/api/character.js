const router = require('express').Router()
const orm = require('../../orm')
const { isAuth } = require('../authentication/passport')

router
  .get('/user/characters', isAuth, (_, res) => {
    orm
      .tableAll('defaultShip')
      .then(data => res.status(200).json(data))
      .catch(err => console.error(err))
  })
  .post('/user/characters', isAuth, (req, res) => {
    orm
      .insertOne('playerShip', {
        userId: Number(req.user.userId),
        attack: Number(req.body.ship.attack),
        defense: Number(req.body.ship.defense),
        speed: Number(req.body.ship.speed),
        maxHP: Number(req.body.ship.maxHP),
        credits: 5,
        name: req.body.name,
        picture: req.body.ship.picture
      })
      .then(data => res.status(200).send(true))
      .catch(err => console.error(err))
  })

module.exports = router
