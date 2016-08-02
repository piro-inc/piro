const express = require('express')
const app = express()
const path = require('path')

const favicon = require('serve-favicon')
// Middleware

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const userRoutes = require('./routes/user')
const sessionRoutes = require('./routes/session')
const gameRoutes = require('./routes/game')
const passport = require('passport')
const compression = require('compression')

// Passport Setup
const setupPassport = require('./auth').setup

// Hooking up Express middleware
app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '../public')))
app.use(favicon(path.join(__dirname, '../public/favicon-white.ico')))
app.use(passport.initialize())
setupPassport()

app.use('/api/', sessionRoutes)
app.use('/api/users', userRoutes)
app.use('/api/games', gameRoutes)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = app
