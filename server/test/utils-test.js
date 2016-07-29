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

  const expected = [{ email: 'rena@skux.com', id: 4, password: 'password', username: 'Rena' }]

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
  .then(() => {
    return dbUtils.getOne('users', { id: 4 })
  })
  .then((user) => {
    console.log(user, 'successfully added Rena to database')
    t.deepEqual(user, expected, 'we got Rena back in one piece')
    t.end()
  })
  .catch((err) => {
    t.ok(0, err)
    t.end()
  })
})

test('Add game to games table', function (t) {

  const expected = [
  {
    id: 4,
    user_id: 2,
    // Date Time is January 1st 1970 in Unix Time (Google Unix Time!)
    date_time: 1469707200000,
    location: 'Tommy Millions',
    team_a_name: 'The Average Team',
    team_b_name: 'The Pizza Team',
    is_complete: true,
    team_a_score: 2,
    team_b_score: 8,
    sport_name: 'pizza eating' 
  }]

  knex.migrate.rollback()
  .then(() => knex.migrate.latest())
  .then(() => knex.seed.run('games'))
  .then(() => {
    return dbUtils.addOne('games',
    { user_id: 2,
      // Here, the date is in a timestamp format to make PostgreSQL happy
      date_time: 160729,
      location: 'Tommy Millions',
      team_a_name: 'The Average Team',
      team_b_name: 'The Pizza Team',
      is_complete: true,
      team_a_score: 2,
      team_b_score: 8,
      sport_name: 'pizza eating'
    })
  })
  .then(() => {
    return dbUtils.getOne('games', { id: 4 })
  })
  .then((game) => {
    // Parsing the PostgreSQL timestamp to be in the Unixtime timestamp function
    // Turning Fri Jul 29 2016 00:00:00 GMT+1200 (NZST) into 1469707200000
    game[0].date_time = Date.parse(game[0].date_time)
    t.deepEqual(game, expected, 'got a game back')
    t.end()
  })
  .catch((err) => {
    t.ok(0, err)
    t.end()
  })
})

test('Add comment to comments table', function (t) {

  const expected = [{ comment: 'Goal!!', game_id: 2, id: 4 }]

  knex.migrate.rollback()
  .then(() => knex.migrate.latest())
  .then(() => knex.seed.run('comments'))
  .then(() => {
    return dbUtils.addOne('comments',
    {
      game_id: 2,
      comment: 'Goal!!' 
    })
  })
  .then(() => {
    return dbUtils.getOne('comments', { id: 4 })
  })
  .then((comment) => {
    console.log(comment, 'successfully added a comment to the comments table')
    t.deepEqual(comment, expected, 'We got a goal!!')
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
    t.deepEqual(res, expected, 'got all games')
    t.end()
  })
  .then(() => {
    process.exit(0)
  })
  .catch((err) => {
    t.ok(0, err)
    t.end()
  })
})