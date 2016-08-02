const dbUtils = require('../database/utils')
const test = require('tape')

const knex = dbUtils.knex

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
  const expected = [{ id: 1, game_id: 3, comment: 'Player 1 injured' }]
  knex.migrate.rollback()
    .then(() => knex.migrate.latest())
    .then(() => knex.seed.run('comments'))
    .then(() => {
      return dbUtils.getOne('comments', { id: 1 })
    })
  .then((comment) => {
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
    t.deepEqual(user, expected, 'we got Rena back in one piece')
    t.end()
  })
  .catch((err) => {
    t.ok(0, err)
    t.end()
  })
})

/*test('Add game to games table and get game from games table', function (t) {
  const expected = [
    {
      id: 4,
      user_id: 2,
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
    delete game[0].date_time
    t.deepEqual(game, expected, 'got a game back')
    t.end()
  })
  .catch((err) => {
    t.ok(0, err)
    t.end()
  })
})*/

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
    t.deepEqual(comment, expected, 'We got a goal!!')
    t.end()
  })
  .catch((err) => {
    t.ok(0, err)
    t.end()
  })
})

/*test('Get all games from games table', function (t) {
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
  .then(() => knex.seed.run('games'))
  .then(() => {
    return dbUtils.getAll('games')
  })
  .then((games) => {
    const res = games.find((game) => {
      return game.location === 'EDA'
    })
    delete res.date_time
    t.deepEqual(res, expected, 'got all games')
    t.end()
  })
  .catch((err) => {
    t.ok(0
      , err)
    t.end()
  })
})*/

test('Update games info', (t) => {
  const expected = 'Random'

  knex.migrate.rollback()
  .then(() => knex.migrate.latest())
  .then(() => knex.seed.run('games'))
  .then(() => {
    return dbUtils.update('games', { id: 1 }, { sport_name: 'Random' })
  })
  .then((id) => {
    return dbUtils.getOne('games', { id: id[0] })
  })
  .then(game => {
    delete game[0].date_time
    t.deepEqual(game[0].sport_name, expected, 'updates game correctly')
    t.end()
  })
  .catch((err) => {
    t.ok(0
      , err)
    t.end()
  })
})

/****    Comments ****/
test('Get a single comment searching by game id', function (t) {
  const expected = 'Try!'
  knex.migrate.rollback()
    .then(() => knex.migrate.latest())
    .then(() => knex.seed.run('comments'))
    .then(() => {
      return commentUtils.getComments({game_id: 2})
    })
  .then((comment) => {
    t.deepEqual(comment[0].comment, expected, 'got a single comment attached to game_id 2')
    t.end()
  })
  .catch((err) => {
    t.ok(0, err)
    t.end()
  })
})

test('Get all comments', function (t) {
  const expected = {comment: 'Try!', game_id: 2}
  knex.migrate.rollback()
    .then(() => knex.migrate.latest())
    .then(() => knex.seed.run('comments'))
    .then(() => {
      return commentUtils.getCommentsTable()
    })
  .then((comments) => {
    comments.map(comment => delete comment.id)
    t.deepLooseEqual(comments.find((comment) => comment.game_id === 2), expected, 'got entire comments table')
    t.end()
  })
  .catch((err) => {
    t.ok(0, err)
    t.end()
  })
})

/****    Games    ****/
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
/*
test('Get all games with a following flag', function (t) {
  const userId = 2
  const expectedT = [
    {id:1, following:true},
    {id:2, following:false},
    {id:3, following:true}
  ]
  const expected = 'Try!'
  knex.migrate.rollback()
    .then(() => knex.migrate.latest())
    .then(() => knex.seed.run('games', 'comments'))
    .then(() => {
      return gamesUtils.getGamesInfo(userId)
    })

  t.ok(1)
  t.end()
})*/

/****    Users    ****/
