const Knex = require('knex')
const knexConfig = require('../knexfile')

const knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])

function getUser(id) {
	return knex('users').where({id})
}

function addUser(email, password, username) {
	const newUser = Object.assign({}, email, password, username)
	return knex('users').returning('id').insert(newUser)
}

module.exports = {
	getUser,
	addUser
}