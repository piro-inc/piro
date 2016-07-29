const express = require('express')
const app = express()
const path = require('path')
// Middleware

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const userRoutes = require('./routes/user')
const sessionRoutes = require('./routes/session')
const gameRoutes = require('./routes/game')
const passport = require('passport')

// Passport Setup
const setupPassport = require('./auth').setup

// Hooking up Express middleware

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '../public')))
app.use(passport.initialize())
setupPassport()

app.use('/', sessionRoutes)
app.use('/users', userRoutes)
app.use('/games', gameRoutes)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = app
