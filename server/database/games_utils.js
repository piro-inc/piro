const utils = require('./utils')

const Knex = require('knex')
const knexConfig = require('../knexfile')

const knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])

function getGame (field, value) {
  return utils.getOne('games', field, value)
}

function addGame (obj) {
  return utils.addOne('games', obj)
}

function getGamesTable() {
  return utils.getAll('games')
}

module.exports = {
  getGame,
  addGame,
  getGamesTable
}
