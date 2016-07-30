const gamesUtils = require('../database/games_utils')
const test = require('tape')

const Knex = require('knex')
const knexConfig = require('../knexfile')

const knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])

test('User test works', function (t) {
  t.ok(1, 'user test works')
  t.end()
})

test('Get a game searching by id', function (t) {
  const expected = 'the fun team'
  knex.migrate.rollback()
    .then(() => knex.migrate.latest())
    .then(() => knex.seed.run('games'))
    .then(() => {
      return gamesUtils.getGame({id: 1})
    })
  .then((game) => {
    t.deepEqual(game[0].team_a_name, expected, 'got team A from games table')
    t.end()
  })
  .catch((err) => {
    t.ok(0, err)
    t.end()
  })
})

test('Get a game searching by sport name', function (t) {
  const expected = 'Vivian St'
  knex.migrate.rollback()
    .then(() => knex.migrate.latest())
    .then(() => knex.seed.run('games'))
    .then(() => {
      return gamesUtils.getGame({sport_name: 'coding'})
    })
  .then((game) => {
    t.deepEqual(game[0].location, expected, 'got EDA from games table')
    t.end()
  })
  .catch((err) => {
    t.ok(0, err)
    t.end()
  })
})
