const express = require('express')
const router = express.Router()
const authenticateUserId = require('../auth').authenticateUserId
const gameUtils = require('../database/games_utils')

router.post('/:id', authenticateUserId, (req, res, next) => {
  // create a new game
  const data = req.body
  data.user_id = req.params.id
  console.log(data)
  gameUtils.addGame(data)
    .then(id => {
      console.log(id)
      res.json({ id })
    })
    .catch(err => {
      console.log(err)
      res.json(err)
    })
})

router.get('/', (req, res, next) => {
  gameUtils.getGamesInfo()
    .then(games => {
      if (games) {
        res.json(games)
      } else {
        res.sendStatus(404)
      }
    })
    .catch(err => {
      console.error(err)
      res.json(err)
    })
})

router.get('/:id', (req, res, next) => {
  // get a game by id
  const id = req.params.id
  gameUtils.getGameComments(id)
    .then(game => {
      if (game) {
        res.json(game)
      } else {
        res.sendStatus(404)
      }
    })
    .catch(err => {
      console.error(err)
      res.json(err)
    })
})

module.exports = router
