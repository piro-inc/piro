const dbUtils = require('../database/utils')
const test = require('tape')

const Knex = require('knex')
const knexConfig = require('../knexfile')

const knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])

test('Test Works', function (t) {
  t.ok(1, 'test works')
  t.end()
})

test('Get user from users table', function (t) {
  knex.migrate.rollback()
    .then(() => knex.migrate.latest())
    .then(() => knex.seed.run('users'))
    .then(() => {
      return dbUtils.getOne('users', { id: 1 })
    })
  .then((user) => {
    t.ok(1)
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
    t.ok(1)
    t.end()
  })
  .catch((err) => {
    t.ok(0, err)
    t.end()
  })
})

test('Add game to games table', (t) => {
  knex.migrate.rollback()
  .then(() => knex.migrate.latest())
  .then(() => knex.seed.run('game'))
  .then(() => {
    const dummyGame = {
      user_id: 1,
      date_time: 990108,
      location: 'EDA',
      team_a_name: 'the fun team',
      team_b_name: 'the other guys',
      is_complete: false,
      team_a_score: 1,
      team_b_score: 5,
      sport_name: 'ninja'
    }
    return dbUtils.addOne('games', dummyGame)
  })
  .then((game) => {
    t.ok(1)
    t.end()
  })
  .catch((err) => {
    t.ok(0, err)
    t.end()
  })
})

test('Get all games from games table', (t) => {
  const expected = {
    id: 1,
    user_id: 1,
    location: 'EDA',
    team_a_name: 'the fun team',
    team_b_name: 'the other guys',
    is_complete: false,
    team_a_score: 1,
    team_b_score: 5,
    sport_name: 'ninja'
  }

  knex.migrate.rollback()
  .then(() => knex.migrate.latest())
  .then(() => knex.seed.run('game'))
  .then(() => {
    return dbUtils.getAll('games')
  })
  .then((games) => {
    const res = games[0]
    delete res.date_time
    t.deepEqual(res, expected)
    dbUtils.destroy()
    knex.destroy()
    t.end()
  })
  .catch((err) => {
    t.ok(0, err)
    t.end()
  })
})
