const utils = require('./utils')

const Knex = require('knex')
const knexConfig = require('../knexfile')

const knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])

function getComments (field, value) {
  return utils.getOne('comments', field, value)
}

function getCommentsTable() {
  return utils.getAll('comments')
}

function addComment (obj) {
  return utils.addOne('comments', obj)
}

module.exports = {
  getComments,
  getCommentsTable,
  addComment
}
