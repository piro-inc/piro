const commentUtils = require('../database/comments_utils')
const test = require('tape')

const Knex = require('knex')
const knexConfig = require('../knexfile')

const knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])

test('User test works', function (t) {
  t.ok(1, 'user test works')
  t.end()
})

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

// test('Get multiple comments searching by game id', function (t) {
//   const expected = 'Try!'
//   knex.migrate.rollback()
//     .then(() => knex.migrate.latest())
//     .then(() => knex.seed.run('comments'))
//     .then(() => {
//       return commentUtils.getComments({'game_id': 3})
//     })
//   .then((comments) => {
//     var commentsArray = comments.map(function(object) {
//
//       var commentStore = Object.assign(object.comment)
//       return commentStore
//     })
//     return commentsArray
//   })
//   .then((comments) => {
//     console.log(comments)
//     t.deepEqual(comments[0].comment, expected, 'got a single comment attached to game_id 2')
//     t.end()
//   })
//   .catch((err) => {
//     t.ok(0, err)
//     t.end()
//   })
// })

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

// test('Get latest comment', function (t) {
//   const expected = 'Yellow card'
//   knex.migrate.rollback()
//     .then(() => knex.migrate.latest())
//     .then(() => knex.seed.run('comments'))
//     .then(() => {
//       return commentUtils.getLatestComment(3)
//     })
//     .then((comment) => {
//       t.equal(comment.comment, expected, 'got the comment with the highest id')
//       t.end()
//     })
//   .catch((err) => {
//     t.ok(0, err)
//     t.end()
//   })
// })
