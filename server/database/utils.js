const Knex = require('knex')
const knexConfig = require('../knexfile')

const knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])

function getUser(id) {
	return knex('user').where({id})
}

function addUser(email, password, email) {
	const newUser = Object.assign({}, email, password, email)
	return knex('user').returning('id').insert()
}

module.exports = {
	getUser,
	addUser
}