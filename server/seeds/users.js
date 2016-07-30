const bcrypt = require('bcryptjs')

const password = 'something'

const hashed = bcrypt.hashSync(password, 10)

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({username: 'user1', password: hashed, email: 'user1@email.com'}),
        knex('users').insert({username: 'George', password: hashed, email: 'george@email.com'}),
        knex('users').insert({username: 'Kristy', password: hashed, email: 'kristy@email.com'})
      ])
    })
}
