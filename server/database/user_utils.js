// const Knex = require('knex')
// const knexConfig = require('../knexfile')

// const knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])

// function getUser(table, params) {
//   return knex(table).where(params)
// }

// function addUser(table, params) {
//   const newUser = Object.assign({}, email, password, username)
//   return knex('users').returning('id').insert(newUser)
// }

// module.exports = {
//   getUser,
//   addUser
// }