const express = require('express')
const router = express.Router()
const passport = require('passport')
const createToken = require('../auth').createToken

router.post('/login', (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err) return res.redirect('/')
    if (!user) return res.redirect('/')
    else {
      req.login(user, (err) => {
        if (err) return next(err)
        delete user.password
        res.cookie('jwt.token', createToken(user.id), { httpOnly: true, maxAge: 20 * 1000 })
        res.json(user)
      })
    }
  })(req, res)
})

router.post('/logout', (req, res, next) => {
  res.redirect('/')
})

module.exports = router
