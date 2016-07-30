const utils = require('./utils')

const Knex = require('knex')
const knexConfig = require('../knexfile')

const knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])

function getUser (field, value) {
  return utils.getOne('users', field, value)
}

function addUser (obj) {
  return utils.addOne('users', obj)
}

function getUsersTable() {
  return utils.getAll('users')
}

module.exports = {
  getUser,
  addUser,
  getUsersTable
}
