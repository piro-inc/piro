const express = require('express')
const router = express.Router()
const passport = require('passport')
const createToken = require('../auth').createToken

router.post('/login', (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    console.log(user)
    if (user.error) {
      return res.json({
        error: 'Username does not exist.'
      })
    } else if (err) {
      return res.json(err)
    } else if (!user) {
      return res.json({
        error: 'Incorrect Password.'
      })
    } else {
      req.login(user, (err) => {
        if (err) return next(err)
        delete user.password
        const token = createToken(user.id)
        console.log(token)
        res.cookie('jwt.token', token, { httpOnly: true, maxAge: 1000 * 1000 })
        res.json(user)
      })
    }
  })(req, res)
})

router.post('/logout', (req, res, next) => {
  res.redirect('/')
})

module.exports = router
