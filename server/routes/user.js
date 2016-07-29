const express = require('express')
const router = express.Router()
// const knex = require('../database/config')
// const db = require('../database/utils')(knex)
// const bcrypt = require('bcryptjs')
// const authenticateUserId = require('../auth').authenticateUserId

// router.post('/', (req, res, next) => {
//   // create a new user
//   const data = req.body
//   bcrypt.hash(data.password, 10, (err, hash) => {
//     data.password = hash
//     db.add('users', data, (err, resp) => {
//       if (err) {
//         console.error(err)
//         res.json(err)
//       } else {
//         res.json({ id: resp })
//       }
//     })
//   })
// })
//
// router.get('/:id', authenticateUserId, (req, res, next) => {
//   // get a user by id
//   const id = req.params.id
//   db.findOne('users', { id }, (err, resp) => {
//     if (resp) {
//       res.json({ username: resp.username, id: resp.id })
//     } else {
//       res.sendStatus(404)
//     }
//   })
// })

module.exports = router
