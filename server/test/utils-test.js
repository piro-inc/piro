const dbUtils = require('../database/utils')
const test = require('tape')

const Knex = require('knex')
const knexConfig = require('../knexfile')

const knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])

test('Test Works', function (t) {
  t.ok(1, 'test works')
  t.end()
})

test('Get a user from users table', function (t) {
  knex.migrate.rollback()
    .then(() => knex.migrate.latest())
    .then(() => knex.seed.run('users'))
    .then(() => {
      return dbUtils.getOne('users', { id: 1 })
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

test('Get a comment from comments table', function (t) {

  const expected = [ { id : 1, game_id: 3, comment: 'Player 1 injured' }]

  knex.migrate.rollback()
    .then(() => knex.migrate.latest())
    .then(() => knex.seed.run('comments'))
    .then(() => {
      return dbUtils.getOne('comments', { id: 1 })
    })
  .then((comment) => {
    console.log(comment)
    t.deepEqual(comment, expected)
    t.end()
  })
  .catch((err) => {
    t.ok(0, err)
    t.end()
  })
})

test('Get a game from games table', function (t) {

  const expected = 'the fun team'

  knex.migrate.rollback()
    .then(() => knex.migrate.latest())
    .then(() => knex.seed.run('games'))
    .then(() => {
      return dbUtils.getOne('games', { id: 1 })
    })
  .then((game) => {
    console.log(game[0].team_a_name)
    t.deepEqual(game[0].team_a_name, expected, 'got team from games table')
    t.end()
  })
  .catch((err) => {
    t.ok(0, err)
    t.end()
  })
})

test('Add user to users table', function (t) {
  knex.migrate.rollback()
  .then(() => knex.migrate.latest())
  .then(() => knex.seed.run('users'))
  .then(() => {
    return dbUtils.addOne('users',
    { username: 'Rena',
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
