// const userUtils = require('../database/user_utils')
const test = require('tape')

// const Knex = require('knex')
// const knexConfig = require('../knexfile')
//
// const knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])

test('User test works', function (t) {
  t.ok(1, 'user test works')
  t.end()
})

// test('getUser returns expected value', function (t) {
//   const expected = [{ email: 'george@email.com', id: 2, username: 'George' }]
//   knex.migrate.rollback()
//     .then(() => knex.migrate.latest())
//     .then(() => knex.seed.run('users'))
//     .then(() => {
//       return userUtils.getUser({id: 2})
//     })
//     .then((user) => {
//       delete user[0].password
//       t.deepEqual(user, expected, 'got george\'s details')
//       t.end()
//     })
//     .catch((err) => {
//       t.ok(0, err)
//       t.end()
//     })
// })
