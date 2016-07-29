const express = require('express')
const app = express()
const path = require('path')
// Middleware

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const passport = require('passport')

// Passport Setup

// const setupPassport = require('./auth').setup

// Hooking up Express middleware

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '../public')))
app.use(passport.initialize())
// setupPassport()

app.get('*', (req, res) => {
  res.send('hi')
})

module.exports = app
