const Knex = require('knex')
const knexConfig = require('../knexfile')

const knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])

function getOne (table, field, value) {
  return knex(table).where(field, value)
}

function addOne (table, obj) {
  return knex(table).returning('id').insert(obj)
}

function getAll (table) {
  return knex(table)
}

module.exports = {
  getOne,
  addOne,
  getAll
}
