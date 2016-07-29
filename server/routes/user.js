const express = require('express')
const router = express.Router()
const db = require('../database/utils')
const bcrypt = require('bcryptjs')
const authenticateUserId = require('../auth').authenticateUserId

router.post('/', (req, res, next) => {
  // create a new user
  const data = req.body
  bcrypt.hash(data.password, 10, (err, hash) => {
    if (err) return console.error(err)
    data.password = hash
    db.addOne('users', data)
      .then(id => {
        res.json({ id })
      })
      .catch(err => {
        console.error(err)
        res.json(err)
      })
  })
})

router.get('/:id', authenticateUserId, (req, res, next) => {
  // get a user by id
  const id = req.params.id
  db.getOne('users', { id })
    .then(user => {
      user = user[0]
      if (user) {
        res.json({ username: user.username, email: user.email, id: user.id })
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
