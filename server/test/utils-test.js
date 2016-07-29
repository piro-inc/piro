const dbUtils = require('../database/utils')
const test = require('tape')

const Knex = require('knex')
const knexConfig = require('../knexfile')

const knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])


test('Test Works', function(t) {
	t.ok(1, 'test works')
	t.end()
})

test('Get user from users table', function(t) {
	knex.migrate.rollback()
		.then(() => knex.migrate.latest())
		.then(() => knex.seed.run('users'))
		.then(() => {
			return dbUtils.getOne('users', {id:1})
		})
		.then((user) => {
			console.log(user)
			t.ok(1)
			t.end()
		})
		.catch((err) => {
			t.ok(0, err)
			t.end()
		})
})

test('Add user to users table', function(t) {
	knex.migrate.rollback()
		.then(() => knex.migrate.latest())
		.then(() => knex.seed.run('users'))
		.then(() => {
			return dbUtils.addOne('users', 
				{	username: 'Rena', 
					password: 'password',
					email: 'rena@skux.com'
				})
		})
		.then((user) => {
			console.log(user)
			t.ok(1)
			t.end()
		})
		.catch((err) => {
			t.ok(0, err)
			t.end()
		})
})
