const Knex = require('knex')
const knexConfig = require('../knexfile')

const knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])

function getOne(table, params) {
  return knex(table).where(params)
}

function addOne(table, obj) {
  return knex(table).returning('id').insert(obj)
}

module.exports = {
  getOne,
  addOne
}