const gamesUtils = require('../database/games_utils')

const test = require('tape')

const Knex = require('knex')
const knexConfig = require('../knexfile')

const knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])

test('User test works', function (t) {
  t.ok(1, 'user test works')
  t.end()
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

test('Get a game and all comments for that game', function (t) {
  const expected = 'Try!'
  knex.migrate.rollback()
    .then(() => knex.migrate.latest())
    .then(() => knex.seed.run('games', 'comments'))
    .then(() => {
      return gamesUtils.getGameComments(2)
    })
  .then((gameInfo) => {
    t.deepEqual(gameInfo.comments[0].comment, expected, 'We got a try!')
    t.end()
  })
  .catch((err) => {
    t.ok(0, err)
    t.end()
  })
})

test('Get all games and a comment for each game', function (t) {
  const expected = 'Try!'
  knex.migrate.rollback()
    .then(() => knex.migrate.latest())
    .then(() => knex.seed.run('games', 'comments'))
    .then(() => {
      return gamesUtils.getGamesInfo()
    })
  .then((gamesInfo) => {
    t.deepEqual(gamesInfo[1].latestComment.comment, expected, 'We got a try!')
    t.end()
  })
  .catch((err) => {
    t.ok(0, err)
    t.end()
  })
})
