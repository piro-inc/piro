const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const knex = require('./database/config')
const db = require('./database/utils')(knex)
const bcrypt = require('bcryptjs')
const cache = require('memory-cache')
const nJwt = require('njwt')
const secureRandom = require('secure-random')
require('dotenv').config()

function setup() {
  const strategy = new LocalStrategy((username, password, done) => {
    db.findOne('users', { username }, (err, user) => {
      if(!user) return done(null, false)
      bcrypt.compare(password, user.password, (err, res) => {
        return done(null, res && user)
      })
    })
  })

  passport.use(strategy)

  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    db.findOne('users', { id }, (err, user) => {
      return done(null, user)
    })
  })
}

function createToken(id) {
  // Create a highly random byte array of 256 bytes
  const signingKey = secureRandom(256, { type: 'Buffer' })
  //store the signing key in memory, for checking if jwt token is valid
  cache.put(id, signingKey.toString('base64'))

  const claims = {
    iss: 'url',  // The URL of the service
    sub: id,    // The UID of the user
    scope: 'self'
  }
  const jwt = nJwt.create(claims, signingKey)
  jwt.setExpiration(new Date().getTime() + (20*1000))
  return jwt.compact()
}

function authenticateUserId(req, res, next) {
  const keyStore = cache.get(req.params.id)
  const signingKey = keyStore && Buffer.from(keyStore, 'base64')
  if(req.cookies['jwt.token']) {
    nJwt.verify(req.cookies['jwt.token'], signingKey || new Buffer([]), (err, verifiedJwt) => {
      if(err) {
        // Token has expired, has been tampered with, etc
        console.log(err.message)
        res.sendStatus(403)
      } else {
        // Token is verified
        next()
      }
    })
  } else {
    res.sendStatus(403)
  }
}

module.exports = {
  setup,
  createToken,
  authenticateUserId
}
