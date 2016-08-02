const Knex = require('knex')
const knexConfig = require('../knexfile')

const knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])

function getOne (table, params) {
  return knex(table).where(params)
}

function addOne (table, obj) {
  return knex(table).returning('id').insert(obj)
}

function getAll (table) {
  return knex(table)
}

function update (table, searchParams, updateInfo) {
  return knex(table).where(searchParams).update(updateInfo, 'id')
}

function deleteRow (table, params) {
  return knex(table).where(params).del()
}

module.exports = {
  knex,
  getOne,
  addOne,
  getAll,
  update,
  deleteRow
}
